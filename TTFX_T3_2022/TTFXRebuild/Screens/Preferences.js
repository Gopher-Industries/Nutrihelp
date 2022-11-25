import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
//import {useNavigation} from '@react-navigation/native';

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

//Lorem Ipsum Generator
export default function Preferences({ navigation }) {
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
        <View style={styles.textContainer}>
          <Text>
            Preference. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          {/* <TouchableOpacity
            style={styles.altButton}
            onPress={() => navigation.navigate("Tabs", "Testtab")}
          >
            <Text>Show homescreen with the bottom navigation tabs</Text>
          </TouchableOpacity> */}
          <Button
            title="Continue"
            onPress={() => navigation.navigate("DailyNutritionPlan")}
          />
          <Button
            title="Redo"
            onPress={() => navigation.navigate("DietryRequirements")}
          />
          <Button
            title="Exit"
            onPress={() => navigation.navigate("LandingPage")}
          />
        </View>
      </View>
    </View>
  );
}

// have a accept/decline button, acce

const styles = StyleSheet.create({
  container: {
    padding: 30,
    width: SCREENWIDTH,
  },
  textContainer: {
    justifyContent: "center",
    padding: 20,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function Preferences({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={{ marginLeft: 10, marginTop: 30 }}>
//         <Text style={{ fontWeight: "bold", fontSize: 30 }}>Preferences</Text>
//       </View>
//       <Button
//         title="Continue"
//         onPress={() => navigation.navigate("DailyNutritionPlan")}
//       />
//       <Button
//         title="Redo"
//         onPress={() => navigation.navigate("DietryRequirements")}
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
