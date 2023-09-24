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
import React, {useState} from "react";
import Icon from "react-native-vector-icons/FontAwesome"; //this is not the correct arrow, need to change
import { useAccessibilityContext } from "./Components/AccessibilityContext"; // Import the context hook
import * as Speech from 'expo-speech';


const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function GettingStartedInfo3({ navigation }) {

  const { accessibilitySettings, setAccessibilitySettings } = useAccessibilityContext();
  const { colourBlind, textLarge, isVoiceOverOn } = accessibilitySettings;
  // Set up a state to trigger re-renders when Access properties change
  const [accessPropertiesUpdated, setAccessPropertiesUpdated] = useState(0);


   //call this for voiceover
   const speak = (text) => {
    Speech.speak(text, {
      language: 'en', // Language code (e.g., 'en', 'es', 'fr', etc.)
      pitch: 1.0, // Pitch of the voice (0.5 to 2.0)
      rate: 1.0, // Speaking rate (0.1 to 0.9 for slow, 1.0 for normal, 1.1 to 2.0 for fast)
    });
  };
  
  const styles = StyleSheet.create({
    gettingStartedThree: {
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
      fontSize: textLarge ? 20 : 16,
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
      fontSize: textLarge ? 20 : 16,
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

  return (
    <SafeAreaView style={styles.gettingStartedThree}>
      <ImageBackground
        source={require("../assets/images/Splash3.png")}
        style={styles.image}
      >
        <Icon //Back arrow
          style={styles.backArrow}
          name="arrow-left"
          size={20}
          color="black"
          type="entypo"
          onPress={() => {if (isVoiceOverOn == true) {
            speak("Back");
          };navigation.goBack()}}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            We'll keep your family or carer up to date with your nutrional health
          </Text>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: "#8273A9" }]}
            // //testing for now, go to Confirm Screen
              onPress={() => {if (isVoiceOverOn == true) {
                speak("Continue");}
                navigation.navigate("Accessibility")}}
            >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}




