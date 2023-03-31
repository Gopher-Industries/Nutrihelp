import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { TextInput as RNPTextInput } from "react-native-paper";
//google auth
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as React from 'react';

WebBrowser.maybeCompleteAuthSession();


const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function CreateAccount({ navigation }) {

  const [accessToken, setAccessToken] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "53215678571-cfnf974taddd6r8tjgai11sc60v82rqm.apps.googleusercontent.com", //webclient id
    iosClientId: " ",//add Android/iOs Client ID here
    androidClientId: ""
  });

  React.useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
      accessToken && fetchUserInfo(); // if we have access token we are trying to get user info 
    }
  }, [response, accessToken])

  async function fetchUserInfo() {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const userInfo = await repsonse.json();
    setUser(userInfo);
  }

  const showUserInfo = () => {
    if (user) {
      return (
        <View>
          <Text>Welcome: {user.name}</Text>
        </View>
      )
    }
  }

  return (
    <View style={styles.container}>
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
          onPress={() => promptAsync()}>
          <Text style={styles.altButtonText}>Continue with Google</Text>
        </TouchableOpacity>
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

