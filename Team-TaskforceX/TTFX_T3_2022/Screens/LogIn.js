import { StatusBar } from "expo-status-bar";
//import { Button, StyleSheet, Text, View } from "react-native";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function CreateAccount({ navigation }) {
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
        <Text style={styles.text}>Get started by creating an account</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("TodaysPlan")}
      >
        <Text style={styles.buttonText}>Continue with Email</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
        <View>
          <Text style={{ width: 50, textAlign: "center" }}>Or</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.altButton}
          onPress={() => alert("Setup TBC")}
        >
          <Text style={styles.altButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.altButton}
          onPress={() => alert("Setup TBC")}
        >
          <Text style={styles.altButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
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

  text: {
    marginTop: 40,
    marginBottom: SCREENHEIGHT / 4,
    fontSize: 18,
    color: "black",
  },

  button: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#8d71ad",
    margin: 10,
  },

  altButton: {
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "gray",
    margin: 10,
  },

  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 18,
  },

  altButtonText: {
    fontWeight: "bold",
    color: "#8d71ad",
    fontSize: 18,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function LogIn({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={{ marginLeft: 10, marginTop: 30 }}>
//         <Text style={{ fontWeight: "bold", fontSize: 30 }}>Log In</Text>
//       </View>
//       <Button
//         title="On success"
//         onPress={() => navigation.navigate("TodaysPlan")}
//       />
//       <Button title="Exit" onPress={() => navigation.navigate("LandingPage")} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
