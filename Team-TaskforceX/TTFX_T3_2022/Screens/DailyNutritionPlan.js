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
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; //Wrong arrow, need to change
//import {useNavigation} from '@react-navigation/native';

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

export default function DailyNutritionPlan({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView alwaysBounceVertical = {false}>
        <Icon
          style={styles.backArrow}
          name="arrow-left"
          size={20}
          color="black"
          type="entypo"
          onPress={() => navigation.goBack()}
        />
        <View>
          <Text style={styles.title}>Daily Nutrition Plan</Text>
        </View>
        <View>
          <Text style={styles.paragraphText}>
            This is your daily nutrition plan based off the information you provided during onboarding 
          </Text>
        </View>
        <View style={styles.columnView}>
        <View> 
          <Text style={styles.subHeading}>Calories</Text>
            <Text style={styles.plan}>7536 kj</Text>
          <View //linebreak
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 16,
            }}
          />
          <Text style={styles.subHeading}>Carbohydrates</Text>
            <Text style={styles.plan}>at least 45g</Text>
          <View //linebreak
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 16,
            }}
          />
          <Text style={styles.subHeading}>Protein</Text>
            <Text style={styles.plan}>at least 70g</Text>
          <View //linebreak
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 16,
            }}
          />
          <Text style={styles.subHeading}>Fat</Text>
            <Text style={styles.plan}>at least 60g</Text>
          <View //linebreak
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 16,
            }}
          />
          <Text style={styles.subHeading}>Water</Text>
            <Text style={styles.plan}>at least 3 cups</Text>
          <View //linebreak
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: StyleSheet.hairlineWidth,
              marginTop: 16,
            }}
          />
          </View>
          <View>
            <Text style={styles.title}>Health Conditions</Text>
              <Text style={styles.paragraphText}>
                We will select foods in your meal plan that are rich in the
                following vitamins.
              </Text>
              <Text style={styles.paragraphText}>
                We will select foods in your meal plan that keep you within your set
                limits.
              </Text>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffbfe",
    padding: 16,
  },

  //Back Arrow
  backArrow: {
    marginTop: 52,
  },

  //Main Title
  title: { 
    fontSize: 24,
    lineHeight: 32,
    fontFamily: "OpenSans_400Regular",
    color: "black",
    marginTop: 32,
    marginBottom: 16,
  },

  //Secondary headings
  subHeading: { 
    fontSize: 16,
    marginTop: 16,
    color: "black",
    fontFamily: "OpenSans_400Regular",
    fontWeight: "600",
  },

  //Plan text
  plan: {
    textAlign: 'right',
    marginTop: -25,
    fontSize: 19,
    color: "#6750a4",
    fontFamily: "OpenSans_600SemiBold",
    fontWeight: "600",

  },

  //Paragraph text
  paragraphText: {
    fontSize: 16,
    letterSpacing: -0.2,
    lineHeight: 24,
    fontFamily: 'OpenSans_400Regular',
    color: '#000',
    textAlign: 'left',
    marginTop: 16,
    marginBottom: 16,

  },

  //Continue button
  button: {
    backgroundColor: "#8273a9",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    marginTop: 32,
    borderRadius: 100,
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

  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});