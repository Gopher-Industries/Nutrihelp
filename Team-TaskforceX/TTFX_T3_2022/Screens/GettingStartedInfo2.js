import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome"; //this is not the correct arrow, need to change

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function GettingStartedInfo2({ navigation }) {
  return (
    <SafeAreaView style={styles.gettingStartedTwo}>
      <ImageBackground
        source={require("../assets/images/Splash2.png")}
        style={styles.image}
      >
        <Icon //Back arrow
          style={styles.backArrow}
          name="arrow-left"
          size={20}
          color="black"
          type="entypo"
          onPress={() => navigation.goBack()}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Based off your information, we'll create a custom nutrional plan for you
          </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#8273A9" }]}
            // //testing for now, go to Confirm Screen
              onPress={() => navigation.navigate("GettingStartedInfo3")}
            >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  gettingStartedTwo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  //Back arrow
  backArrow: {
    top: 52,
    left: 16,
  },

  textContainer: {
    width: SCREENWIDTH,
    height: SCREENHEIGHT - SCREENHEIGHT / 3,
    backgroundColor: "transparent",
    marginTop: SCREENHEIGHT / 3,
  },

  // Description
  text: {
    fontSize: 16,
    fontFamily: "OpenSans_400Regular",
    color: "black",
    justifyContent: "center",
    padding: 20,
    paddingLeft: 25, //increased for clarity
    paddingRight: 25, //increased for clarity
    textAlign: "center",
    top: 315,
    letterSpacing: -0.2,
    lineHeight: 24,
  },

  //Continue button
  button: { 
    backgroundColor: "#8273A9",
    width: "90%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 100,
    top: 325,
  },

 //Continue button text
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
});

