import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Pressable, Image, Switch,TouchableOpacity } from "react-native";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRoute } from "@react-navigation/native"
//import './Accessibility.css';



const Accessibility = () => {
  const [switchColour, setColourValue] = useState(false);
  //toggle colourblind mode
  
  const navigation = useNavigation();
  const [switchVoice, setVoiceValue] = useState(false);

  // text size
  const [isLarge, setIsLarge] = useState(false);
  const [isLargePressed, setIsLargePressed] = useState(false);
  const [isNormalPressed, setIsNormalPressed] = useState(true);
  //handle text size button presses
  const handleLargePress = () => {
  if (isLargePressed == false){
  setIsLargePressed(!isLargePressed);
    setIsNormalPressed(!isNormalPressed);
  }
};
const handleNormalPress = () => {
  if (isNormalPressed == false){
  setIsNormalPressed(!isNormalPressed);
  setIsLargePressed(!isLargePressed);
  
  }
};


const updateSwitchColour = (newColour) => {
  setColourValue(newColour);
  navigation.setParams(newColour)
}


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
      fontSize: isLarge ? 24 : 16,
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
      fontSize: isLarge ? 30 : 19,
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
      fontSize: isLarge ? 31 : 24,
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
      fontSize: isLarge ? 24 : 16,
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
      fontSize: isLarge ? 24 : 16,
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
      fontSize: isLarge ? 20 : 16,
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
      backgroundColor: switchColour ? "#f54242": "#8273a9",
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
      fontSize: isLarge ? 20 : 16,
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
      fontSize: isLarge ? 20 : 16,
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
    isLargePressed && styles.purpleBackground,
  ];
  const buttonNormalStyles = [
    styles.buttonNormal,
    isNormalPressed && styles.purpleBackground,
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
        onPress={() => navigation.goBack()}
      />
        <Text style={styles.headline}>{`Accessibility  `}</Text>
      </View>
      <Switch //colourblind switch
        style={styles.colourSwitch}
        value={switchColour}
        onValueChange = {setColourValue}
        thumbColor="#fff"
        trackColor={{ false: "#79747e", true: "#8273a9" }}
      />
      <Switch //voice over switch
        style={styles.voiceSwitch}
        value={switchVoice}
        onValueChange={setVoiceValue}
        thumbColor="#fff"
        trackColor={{ false: "#79747e", true: "#8273a9" }}
      />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("CreateAccount", { switchColour, isLarge})}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <Pressable
        style={buttonLargeStyles}
        onPress={() => {if (isLargePressed == false){
          setIsLarge(!isLarge)};
           handleLargePress()}}
        >
        <Text style={styles.labelText1}>Large</Text>
      </Pressable>
      <Pressable 
        style={buttonNormalStyles}
        onPress={() => {if (isLargePressed == true){
          setIsLarge(!isLarge)};
          handleNormalPress()}}
        >
        <Text style={[styles.labelText2]}>Normal</Text>
      </Pressable>
      <View style={styles.lineView} />
    </View>
  
  );
};

export default Accessibility;
