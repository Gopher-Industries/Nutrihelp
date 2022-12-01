import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SelectDropDown from "react-native-select-dropdown";
// import DropDownPicker from "react-native-dropdown-picker";

export default function Profile({ navigation }) {
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  //hardcoded for now, use genderx to test logic
  const genderList = ["Male", "Female"];

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.navigate("LandingPage")}
      />
      <View>
        <Text style={styles.title}>Create Profile</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="First Name*"
          placeholderTextColor="gray"
          onChangeText={(firstName) => setFirstName(firstName)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Surname*"
          placeholderTextColor="gray"
          onChangeText={(surname) => setSurname(surname)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Age*"
          placeholderTextColor="gray"
          onChangeText={(age) => setAge(age)}
          keyboardType={"number-pad"}
        />
      </View>
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
        /> */}
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Weight*"
          placeholderTextColor="gray"
          onChangeText={(weight) => setWeight(weight)}
          keyboardType={"number-pad"}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Height*"
          placeholderTextColor="gray"
          onChangeText={(height) => setHeight(height)}
          keyboardType={"number-pad"}
        />
      </View>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },

  title: {
    fontSize: 25,
    color: "black",
    marginBottom: 20,
    marginTop: 20,
  },

  inputView: {
    borderRadius: 5,
    borderColor: "black",
    height: 60,
    marginBottom: 20,
    borderWidth: 1,
  },

  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  text: {
    fontWeight: "bold",
    paddingBottom: 10,
    color: "green",
  },

  button: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8d71ad",
    margin: 10,
  },

  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },
});
