import { View, Text } from "react-native";
import * as AuthSession from 'expo-auth-session'
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ViewNutritionReport({ navigation }) {
  const signout = async () => {
    try {
      if (!__DEV__) { // checking if we are in production
        // can only be done in production for now we are only using the else to remove the persistence login 
        await AuthSession.revokeAsync({
          token: auth.accessToken // we can also revoke refresh token 
        }, {
          revocationEndpoint: "https://oauth2.googleapis.com/revoke"
        });
        await AsyncStorage.removeItem("auth")
      }
      else {
        await AsyncStorage.removeItem("auth")
        console.log("Logged out dev user")
      }
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("LandingPage")
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
      }}
    >
      <Text style={{ fontSize: 35 }}>
        Nutrition Report {"\n"}
        Comming Soon
      </Text>
      <Text
        style={{
          height: 50,
          width: 250,
          fontSize: 35,
          textAlign: "center",
          backgroundColor: "grey",
          borderRadius: 25,
        }}
        onPress={() => navigation.popToTop()}
      >
        Back
      </Text>
      <Text
        style={{
          height: 50,
          width: 250,
          fontSize: 35,
          textAlign: "center",
          backgroundColor: "#c4cdd4",
          borderRadius: 25,
        }}
        onPress={signout}>
        Sign out
      </Text>
    </View>
  );
}
