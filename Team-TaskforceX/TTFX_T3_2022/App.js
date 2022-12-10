import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LandingPage from "./Screens/LandingPage";
import GettingStartedInfo1 from "./Screens/GettingStartedInfo1";
import GettingStartedInfo2 from "./Screens/GettingStartedInfo2";
import GettingStartedInfo3 from "./Screens/GettingStartedInfo3";
import Accessibility from "./Screens/Accessibility";
import CreateAccount from "./Screens/CreateAccount";
import Authentication from "./Screens/Authentication";
import Profile from "./Screens/Profile";
import DietryRequirements from "./Screens/DietryRequirements";
import Allergies from "./Screens/Allergies";
import Dislikes from "./Screens/Dislikes";
import HealthConditions from "./Screens/HealthConditions";
import Preferences from "./Screens/Preferences";
import DailyNutritionPlan from "./Screens/DailyNutritionPlan";
import MealPlanning from "./Screens/MealPlanning";
import Permissions from "./Screens/Permissions";
import Access from "./Screens/Access";
import Notifications from "./Screens/Notifications";
import TodaysPlan from "./Screens/TodaysPlan";
import NutritionalReport from "./Screens/NutritionalReport";
import LogIn from "./Screens/LogIn";
import {
  useFonts,
  OpenSans_300Light,
  OpenSans_400Regular,
  OpenSans_500Medium,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
  OpenSans_800ExtraBold,
  OpenSans_300Light_Italic,
  OpenSans_400Regular_Italic,
  OpenSans_500Medium_Italic,
  OpenSans_600SemiBold_Italic,
  OpenSans_700Bold_Italic,
  OpenSans_800ExtraBold_Italic,
  } from "@expo-google-fonts/open-sans";
  

const Stack = createNativeStackNavigator();

export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_300Light,
    OpenSans_400Regular,
    OpenSans_500Medium,
    OpenSans_600SemiBold,
    OpenSans_700Bold,
    OpenSans_800ExtraBold,
    OpenSans_300Light_Italic,
    OpenSans_400Regular_Italic,
    OpenSans_500Medium_Italic,
    OpenSans_600SemiBold_Italic,
    OpenSans_700Bold_Italic,
    OpenSans_800ExtraBold_Italic,
    });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GettingStartedInfo1"
          component={GettingStartedInfo1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GettingStartedInfo2"
          component={GettingStartedInfo2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GettingStartedInfo3"
          component={GettingStartedInfo3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Accessibility"
          component={Accessibility}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DietryRequirements"
          component={DietryRequirements}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Allergies"
          component={Allergies}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dislikes"
          component={Dislikes}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HealthConditions"
          component={HealthConditions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preferences"
          component={Preferences}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DailyNutritionPlan"
          component={DailyNutritionPlan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MealPlanning"
          component={MealPlanning}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Permissions"
          component={Permissions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Access"
          component={Access}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TodaysPlan"
          component={TodaysPlan}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NutritionalReport"
          component={NutritionalReport}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
