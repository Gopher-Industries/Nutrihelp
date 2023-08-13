import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput as RNPTextInput } from "react-native-paper";
import { useRoute } from '@react-navigation/native';
import { useEffect } from "react";
import { Access } from "./Accessibility";
import * as Speech from 'expo-speech';

let colourBlind =  Access.colourBlind;
let textLarge =  Access.textLarge;
let isVoiceOverOn =  Access.isVoiceOverOn;

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;


export default function Authentication({ navigation }) {
    //call this for voiceover
    const speak = (text) => {
      Speech.speak(text, {
        language: 'en', // Language code (e.g., 'en', 'es', 'fr', etc.)
        pitch: 1.0, // Pitch of the voice (0.5 to 2.0)
        rate: 1.0, // Speaking rate (0.1 to 0.9 for slow, 1.0 for normal, 1.1 to 2.0 for fast)
      });
    };
  
    const handleInputFocus = (label) => {
      if (isVoiceOverOn) {
        speak(label);
      }
    };

  return (
    <View style={styles.container}>
      <Icon //Back arrow
        style={styles.backArrow}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => 
          {if (isVoiceOverOn == true) {
            speak("Back");
          };navigation.goBack()}}
      />
      <View>
        <Text style={styles.title}>Two Factor Authentication</Text>
        <Text style={styles.textOne}>Protecting your information is very important to NutriHelp</Text>
        <Text style={styles.textTwo}>Please verify your account by entering the 6-digit code sent to your email address</Text>
      </View>
      <RNPTextInput //2FA field
        style={styles.twoFactorTextInputRNPTextInput}
        placeholder="6-Digit Code"
        label="6-Digit Code"
        onFocus={() => handleInputFocus("6 Digit code")}
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: { fontFamily: "OpenSans_400Regular", fontWeight: '600',  },
          colors: {text: "black"},
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          {if (isVoiceOverOn == true) {
            speak("Verify Code");
          }; navigation.navigate("Profile")}}
      >
      <Text style={styles.buttonText}>Verify Code</Text>
      </TouchableOpacity>
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
    fontSize: textLarge ? 30 : 24,
    fontFamily: "OpenSans_400Regular",
    color: "black",
    marginTop: 32,
    lineHeight: 32,
  },

  //2FA field
  twoFactorTextInputRNPTextInput: {
    borderRadius: 4,
    borderColor: "black",
    borderStyle: "solid",
    width: 361,
    height: 56,
    backgroundColor: "#FFFBFE",
    marginTop: -150,
  },

  //Paragraph One
  textOne: {
    marginTop: 40,
    marginBottom: SCREENHEIGHT / 4,
    color: "black",
    fontSize: textLarge ? 20 : 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
  },

   //Paragraph Two
   textTwo: {
    marginTop: -150,
    marginBottom: SCREENHEIGHT / 4,
    color: "black",
    fontSize: textLarge ? 20 : 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
  },

  //Verify code button
  button: {
    position: "absolute",
    top: 685,
    left: 26,
    borderRadius: 100,
    backgroundColor: colourBlind ? "red":"#8273a9",
    width: 328,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  //Verify code button text
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