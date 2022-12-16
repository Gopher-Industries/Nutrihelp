import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Plan from "./TabNavigation/BottomNavigationScreens/Plan";
import Groceries from "./TabNavigation/BottomNavigationScreens/Groceries";
import Unnamed from "./TabNavigation/BottomNavigationScreens/Unnamed";
import Preferences from "./TabNavigation/BottomNavigationScreens/Preferences";
import { View, StyleSheet } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function TodaysPlan() {
  return (
    <Tab.Navigator
      initialRouteName="Plan"
      screenOptions={{
        headerShown: false,
      }}
      barStyle={{
        height: 65,
        backgroundColor: "#f0ebf7",
      }}
      shifting={false}
    >
      <Tab.Screen
        name="Plan"
        component={Plan}
        options={{
          tabBarLabel: "Plan",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused
                  ? styles.iconBackgroundOnPress
                  : styles.iconBackgroundNoPress
              }
            >
              <MaterialCommunityIcons
                name="calendar-month"
                color={color}
                size={26}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Groceries"
        component={Groceries}
        options={{
          tabBarLabel: "Groceries",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused
                  ? styles.iconBackgroundOnPress
                  : styles.iconBackgroundNoPress
              }
            >
              <MaterialCommunityIcons
                name="cart-outline"
                color={color}
                size={26}
              />
            </View>
          ),
          //tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="Unnamed"
        component={Unnamed}
        options={{
          tabBarLabel: "Unnamed",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused
                  ? styles.iconBackgroundOnPress
                  : styles.iconBackgroundNoPress
              }
            >
              <MaterialIcons name="restaurant" color={color} size={26} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Preferences"
        component={Preferences}
        options={{
          tabBarLabel: "Preferences",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={
                focused
                  ? styles.iconBackgroundOnPress
                  : styles.iconBackgroundNoPress
              }
            >
              <MaterialCommunityIcons
                name="account-circle-outline"
                color={color}
                size={26}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconBackgroundOnPress: {
    height: 26,
    width: 55,
    backgroundColor: "#e2d5f7", //"#e8def8",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  iconBackgroundNoPress: {
    height: 26,
    width: 55,
    backgroundColor: "#f0ebf7", //"#e8def8",
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
  },
});
