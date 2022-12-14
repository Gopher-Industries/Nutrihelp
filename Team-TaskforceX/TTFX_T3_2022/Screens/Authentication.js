import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { TextInput as RNPTextInput } from "react-native-paper";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function Authentication({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon //Back arrow
        style={styles.backArrow}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
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
        mode="outlined"
        activeOutlineColor="#8273a9"
        theme={{
          fonts: { fontFamily: "OpenSans_400Regular", fontWeight: '600',  },
          colors: {text: "black"},
        }}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile")}
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
    fontSize: 24,
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
    fontSize: 16,
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
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '600',
    fontFamily: 'OpenSans_400Regular',
  },

  //Verify code button
  button: {
    borderRadius: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8d71ad",
    marginTop: 273,
  },

  //Verify code button text
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

