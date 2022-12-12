import { StatusBar } from "expo-status-bar";
//import {NavigationContainer} from '@react-navigator/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
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

export default function DailyNutritionPlan({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        //onPress={() => navigation.goBack()}
      />
      <View>
        <Text style={styles.title}>Daily Nutrition Plan</Text>
      </View>
      <View>
        <Text>
          This is your recommended daily intake based on your preferences and
          health
        </Text>
      </View>

      <View style={styles.columnView}>
        <View>
          <Text style={styles.text}>Calories</Text>
          <Text style={styles.text}>Carbohydrates</Text>
          <Text style={styles.text}>Protein</Text>
          <Text style={styles.text}>Fat</Text>
          <Text style={styles.text}>Water</Text>
        </View>
        <View>
          <Text style={styles.title}>Health Conditions</Text>
          <Text>
            We will select foods in your meal plan that are rich in the
            following vitamins.
          </Text>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Vitamin B6</Text>
            <Text style={styles.item}>Vitamin D</Text>
          </View>
          <Text>
            We will select foods in your meal plan that keep you within your set
            limits.
          </Text>
          <View style={styles.itemContainer}>
            <Text style={styles.item}>Limit Sodium 2400mg</Text>
            <Text style={styles.item}>Limit Cholesterol 2800mg</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MealPlanning")}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
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
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    paddingBottom: 10,
    marginTop: 10,
    color: "black",
    fontWeight: "bold",
  },

  button: {
    backgroundColor: "#8d71ad",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    top: 10,
    marginBottom: 50,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  item: {
    // flexDirection: 'row',
    // margin-right,
    // alignItems: 'center',
    // alignSelf: 'center',
    // backgroundColor: 'green',
    borderColor: "black",
    borderWidth: 1,
    // maxWidth: (SCREENWIDTH/2)-40,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    margin: 5,
    flex: 0.5,
  },
  itemText: {
    color: "black",
    // fontFamily: 'Times',
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function DailyNutritionPlan({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={{ marginLeft: 10, marginTop: 30 }}>
//         <Text style={{ fontWeight: "bold", fontSize: 30 }}>
//           Daily Nutrition Plan
//         </Text>
//       </View>
//       <Button
//         title="Continue"
//         onPress={() => navigation.navigate("MealPlanning")}
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
