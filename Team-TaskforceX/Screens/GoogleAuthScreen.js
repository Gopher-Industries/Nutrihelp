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
import { googleConfig } from "../config";

WebBrowser.maybeCompleteAuthSession();


const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function GoogleAuthScreen({ navigation }) {

  const [user, setUser] = React.useState();
  const [auth, setAuth] = React.useState();
  const [requireRefresh, setRequireRefresh] = React.useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: googleConfig.webKey, //webclient id
    iosClientId: googleConfig.iOsKey, //iOs Client ID
    androidClientId: googleConfig.androidKey //android client id
    // keys are moved to the google config file which has firebase setup 
  });
  //you need an expo account login and the tokens 

  React.useEffect(() => {
    // console.log(response) // remember to comment 
    if (response?.type === "success") {
      setAuth(response.authentication);
      // if we have access token we are trying to get user info 

      const persistAuth = async () => {
        await AsyncStorage.setItem("auth", JSON.stringify(response.authentication)) // auth is key
      };
      persistAuth();
      fetchUserInfo(); // to get the user data after login
      navigation.navigate("TodaysPlan") // if success go to todays plan
    }
    else if(response?.type === "dismiss" || response?.type === "error" || response?.type === "cancel"){
      navigation.navigate("LogIn")
    }
  }, [response])


  React.useEffect(() => { //setting up persistence if already logged in 
    const getPersistedAuth = async () => {
      const jsonVal = await AsyncStorage.getItem("auth"); // key used here
      if (jsonVal != null) {
        const authJson = JSON.parse(jsonVal);
        setAuth(authJson);
        // console.log(authJson);// showing only auth path 

        // console.log("Token life:")
        // console.log(AuthSession.TokenResponse.isTokenFresh());

        setRequireRefresh(!AuthSession.TokenResponse.isTokenFresh({
          expiresIn: authJson.expiresIn,
          issuedAt: authJson.issuedAt
        }));
      }
    };
    getPersistedAuth()
  }, [])

  const fetchUserInfo = async () => { //getting user details 
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${auth.accessToken}` }
    });

    response.json().then(data => {
      console.log(data); // login data of user
      setUser(data);
    })
  }

  const showUserInfo = () => {
    if (user) {
      return (
        <View style={styles.text}>
          <Text>Welcome {user.name}</Text>
        </View>
      )
    }
  }


  // platform check for refresh 
  // This will be used with the refresh token thing below. 
  // Refresh token is broken for android, check this link https://github.com/expo/expo/issues/12808
  const getclientID = () => {
    if (Platform.OS === "android") {
      return googleConfig.androidKey;
    }
    else if (Platform.OS === 'web') {
      return googleConfig.webKey;
    }
    else if (Platform.OS === "ios") {
      return googleConfig.iOsKey;
    }
    else {
      console.log("Invalid input")
    }
  }

  // const refreshToken = async () => {
  //   const clientId = getclientID();
  //   console.log(auth);
  //   const tokenResult = await AuthSession.refreshAsync({
  //     clientId: clientId,
  //     refreshToken: auth.refreshToken
  //   }, {
  //     tokenEndpoint: "https://www.googleapis.com/oauth2/v4/token"
  //   });

  //   tokenResult.refreshToken = auth.refreshToken;

  //   setAuth(tokenResult);
  //   await AsyncStorage.setItem("auth", JSON.stringify(tokenResult));
  //   setRequireRefresh(false);
  // };

  // if (requireRefresh) {
  //   return (
  //     <View>
  //       <TouchableOpacity
  //         style={styles.button}
  //         onPress={refreshToken}>
  //         <Text style={styles.buttonText}>Token Requires Refresh</Text>
  //       </TouchableOpacity>
  //     </View>
  //   )
  // }


  async function Logout() { //export this logout somehow to make it work with the sign out in nutrition 
    // we can't export this function so we use the data from inside. 
    await AuthSession.revokeAsync({
      token: auth.accessToken // we can also revoke refresh token 
    }, {
      revocationEndpoint: "https://oauth2.googleapis.com/revoke"
    });
    setAuth(undefined); // removing Auth 
    setUser(undefined);
    await AsyncStorage.removeItem("auth"); // removing from persistence 
  }

  function login(){
    if(!auth)
    {
      promptAsync({ useProxy: true, showInRecents: true })
    }
  }

  return (
    login()
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

