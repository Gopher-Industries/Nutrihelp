import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export default function CreateAccount({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfrim, setPasswordConfirm] = useState("");
  const [checkValidEmail, setCheckValidEmail] = useState("");

  const handleCheckEmail = (val) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (val.length === 0) {
      setCheckValidEmail("Email address must be entered");
    } else if (reg.test(val) === false) {
      setCheckValidEmail("Please enter valid email address");
    } else if (reg.test(val) === true) {
      setCheckValidEmail("");
    }
  };

  const handleEmailConfirm = (val) => {
    console.log(email);
    console.log(val);
    if (val !== email) {
      setEmailConfirm("doesnt match");
    } else {
      setCheckValidEmail("");
    }
  };

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
        <Text style={styles.title}>Create Account</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email address*"
          placeholderTextColor="gray"
          keyboardType="email-address"
          onChangeText={(value) => {
            setEmail(value);
            handleCheckEmail(value);
          }}
        />
      </View>

      {checkValidEmail ? (
        <Text style={styles.emailValidationText}>{checkValidEmail}</Text>
      ) : null}

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Email Address*"
          placeholderTextColor="gray"
          keyboardType="email-address"
          onChangeText={(emailConfirm) => setEmailConfirm(emailConfirm)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password*"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View>
        <Text style={styles.text}>Password must have...</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password*"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <View>
        <Text style={styles.text}>* Mandatory information</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Authentication")}
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

  emailValidationText: {
    color: "red",
    marginBottom: 10,
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
