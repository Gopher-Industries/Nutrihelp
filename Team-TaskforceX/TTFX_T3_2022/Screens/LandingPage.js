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
        source={require("../assets/images/SplashScreen.png")}
        style={styles.image}
      >
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Nutrihelp supports you in managing your general wellbeing,
            nutrient-related diseases and deficiencies through personalised
            nutrition advice.
          </Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#8d71ad" }]}
            // //testing for now, go to Confirm Screen
            onPress={() => navigation.navigate("GettingStartedInfo1")}
          >
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.altButton}
            onPress={() => navigation.navigate("LogIn")}
          >
            <Text style={styles.altButtonText}>I Already Have An Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.termButton}
            onPress={() => navigation.navigate("")} //no terms of service page yet.
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
    backgroundColor: "transparent",
    justifyContent: "center",
  },

  textContainer: {
    width: SCREENWIDTH,
    height: SCREENHEIGHT - SCREENHEIGHT / 3,
    marginTop: SCREENHEIGHT / 3,
    backgroundColor: "transparent",
  },

  //Description text  
  text: { 
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontFamily: 'OpenSans_400Regular',
    color: '#000',
    justifyContent: "center",
    padding: 20,
    paddingLeft: 30, //visually better with 30 padding
    paddingRight: 30, //visually better with 30 padding
    textAlign: "center",
    top: 195,
  },

  //Get Started button
  button: {
    backgroundColor: "#8273A9",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 100,
    marginBottom: 16,
    width: "90%",
    top: 210,
  },

  //Already have account button
  altButton: {
    backgroundColor: "#FFFBFE",
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#79747E",
    top: 210,
    marginBottom: 16,
  },

  //Get Started text
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

  //Already have account text
  altButtonText: {
    color: "#8273A9",
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'OpenSans_400Regular',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //terms of service
  termButton: {
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    top: 210,
  },
});
