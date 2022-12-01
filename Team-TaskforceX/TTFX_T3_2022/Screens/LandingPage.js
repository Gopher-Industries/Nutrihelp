import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function LandingPage({ navigation }) {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/square-logo-blue-text-black.png")}
        style={styles.image}
      >
        <Text style={styles.header}>NutriHelp</Text>

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Nutrihelp supports you in managing your general wellbeing,
            nutrient-related diseases and deficiencies through personalized
            nutrition advice.
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#8d71ad" }]}
            // //testing for now, go to Confirm Screen
            onPress={() => navigation.navigate("GettingStartedInfo1")}
          >
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.altButton}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={styles.altButtonText}>I already have an account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.termButton}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={{ textDecorationLine: "underline" }}>
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    // height: SCREENHEIGHT,
    backgroundColor: "transparent",
    justifyContent: "center",
  },

  header: {
    fontSize: 40,
    color: "black",
    padding: 30,
    top: SCREENHEIGHT / 10,
    textAlign: "center",
    fontWeight: "bold",
  },

  textContainer: {
    width: SCREENWIDTH,
    height: SCREENHEIGHT - SCREENHEIGHT / 3,
    backgroundColor: "white",
    marginTop: SCREENHEIGHT / 3,
  },

  text: {
    fontSize: 18,
    color: "black",
    justifyContent: "center",
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: "center",
  },

  button: {
    backgroundColor: "#8d71ad",
    width: "80%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    top: 10,
  },

  altButton: {
    backgroundColor: "white",
    width: "80%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "gray",
    top: 10,
    margin: 10,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  altButtonText: {
    fontSize: 18,
    color: "#8d71ad",
    fontWeight: "bold",
    top: 0,
    alignSelf: "center",
    padding: 10,
  },

  termButton: {
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function LandingPage({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={{ marginLeft: 10, marginTop: 30 }}>
//         <Text style={{ fontWeight: "bold", fontSize: 30 }}>NutriHealth</Text>
//       </View>
//       <Button
//         title="Get Started"
//         onPress={() => navigation.navigate("GettingStartedInfo1")}
//       />
//       <Button
//         title="I already have an account"
//         onPress={() => navigation.navigate("LogIn")}
//       />
//       {/* <StatusBar style="auto" /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
