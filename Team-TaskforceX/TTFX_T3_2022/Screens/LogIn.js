import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
//google auth
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // refresh token
import * as AuthSession from 'expo-auth-session'; // revoke token 

WebBrowser.maybeCompleteAuthSession();


const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function CreateAccount({ navigation }) {

  // const [accessToken, setAccessToken] = React.useState(); // don't need this as we are using Auth to persist the login with google 
  const [user, setUser] = React.useState(null);
  const [auth,setAuth] = React.useState();
  const [requireRefresh, setRequireRefresh] = React.useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "27081580903-20un610dr5cchg6cqkni4uo0t428h31k.apps.googleusercontent.com", //webclient id
    iosClientId: "27081580903-vi9btr7cke1n3k8ka21m5tfamcbldlfk.apps.googleusercontent.com ", //iOs Client ID
    androidClientId: "27081580903-hvgc8op2ois587c22i6jsm56gju02irq.apps.googleusercontent.com" //android client id
  });

  React.useEffect(() => {
    // console.log(response)
    if (response?.type === "success") {
      // setAccessToken(response.authentication.accessToken); // no need for this since we are using setAuth 
      setAuth(response.authentication);
      // if we have access token we are trying to get user info 

      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response.authentication)) // auth is key
      };
      persistAuth();
      fetchUserInfo();
      navigation.navigate("TodaysPlan")
    }
  }, [response])


  React.useEffect(()=>{ //setting up persistence if already logged in 
    const getPersistedAuth = async () =>{
      const jsonVal = await AsyncStorage.getItem("auth"); // key used here
      if(jsonVal !=null)
      {
        const authJson = JSON.parse(jsonVal);
        setAuth(authJson);
        // console.log(authJson);// showing only auth path 

        // console.log("Token life:")
        // console.log(AuthSession.TokenResponse.isTokenFresh());

        setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh({
          expiresIn:authJson.expiresIn,
          issuedAt: authJson.issuedAt
        }));
      }
    };
    getPersistedAuth()
  },[])

  const fetchUserInfo = async () => { //getting user details 
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${auth.accessToken}` } // change from access token to auth since we don't need anymore
    });
    
    response.json().then(data=>{
      console.log(data); // login data of user
      setUser(data);
    })
  }

  const showUserInfo = () => {
    if (user) {
      return(
        <View style={styles.text}>
          <Text>Welcome {user.name}</Text>
        </View>
      )
    }
  }


  // platform check for refresh 
  const getclientID = () =>{
    if(Platform.OS=== "android")
    {
      return "27081580903-hvgc8op2ois587c22i6jsm56gju02irq.apps.googleusercontent.com" ;
    }
    else if(Platform.OS === 'web')
    {
      return "27081580903-20un610dr5cchg6cqkni4uo0t428h31k.apps.googleusercontent.com";
    }
    else if(Platform.OS === "ios")
    {
      return "27081580903-vi9btr7cke1n3k8ka21m5tfamcbldlfk.apps.googleusercontent.com";
    }
    else {
      console.log("Invalid input")
    }
  }

  const refreshToken = async () => {
    const clientId = getclientID();
    // console.log(auth);
    const tokenResult = await AuthSession.refreshAsync({
      clientId: clientId,
      refreshToken: auth.refreshToken
    },{
      tokenEndpoint:"https://www.googleapis.com/oauth2/v4/token"
    });
    
    tokenResult.refreshToken = auth.refreshToken;

    setAuth(tokenResult);
    await AsyncStorage.setItem("auth",JSON.stringify(tokenResult));
    setRequireRefresh(false);
  };

  // if(requireRefresh){
  //   return (
  //     <View>
  //       <TouchableOpacity
  //       style={styles.button}
  //       onPress={refreshToken}>
  //       <Text style={styles.buttonText}>Token Requires Refresh</Text>
  //     </TouchableOpacity>
  //     </View>
  //   )
  // }

  
  const Logout = async () =>{ // we logout by revoking token 
    await AuthSession.revokeAsync({
     token: auth.accessToken // we can also revoke refresh token 
    },{
     revocationEndpoint: "https://oauth2.googleapis.com/revoke" 
    });
    setAuth(undefined); // removing Auth 
    setUser(undefined);
    await AsyncStorage.removeItem("auth"); // removing from persistence 
 };

  return (
    <View style={styles.container}>
      {/* {showUserInfo()} */}
      <View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>Welcome back!</Text>
      </View>
      <RNPTextInput //Username field
        style={styles.usernameTextInputRNPTextInput}
        placeholder="Email Address"
        label="Email Address"
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: { fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: { text: "black" },
        }}
      />
      
      <RNPTextInput //Password field
        style={styles.passwordTextInputRNPTextInput}
        placeholder="Password"
        label="Password"
        mode="outlined"
        activeOutlineColor="#8273a9"
        secureTextEntry={true}
        theme={{
          fonts: { fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: { text: "black" },
        }}
      />
      <TouchableOpacity
        style={styles.termButton}
        onPress={() => alert("This is a future feature")}>
        <Text style={styles.forgotPassword}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TodaysPlan")}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
      </View>


      <View>
        <TouchableOpacity
          style={styles.altButton}
          onPress={auth ? fetchUserInfo : () => promptAsync({useProxy:true,showInRecents:true })}>
            {/* // if we have access token we are trying to get user info  */}
          <Text style={styles.altButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        {auth ? <TouchableOpacity 
        onPress={Logout}>
        <Text style={styles.altButtonText}>Logout from Google</Text>
        </TouchableOpacity> :undefined } 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
    padding: 16,
  },

  //Back Arrow
  backArrow: {
    marginTop: 52,
  },

  //Main Title
  title: {
    fontSize: 24,
    fontFamily: "OpenSans_400Regular",
    color: "black",
    marginTop: 30,
    lineHeight: 32,
  },

  //Username field
  usernameTextInputRNPTextInput: {
    borderRadius: 4,
    borderColor: "black",
    borderStyle: "solid",
    width: 361,
    height: 56,
    backgroundColor: "#FFFBFE",
    marginTop: -150,
  },

  //Password field
  passwordTextInputRNPTextInput: {
    borderRadius: 4,
    borderColor: "black",
    borderStyle: "solid",
    width: 361,
    height: 56,
    backgroundColor: "#FFFBFE",
    marginTop: 16,
  },

  //Forgot password
  forgotPassword: {
    textDecorationLine: "underline",
    fontSize: 14,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
    textAlign: 'right',
    marginTop: 16,
  },

  //Paragraph
  text: {
    marginTop: 40,
    marginBottom: SCREENHEIGHT / 4,
    color: "black",
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
  },

  //Continue with email button
  button: {
    borderRadius: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8d71ad",
    marginTop: 130,
    marginBottom: 32,
  },

  //Continue with google button
  altButton: {
    borderRadius: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "FFFBFE",
    borderWidth: 1,
    borderColor: "#79747e",
    marginTop: 32,
    marginBottom: 32,
  },

  //Continue with email button text
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'OpenSans_400Regular',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Continue with Google text
  altButtonText: {
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'OpenSans_400Regular',
    color: '#8d71ad',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

