import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput as RNPTextInput } from "react-native-paper";
import { switchColour, isLarge } from "./Accessibility";
import { useRoute } from "@react-navigation/native";
import { validate } from "email-validator";
import { zxcvbn } from "zxcvbn";
import axios from "axios";
import nodemailer from "nodemailer";

export default function CreateAccount({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [checkValidPassword, setCheckValidPassword] = useState("");

  const route = useRoute();
  const { isLarge, switchColour } = route.params || {}

  useEffect(() => {
  if (emailConfirm && email !== emailConfirm) {
    setEmailErrorMessage("Email addresses must match");
  } else {
    setEmailErrorMessage("");
  }
}, [emailConfirm, email]);

  useEffect(() => {
  if (passwordConfirm && password !== passwordConfirm) {
    setPasswordErrorMessage("Passwords must match");
  } else {
    setPasswordErrorMessage("");
  }
}, [passwordConfirm, password]);

  const validateEmail = (val) => {
    if (!val) {
      setEmailErrorMessage("Email address is required");
    } else if (!validate(val)) {
      setEmailErrorMessage("Invalid email address");
    } else {
      setEmailErrorMessage("");
    }
  };

  const validatePassword = (val) => {
    const { score } = zxcvbn(val);
    if (val.length < 8) {
      setPasswordErrorMessage("Password must be at least 8 characters long");
    } else if (score < 3) {
      setPasswordErrorMessage(
        "Password must contain uppercase letters, lowercase letters, and numbers"
      );
    } else {
      setPasswordErrorMessage("");
    }
  };

  const handleCreateAccount = async () => {
    try {
      const response = await axios.post("https://example.com/create-account", {
        email,
        password,
      });
      console.log(response.data);

      // Send Email
      const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: "email@gmail.com",
          clientId: "client_id",
          clientSecret: "client_secret",
          refreshToken: "refresh_token",
          accessToken: "access_token",
        },
      });
      const mailOptions = {
        from: "GopherTTFX@gmail.com",
        to: email,
        subject: "Email Verification",
        text: "Please verify your email address to complete registration",
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log("Email sent: " + info.response);
        }
      });

      Alert.alert("Account created successfully!");
      navigation.navigate("Home");
    } catch (error) {
      console.error(error);
      Alert.alert("An error occurred while creating the account.");
    }
  };
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
      fontSize: isLarge ? 30 : 24,
      fontFamily: "OpenSans_400Regular",
      color: "black",
      marginTop: 32,
      marginBottom: 16,
      lineHeight: isLarge ? 32 : 28,
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
      fontSize: isLarge ? 16 : 12,
      letterSpacing: 0.1,
      lineHeight: isLarge ? 20 : 16,
      fontWeight: "600",
      fontFamily: "OpenSans_400Regular",
      marginTop: 8,
    },

    //Validation text
    emailValidationText: {
      color: "red",
      fontSize: isLarge ? 16 : 12,
      letterSpacing: 0.1,
      lineHeight: isLarge ? 20 : 16,
      fontWeight: "600",
      fontFamily: "OpenSans_400Regular",
    },

    //Continue button
    button: {
      borderRadius: 100,
      height: 40,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: switchColour ? "red" : "#8273a9",
      marginTop: 160,
      marginBottom: 32,
    },

    //Continue button text
    buttonText: {
      fontSize: isLarge ? 20 : 16,
      letterSpacing: 0.1,
      lineHeight: isLarge ? 20 : 16,
      fontWeight: "700",
      fontFamily: "OpenSans_400Regular",
      color: "#fff",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const handleCheckPassword = (val) => {
    let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;

    if (val.length === 0) {
      setCheckValidPassword("Password must be entered");
    } else if (passRegex.test(val) === false) {
      setCheckValidPassword(
        "Password must be a minimum of 6 characters including uppercase, lowercase and numeric values"
      );
    } else if (passRegex.test(val) === true) {
      setCheckValidPassword("");
    }
  };

  const handlePassConfirm = (passwordConfirm) => {
    if (passwordConfirm !== password) {
      setPasswordErrorMessage("Passwords do not match");
    } else {
      setPasswordErrorMessage("");
    }
  };


  <><RNPTextInput //Enter password

        style={styles.TextInputRNPTextInput}
        placeholder="Password*"
        label="Password*"
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
            fonts: { fontFamily: "OpenSans_400Regular", fontWeight: "600" },
            colors: { text: "black" },
        }}
        secureTextEntry={true}
        onChangeText={(value) => {
            setPassword(value);
            handleCheckPassword(value);
        } } /><RNPTextInput
        style={styles.TextInputRNPTextInput}
        placeholder="Confirm Password*"
        label="Confirm Password*"
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: { fontFamily: "OpenSans_400Regular", fontWeight: "600" },
          colors: { text: "black" },
        }}
        secureTextEntry={true}
        onChangeText={(value) => {
          setPasswordConfirm(value);
          handlePassConfirm(value);
        }}
      /></>

  {checkValidPassword ? (
    <Text style={styles.passwordValidationText}>{checkValidPassword}</Text>
  ) : null}
    <><RNPTextInput //Confirm password


    style={styles.TextInputRNPTextInput}
    placeholder="Password*"
    label="Password*"
    mode="outlined"
    activeOutlineColor="#8273a9"
    theme={{
      fonts: { fontFamily: "OpenSans_400Regular", fontWeight: "600" },
      colors: { text: "black" },
    }}
    secureTextEntry={true}
    onChangeText={(value) => {
      setPassword(value);
      handleCheckPassword(value);
    }}
  />
  <RNPTextInput
    style={styles.TextInputRNPTextInput}
    placeholder="Confirm Password*"
    label="Confirm Password*"
    mode="outlined"
    activeOutlineColor="#8273a9"
    theme={{
      fonts: { fontFamily: "OpenSans_400Regular", fontWeight: "600" },
      colors: { text: "black" },
    }}
    secureTextEntry={true}
    onChangeText={(value) => {
      setPasswordConfirm(value);
      handlePassConfirm(value);
    }}
  />
  {checkValidPassword ? (
    <Text style={styles.passwordValidationText}>{checkValidPassword}</Text>
  ) : null}

  <TouchableOpacity
    style={styles.button}
    onPress={() => {
      if (
        checkValidEmail ||
        email === "" ||
        emailConfirm === "" ||
        password === "" ||
        passwordConfirm === ""
      ) {
        setCheckValidEmail(
          "Please enter valid information in all fields"
        );
      } else {
        if (password.length < 6) {
          setCheckValidEmail(
            "Password must be a minimum of 6 characters, containing at least one uppercase letter, one lowercase letter, and one number"
          );
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
          setCheckValidEmail(
            "Password must contain at least one uppercase letter, one lowercase letter, and one number"
          );
        } else if (email !== emailConfirm) {
          setCheckValidEmail("Email addresses do not match");
        } else if (password !== passwordConfirm) {
          setCheckValidEmail("Passwords do not match");
        } else {
          // send email verification
          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "your-email@gmail.com",
              pass: "your-password",
            },
          });
          const mailOptions = {
            from: "your-email@gmail.com",
            to: email,
            subject: "Email Verification",
            text: "Please verify your email address to complete registration",
          };
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
              Alert.alert("An error occurred while sending the email.");
            } else {
              console.log("Email sent: " + info.response);
              Alert.alert("Account created successfully!");
              navigation.navigate("Home");
            }
          });
        }
      }
    }}
  >
    <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity></>
}
