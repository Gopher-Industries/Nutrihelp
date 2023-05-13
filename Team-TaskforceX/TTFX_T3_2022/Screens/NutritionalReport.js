import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, 
  Text, View,
   TouchableOpacity,Dimensions } from "react-native";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function NutritionalReport({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10, marginTop: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>
          Nutritional Report
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MealPlanning")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: "bold",
    color: "black",
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

  item: {
    marginTop: 10,
    // backgroundColor: 'green',
    borderColor: "black",
    borderWidth: 1,
    maxWidth: SCREENWIDTH / 2 - 40,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "space-around",
    margin: 5,
    flex: 0.5,
    //backgroundColor: 'pink',
  },
  itemText: {
    color: "black",
    // fontFamily: 'Times',
  },

  listStyle: {
    paddingTop: 10,
  },
});