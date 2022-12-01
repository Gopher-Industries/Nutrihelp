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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          option={{ title: "welcome" }}
        />
        <Stack.Screen
          name="GettingStartedInfo1"
          component={GettingStartedInfo1}
          option={{ title: "Getting Started" }}
        />
        <Stack.Screen
          name="GettingStartedInfo2"
          component={GettingStartedInfo2}
          option={{ title: "Getting Started" }}
        />
        <Stack.Screen
          name="GettingStartedInfo3"
          component={GettingStartedInfo3}
          option={{ title: "Getting Started" }}
        />
        <Stack.Screen
          name="Accessibility"
          component={Accessibility}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccount}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="Authentication"
          component={Authentication}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="DietryRequirements"
          component={DietryRequirements}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="Allergies"
          component={Allergies}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="Dislikes"
          component={Dislikes}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="HealthConditions"
          component={HealthConditions}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="Preferences"
          component={Preferences}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="DailyNutritionPlan"
          component={DailyNutritionPlan}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="MealPlanning"
          component={MealPlanning}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="Permissions"
          component={Permissions}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="Access"
          component={Access}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="TodaysPlan"
          component={TodaysPlan}
          option={{ title: "Please provide" }}
        />
        <Stack.Screen
          name="NutritionalReport"
          component={NutritionalReport}
          option={{ title: "Your summary" }}
        />
        <Stack.Screen
          name="LogIn"
          component={LogIn}
          option={{ title: "Please login" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
