import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; //Wrong arrow, need to change
import { TextInput as RNPTextInput } from "react-native-paper";

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

  const handleEmailConfirm = val => { // check if email are same 
    if (val != email) {
      setCheckValidEmail('Email does not match');
    } else {
      setCheckValidEmail('');
    }
  };

  const handlePassConfirm = val => { // check if pass are same 
    if (val != password) {
      setCheckValidEmail('Password does not match');
    } else {
      setCheckValidEmail('');
    }
  };

  return (
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
        <Text style={styles.title}>Create Account</Text>
      </View>
      
      {/* Validation text */}
      {checkValidEmail ? (
        <Text style={styles.emailValidationText}>{checkValidEmail}</Text>
      ) : null} 
    
      <RNPTextInput //Enter email
        style={styles.TextInputRNPTextInput}
        placeholder="Email Address*"
        label="Email Address*"
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
        onChangeText={value => {
          setEmail(value);
          handleCheckEmail(value);
        }}
      />
      
      <RNPTextInput //Confirm email
        style={styles.TextInputRNPTextInput}
        placeholder="Confirm Email Address*"
        label="Confirm Email Address*"
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
        onChangeText={emailConfirm => {
          setEmailConfirm(emailConfirm);
          handleEmailConfirm(emailConfirm);
        }}
      />
    
      <RNPTextInput //Enter password
        style={styles.TextInputRNPTextInput}
        placeholder="Password*"
        label="Password*"
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
          colors: {text: "black"},
        }}
          secureTextEntry={true}
          onChangeText={password => 
            setPassword(password)
        }
      />
    
      <View>
        <Text style={styles.text}>Password must be a minimum of 8 characters</Text>
      </View>
      
      <RNPTextInput //Confirm password
          style={styles.TextInputRNPTextInput}
          placeholder="Confirm Password*"
          label="Confirm Password*"
          mode="outlined"
          activeOutlineColor="#8273a9"
          theme={{
            fonts: {fontFamily: "OpenSans_400Regular", fontWeight: '600' },
            colors: {text: "black"},
          }}
          secureTextEntry={true}
          onChangeText={password => {
            setPasswordConfirm(password);
            handlePassConfirm(password);
          }}
      />
 
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
    backgroundColor: "#FFFBFE",
    padding: 16,
  },

  //Back Arrow
  backArrow: {
    marginTop: 32,
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

  //Validation text
  emailValidationText: {
    color: "red",
    fontSize: 12,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
  },

  //Continue button
  button: {
    borderRadius: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8d71ad",
    marginTop: 160,
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
