import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Pressable, Image, Switch,TouchableOpacity } from "react-native";
import * as React from "react";
import { useState } from "react";
import { useEffect, useContext } from "react";
//import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native"
import * as Speech from 'expo-speech';
import { AccessibilityContext } from "./Components/AccessibilityContext"; 


export default function Accessibility ({navigation}) {
  const { accessibilitySettings, setAccessibilitySettings } = useContext(
    AccessibilityContext
  );

  const { colourBlind, textLarge, isVoiceOverOn } = accessibilitySettings;
  // Set up a state to trigger re-renders when Access properties change
  const [accessPropertiesUpdated, setAccessPropertiesUpdated] = useState(0);

  //handle text size button presses
  const handleLargePress = () => {
   if (textLarge == false){
    setAccessibilitySettings(prevSettings => ({
      ...prevSettings,
      textLarge: true,}))
    console.log("large text: " + !textLarge);
  }
  if (isVoiceOverOn == true) {
    speak("Large text");
  }
  };
  
  const handleNormalPress = () => {
    if (textLarge == true){
    setAccessibilitySettings(prevSettings => ({
      ...prevSettings,
      textLarge: false,}))
    console.log("large text: " + !textLarge);
  }
  if (isVoiceOverOn == true) {
    speak("Normal text");
  }
  };


  const updateSwitchColour = (newColour) => {
    setAccessibilitySettings(prevSettings => ({
    ...prevSettings,
    colourBlind: !accessibilitySettings.colourBlind,}))
  console.log("colourblind: " +  !accessibilitySettings.colourBlind);
  if (isVoiceOverOn == true) {
    speak(newColour ? "Colour blind Mode on": "Colour blind Mode off");
  }
  }

//call this for voiceover
  const speak = (text) => {
    Speech.speak(text, {
      language: 'en', // Language code (e.g., 'en', 'es', 'fr', etc.)
      pitch: 1.0, // Pitch of the voice (0.5 to 2.0)
      rate: 1.0, // Speaking rate (0.1 to 0.9 for slow, 1.0 for normal, 1.1 to 2.0 for fast)
    });
  };

  const handleVoiceOverSwitch = (newValue) => {
    setAccessibilitySettings(prevSettings => ({
      ...prevSettings,
      isVoiceOverOn: newValue,}))
    console.log("colourblind: " +  !accessibilitySettings.isVoiceOverOn);
    speak(newValue ? "Voice Over On" : "");
  };

  //stylesheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFBFE",
      padding: 16,
    },
    ml24: {
      marginLeft: 24,
    },
    ml8: {
      marginLeft: 8,
    },
    theFollowingOptionsMayMake: { //'the following options...' text
      position: "absolute",
      top: 190,
      left: 16,
      fontSize: textLarge ? 24 : 16,
      letterSpacing: -0.2,
      lineHeight: 24,
      //fontFamily: "Open Sans",
      color: "#000",
      textAlign: "left",
      width: 329,
      height: 80,
    },
    textSize: { //text size header text
      position: "absolute",
      top: 260,
      left: 16,
      fontSize: textLarge ? 30 : 19,
      lineHeight: 48,
      fontWeight: "600",
      //fontFamily: "Open Sans",
      color: "#000",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      width: 200,
      height: 60,
      fontWeight: "600",
    },
    backButton: { //go back icon
      position: "absolute",
      left: 16,
      top: 5,
      width: 24,
      height: 24,
    },
    headline: {  // 'accessibility' headline
      position: "absolute",
      top: 55,
      left: 16,
      fontSize: textLarge ? 31 : 24,
      lineHeight: 50,
     // fontFamily: "Open Sans",
      color: "#1c1b1f",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      width: 328,
    },
    topAppBar: { //background
      position: "absolute",
      top: 56,
      bottom: 0,
      left: 0,
      backgroundColor: "#fffbfe",
      width: "1%",
    },
    colourBlind: { //'colour blind' text
      position: "absolute",
      top: 395,
      left: 16,
      fontSize: textLarge ? 24 : 16,
      lineHeight: 48,
     // fontFamily: "Open Sans",
      color: "#000",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      width: 200,
      height: 50,
    },
    colourSwitch: { //colour blind switch
      position: "absolute",
      top: 395,
      left: 300,
    },
    voiceOver: { //'voice over' text
      position: "absolute",
      top: 440,
      left: 16,
      fontSize: textLarge ? 24 : 16,
      lineHeight: 48,
      //fontFamily: "Open Sans",
      color: "#000",
      textAlign: "left",
      display: "flex",
      alignItems: "center",
      width: 200,
      height: 50,
    },
    voiceSwitch: { //voice over switch
      position: "absolute",
      top: 440,
      left: 300,
    },
    buttonText: { //continue text
      position: "relative",
      fontSize: textLarge ? 20 : 16,
      letterSpacing: 0,
      lineHeight: 20,
      fontWeight: "700",
     // fontFamily: "Open Sans",
      color: "#f5f2f7",
      textAlign: "center",
    },
    continueButton: { //continue button
      position: "absolute",
      top: 685,
      left: 26,
      borderRadius: 100,
      backgroundColor: colourBlind ? "#f54242": "#8273a9",
      width: 328,
      overflow: "hidden",
      flexDirection: "column",
      paddingHorizontal: 24,
      paddingVertical: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonLarge:{ //box of 'large'
    position: "absolute",
    top: 304,
    left: 188,
    borderRadius: 8,
    borderStyle: "solid",
    borderColor: "#79747e",
    //backgroundColor: (props => props.colour), //"#79747e",
    borderWidth: 1,
    width: 156,
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignItems: "center",
    justifyContent: "center",
    },
    labelText1: { //'large' text
      position: "relative",
      fontSize: textLarge ? 20 : 16,
      letterSpacing: 0,
      lineHeight: 20,
      fontWeight: "600",
     // fontFamily: "Open Sans",
      color: "#1d192b",
      textAlign: "center",
    },
   
    icon1: { //'normal' text position
      position: "relative",
      width: 0,
      height: 18,
      flexShrink: 0,
    },
    labelText2: { //'normal' text
      position: "relative",
      fontSize: textLarge ? 20 : 16,
      letterSpacing: 0,
      lineHeight: 20,
      fontWeight: "600",
      //fontFamily: "Open Sans",
      color: "#1d192b",
      textAlign: "center",
      
      
    },
    buttonNormal: { //'normal' text box
      position: "absolute",
      top: 304,
      left: 16,
      borderRadius: 8,
      borderStyle: "solid",
      borderColor: "#79747e",
      //backgroundColor: "#79747e",
      borderWidth: 1,
      width: 156,
      flexDirection: "row",
      paddingHorizontal: 12,
      paddingVertical: 6,
      alignItems: "center",
      justifyContent: "center",
      
    },
    lineView: { //Line below text size buttons
      position: "absolute",
      top: 368,
      left: 16,
      borderStyle: "solid",
      borderColor: "#79747e",
      borderTopWidth: 1,
      width: 329,
      height: 1,
    },
    accessibility: { //acessibility
      position: "relative",
      borderRadius: 0,
      backgroundColor: "#FFFBFE",//temp to show and test colourblind setting, 
      flex: 10,
      width: "100%",
      overflow: "hidden",
    },
    
    purpleBackground: { //to change text size buttons to purple
      backgroundColor: "#e8def8",
    },
  });
  
//change button background
  const buttonLargeStyles = [
    styles.buttonLarge,
    accessibilitySettings.textLarge && styles.purpleBackground,
  ];
  const buttonNormalStyles = [
    styles.buttonNormal,
    !accessibilitySettings.textLarge && styles.purpleBackground,
  ];
//export text size and colourblind settings
  //module.exports = {switchColour, isLarge};

//main body

  return (
    <View style={styles.accessibility}>
      <Text style={styles.theFollowingOptionsMayMake}
      >
        <Text style={styles.theFollowingOptions}>
          The following options may make using the app easier for you
        </Text>
      </Text>
      <Text style={styles.textSize}>Text Size</Text>
      <Text style={styles.colourBlind}>Colour Blind</Text>
      <Text style={styles.voiceOver}>Voice Over</Text>
      <StatusBar barStyle="default" translucent={true} />
      <View style={styles.topAppBar}>
      <Icon style={styles.backButton}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => 
          {if (isVoiceOverOn == true) {
            speak("Back");
          };
          navigation.goBack()}}
      />
        <Text style={styles.headline}>{`Accessibility  `}</Text>
      </View>
      <Switch //colourblind switch
        style={styles.colourSwitch}
        value={colourBlind}
        onValueChange = {updateSwitchColour}
        thumbColor="#fff"
        trackColor={{ false: "#79747e", true: "#8273a9" }}
      />
      <Switch //voice over switch
        style={styles.voiceSwitch}
        value={isVoiceOverOn}
        onValueChange={handleVoiceOverSwitch}
        thumbColor="#fff"
        trackColor={{ false: "#79747e", true: "#8273a9" }}
      />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => 
          {if (isVoiceOverOn == true) {
          speak("Continue");
        };
          navigation.navigate("CreateAccount")}}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Pressable
        style={buttonLargeStyles}
        onPress={() => {
           handleLargePress()}}
        >
        <Text style={styles.labelText1}>Large</Text>
      </Pressable>
      <Pressable 
        style={buttonNormalStyles}
        onPress={() => {
          handleNormalPress()}}
        >
        <Text style={[styles.labelText2]}>Normal</Text>
      </Pressable>
      <View style={styles.lineView} />
    </View>
  
  );
}

