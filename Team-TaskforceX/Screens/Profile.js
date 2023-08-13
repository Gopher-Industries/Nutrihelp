import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SelectDropDown from "react-native-select-dropdown";
import { TextInput as RNPTextInput } from "react-native-paper";
import { Access } from "./Accessibility";
import * as Speech from 'expo-speech';

let colourBlind =  Access.colourBlind;
let textLarge =  Access.textLarge;
let isVoiceOverOn =  Access.isVoiceOverOn;

export default function Profile({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");


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

  //hardcoded for now, use genderx to test logic
  //const genderList = ["Male", "Female"];

  return (
  <ScrollView>
    <View style={styles.container}>
      <Icon
        style = {styles.backArrow}
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
      <View>
        <Text style={styles.title}>Create Profile</Text>
      </View>

      <RNPTextInput //First name input
        style={styles.TextInputRNPTextInput}
        placeholder="First Name*"
        label="First Name*"
        onFocus={() => handleInputFocus("First name")}
        mode="outlined"
        activeOutlineColor="#8273a9"
        onChangeText={(firstName) => setFirstName(firstName)}
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
      />
     
      <RNPTextInput //Surname input
        style={styles.TextInputRNPTextInput}
        placeholder="Surname*"
        label="Surname*"
        onFocus={() => handleInputFocus("Surname")}
        mode="outlined"
        activeOutlineColor="#8273a9"
        onChangeText={(surname) => setSurname(surname)}
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
      />
  
      <RNPTextInput //Age input
        style={styles.TextInputRNPTextInput}
        placeholder="Age in years*"
        label="Age*"
        onFocus={() => handleInputFocus("Age")}
        mode="outlined"
        activeOutlineColor="#8273a9"
        onChangeText={(age) => setAge(age)}
        keyboardType={"number-pad"}
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
      />
    
      <RNPTextInput //Gender placeholder, this needs to be a dropdown menu
        style={styles.TextInputRNPTextInput}
        placeholder="Gender*"
        label="Gender*"
        onFocus={() => handleInputFocus("Gender")}
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
      />

      <RNPTextInput //Weight input
        style={styles.TextInputRNPTextInput}
        placeholder="Weight in KG*"
        label="Weight*"
        onFocus={() => handleInputFocus("Weight")}
        mode="outlined"
        activeOutlineColor="#8273a9"
        onChangeText={(weight) => setWeight(weight)}
        keyboardType={"number-pad"}
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
      />
    
      <RNPTextInput //Height input
        style={styles.TextInputRNPTextInput}
        placeholder="Height in CM*"
        label="Height*"
        mode="outlined"
        onFocus={() => handleInputFocus("Height")}
        activeOutlineColor="#8273a9"
        onChangeText={(height) => setHeight(height)}
        keyboardType={"number-pad"}
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
      />

      <RNPTextInput //Mobility placeholder, this needs to be a dropdown menu
        style={styles.TextInputRNPTextInput}
        placeholder="Mobility*"
        label="Mobility*"
        onFocus={() => handleInputFocus("Mobility")}
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
      />

      <View>
        <Text style={styles.text}>* Mandatory information</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => 
          {if (isVoiceOverOn == true) {
            speak("Continue");
          };
          navigation.navigate("DietryRequirements")}}
      >
      <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  </ScrollView>
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
    marginTop: 32,
  },

  //User input fields
  TextInputRNPTextInput: {
    borderRadius: 4,
    borderColor: "black",
    borderStyle: "solid",
    width: 361,
    height: 56,
    backgroundColor: "#FFFBFE",
    marginTop: 16,
    fontSize:  textLarge ? 20: 16,
  },

  //Title
  title: {
    fontSize: textLarge ? 30 : 24,
    fontFamily: "OpenSans_400Regular",
    color: "black",
    marginTop: 32,
    marginBottom: 16,
    lineHeight: 32,
  },

  //Small text
  text: {
    color: "black",
    fontSize: textLarge ? 16: 12,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
    marginTop: 8,
  },

  //Continue button
  button: {
    borderRadius: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colourBlind ? "red":"#8273a9",
    marginTop: 32,
    marginBottom: 32,
  },

  //Continue button text
  buttonText: {
    fontSize:  textLarge ? 20: 16,
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



/*
 <View style={styles.inputView}>
        <SelectDropDown
          buttonStyle={styles.inputView}
          data={genderList}
          onSelect={() => alert("Test")}
        />
    

        {/* <TextInput
          style={styles.TextInput}
          placeholder="Gender*"
          placeholderTextColor="gray"
          onChangeText={(gender) => setGender(gender)}
        />        
*/
