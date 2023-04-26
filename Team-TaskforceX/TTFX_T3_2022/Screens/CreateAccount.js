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

export default function CreateAccount({ navigation }) {
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfrim, setPasswordConfirm] = useState("");
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const route = useRoute();
  const isLarge = route.params?.isLarge;
  const switchColour = route.params?.switchColour;

  useEffect(() => {
    if (emailConfirm && email !== emailConfirm) {
      setEmailErrorMessage("Email addresses must match");
    } else {
      setEmailErrorMessage("");
    }
  }, [emailConfirm]);

  useEffect(() => {
    if (passwordConfrim && password !== passwordConfrim) {
      setPasswordErrorMessage("Passwords must match");
    } else {
      setPasswordErrorMessage("");
    }
  }, [passwordConfrim]);

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
  
  const handlePasswordConfirm = (val) => {
    if (val != password) {
      setCheckValidPassword("Passwords do not match");
    } else {
      setCheckValidPassword("");
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
        } } /><RNPTextInput //Confirm password

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
                handlePasswordConfirm(value);
            } } /></>
  
  {checkValidPassword ? (
    <Text style={styles.passwordValidationText}>{checkValidPassword}</Text>
  ) : null}
    <><><RNPTextInput //Confirm password


        style={styles.TextInputRNPTextInput}
        placeholder="Confirm Password*"
        label="Confirm Password*"
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
            fonts: { fontFamily: "OpenSans_400Regular", fontWeight: '600' },
            colors: { text: "black" },
        }}
        secureTextEntry={true}
        onChangeText={password => {
            setPasswordConfirm(password);
            handlePassConfirm(password);
        } } /><View>
            <Text style={styles.text}>* Mandatory information</Text>
        </View><TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Authentication", { switchColour, isLarge })}
        >
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity></><TouchableOpacity
            style={styles.button}
            onPress={() => {
                if (checkValidEmail ||
                    email === "" ||
                    emailConfirm === "" ||
                    password === "" ||
                    passwordConfirm === "") {
                    setCheckValidEmail("Please enter valid information in all fields");
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
                            to: userEmail,
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
                        navigation.navigate("Verification", {
                            email: email,
                            password: password,
                            switchColour: switchColour,
                            isLarge: isLarge,
                        });
                    }
                }
            } }
        >
            <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity></>
}
//Verification code to user's email
/*const [verificationCode, setVerificationCode] = useState("");
const [validVerificationCode, setValidVerificationCode] = useState(false);

const handleVerificationCode = (val) => {
  if (val.length === 6) {
    setValidVerificationCode(true);
  } else {
    setValidVerificationCode(false);
  }
};

const handleVerifyCode = async () => {
  try {
    await auth.applyActionCode(verificationCode);
    navigation.navigate("Authentication");
  } catch (error) {
    console.log(error);
  }
};

<><TouchableOpacity
  style={[
    styles.button,
    validEmail && validPassword && checkPasswordsMatch
      ? styles.enabled
      : styles.disabled,
  ]}
  onPress={() => {
    handleVerifyCode();
  } }
  disabled={!validVerificationCode}
>
  <Text style={styles.buttonText}>Verify Code</Text>
</TouchableOpacity><View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Verification Code*"
      placeholderTextColor="gray"
      keyboardType="numeric"
      maxLength={6}
      onChangeText={(value) => {
        setVerificationCode(value);
        handleVerificationCode(value);
      } } />
  </View></>

{validVerificationCode ? null : (
  <Text style={styles.emailValidationText}>
    Verification code must be a 6-digit number
  </Text>
)}*/