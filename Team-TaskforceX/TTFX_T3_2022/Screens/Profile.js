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
// import DropDownPicker from "react-native-dropdown-picker";
import { TextInput as RNPTextInput } from "react-native-paper";

export default function Profile({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

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
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text style={styles.title}>Create Profile</Text>
      </View>

      <RNPTextInput //First name input
        style={styles.TextInputRNPTextInput}
        placeholder="First Name*"
        label="First Name*"
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
        onPress={() => navigation.navigate("DietryRequirements")}
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
  },

  //Title
  title: {
    fontSize: 24,
    fontFamily: "OpenSans_400Regular",
    color: "black",
    marginTop: 32,
    marginBottom: 16,
    lineHeight: 32,
  },

  //Small text
  text: {
    color: "black",
    fontSize: 12,
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
    backgroundColor: "#8d71ad",
    marginTop: 32,
    marginBottom: 32,
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
