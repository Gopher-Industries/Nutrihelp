import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';

//StackScreens
//import SplashScreen from './src/screens/SplashScreen.js';
import ConfirmPrefScreen from './src/screens/ConfirmPrefScreen.js';
import LoginScreen from './src/screens/LoginScreen.js';
import TermScreen from './src/screens/TermScreen.js';
import CreateAccountScreen from './src/screens/CreateAccountScreen.js';
import CreateAccountScreen2 from './src/screens/CreateAccountScreen2.js';
import CreateProfileScreen from './src/screens/CreateProfileScreen.js';
import DietRequirementScreen from './src/screens/DietRequirementScreen.js';
import AllergyScreen from './src/screens/AllergyScreen.js';
import DislikesScreen from './src/screens/DislikesScreen.js';
import HealthConditionScreen from './src/screens/HealthConditionScreen.js';
import DailyNutritionPlanScreen from './src/screens/DailyNutritionPlanScreen.js';
import MealPlanScreen from './src/screens/MealPlanScreen.js';

//TabScreens
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen.js';
import GroceriesScreen from './src/screens/GroceriesScreen.js';
import UnnamedScreen from './src/screens/UnnamedScreen.js';
import PreferenceScreen from './src/screens/PreferenceScreen.js';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      // screenOption={{
      //   tabBarActiveTintColor: 'pink',
      // }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Groceries"
        component={GroceriesScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Unnamed"
        component={UnnamedScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="cutlery" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Preference"
        component={PreferenceScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user-circle-o" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

//change headerShown to true for sanity check
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TermScreen"
          component={TermScreen}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="CreateAccountScreen"
          component={CreateAccountScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccountScreen2"
          component={CreateAccountScreen2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateProfileScreen"
          component={CreateProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DietRequirementScreen"
          component={DietRequirementScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AllergyScreen"
          component={AllergyScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DislikesScreen"
          component={DislikesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HealthConditionScreen"
          component={HealthConditionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ConfirmPrefScreen"
          component={ConfirmPrefScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DailyNutritionPlanScreen"
          component={DailyNutritionPlanScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MealPlanScreen"
          component={MealPlanScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;