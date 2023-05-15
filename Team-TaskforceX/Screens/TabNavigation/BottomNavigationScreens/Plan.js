import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//import { createStackNavigator } from "@react-navigation/stack";
import ToggleScreen from "../ToggleScreens";
import ViewNutritionReport from "../SubScreens/ViewNutritionReport";

//const InnerStack = createStackNavigator();
const InnerStack = createNativeStackNavigator();

export default function Plan() {
  return (
    <InnerStack.Navigator>
      <InnerStack.Screen
        name="Toggle Screen"
        component={ToggleScreen}
        options={{ headerShown: false }}
      />
      <InnerStack.Screen
        name="View Nutrition Report"
        component={ViewNutritionReport}
        options={{ headerShown: false }}
      />
    </InnerStack.Navigator>
  );
}
