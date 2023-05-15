import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import SubPage1 from "./SubScreens/SubPage1";
import SubPage2 from "./SubScreens/SubPage2";
import VerticalIndicators from "./SubScreens/VerticalIndicators";

//=========================================================================================
// 12/12/2020
//        Todo: when adding items 'two children with same key' error, add condition
//=========================================================================================

export default function ToggleScreen({ navigation }) {
  const [page, changePage] = useState(true);
  const [todaysColour, setTodaysColour] = useState("#e8def8");
  const [weekColour, setWeekColour] = useState("#fffbfe");
  const [todaysBreakfastPlan, updateTodaysBreakfastPlan] = useState([
    {
      key: "reserved 0",
      value: "1153 KJ",
      //image: require("../assets/images/square-logo-blue-text-black.png"),
      image: require("./Local_Store/strawberrysmoothie1of12-1.png"),
      description: "Strawberry & Bannana Smoothie",
    },
    {
      key: "reserved 1",
      value: "",
      image: require("./Local_Store/addLargeBorder.png"),
      description: "",
    },
  ]);
  const [todaysLunchPlan, updateTodaysLunchPlan] = useState([
    {
      key: "reserved 0",
      value: "738 KJ",
      image: require("./Local_Store/simplesourdoughbreadrecipehomesteadfeature4001151677-1.png"),
      description: "Sour Dough Bread",
    },
    {
      key: "reserved 1",
      value: "",
      image: require("./Local_Store/addLargeBorder.png"),
      description: "",
    },
  ]);
  const [todaysDinnerPlan, updateTodaysDinnerPlan] = useState([
    {
      key: "reserved 0",
      value: "1536 KJ",
      image: require("./Local_Store/roastedpumpkinsoup83913535864-1.png"),
      description: "Pumkin Soup",
    },
    {
      key: "reserved 1",
      value: "",
      image: require("./Local_Store/addLargeBorder.png"),
      description: "",
    },
  ]);
  const [todaysSnackPlan, updateTodaysSnackPlan] = useState([
    {
      key: "reserved 0",
      value: "250 KJ",
      image: require("./Local_Store/earlgreyleaftea2000874-2368188992-1.png"),
      description: "Earl Grey Tea",
    },
    {
      key: "reserved 1",
      value: "",
      image: require("./Local_Store/addLargeBorder.png"),
      description: "",
    },
  ]);

  const UpdateTodaysBreakfastPlan = (state) => {
    updateTodaysBreakfastPlan(state);
  };
  const UpdateTodaysLunchPlan = (state) => {
    updateTodaysLunchPlan(state);
  };
  const UpdateTodaysDinnerPlan = (state) => {
    updateTodaysDinnerPlan(state);
  };
  const UpdateTodaysSnackPlan = (state) => {
    updateTodaysSnackPlan(state);
  };

  const TodayButton = () => {
    return (
      <Text
        style={{
          //color: "white",
          height: 44,
          width: 164,
          fontSize: 18,
          fontFamily: "OpenSans_400Regular",
          textAlign: "center",
          textAlignVertical: "center",
          backgroundColor: todaysColour,
          borderColor: "#79747e",
          borderWidth: 0.8,
          borderRightWidth: 0,
          borderTopLeftRadius: 22,
          borderBottomLeftRadius: 22,
        }}
        onPress={() => {
          changePage(true);
          setTodaysColour("#e8def8");
          setWeekColour("#fffbfe");
        }}
      >
        Today
      </Text>
    );
  };

  const WeekButton = () => {
    return (
      <Text
        style={{
          //color: "white",
          height: 44,
          width: 164,
          fontSize: 18,
          fontFamily: "OpenSans_400Regular",
          textAlign: "center",
          textAlignVertical: "center",
          backgroundColor: weekColour,
          borderColor: "#79747e",
          borderWidth: 0.8,
          borderTopRightRadius: 22,
          borderBottomRightRadius: 22,
        }}
        onPress={() => {
          changePage(false);
          setTodaysColour("#fffbfe");
          setWeekColour("#e8def8");
        }}
      >
        Week
      </Text>
    );
  };

  const NotificationBar = () => {
    return (
      <View style={styles.notificationContainer}>
        <MaterialIcons
          name="notifications-none"
          size={25}
          style={styles.notificaitonIcon}
        />
        <MaterialCommunityIcons
          name="crown-outline"
          size={25}
          style={styles.notificaitonIcon}
        />
      </View>
    );
  };
  const TitleBar = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Today's Plan</Text>
      </View>
    );
  };
  const NutritionalReportChip = () => {
    return (
      <View style={styles.nutritionReportContainer}>
        <Text
          style={styles.nutritionReportButton}
          onPress={() => {
            navigation.navigate("View Nutrition Report");
          }}
        >
          View Nutrition Report
        </Text>
      </View>
    );
  };
  const SelectionChip = () => {
    return (
      <View style={styles.selectionChip}>
        <TodayButton />
        <WeekButton />
      </View>
    );
  };
  const PageBreak = () => {
    return (
      <View
        style={{
          flex: 0.2,
          width: "100%",
          //backgroundColor: "black",
          borderBottomWidth: 1, //StyleSheet.hairlineWidth,
          borderBottomColor: "#79747e",
        }}
      />
    );
  };
  const MealPlanTitle = () => {
    return (
      <View
        style={{
          flex: 0.7,
          width: "100%",
          //fontFamily: "OpenSans_400Regular",
          justifyContent: "center",
          borderTopColor: "grey",
          borderTopWidth: StyleSheet.hairlineWidth,
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontSize: 20, fontFamily: "OpenSans_400Regular" }}>
          Meal Plan
        </Text>
      </View>
    );
  };
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.subContainer1}>
        <NotificationBar />
        <TitleBar />
        <NutritionalReportChip />
        <VerticalIndicators />
        <PageBreak />
        <MealPlanTitle />
        <SelectionChip />
      </View>
      {page ? (
        <SubPage1
          todaysBreakfastPlan={todaysBreakfastPlan}
          todaysLunchPlan={todaysLunchPlan}
          todaysDinnerPlan={todaysDinnerPlan}
          todaysSnackPlan={todaysSnackPlan}
          updateTodaysBreakfastPlan={UpdateTodaysBreakfastPlan}
          updateTodaysLunchPlan={UpdateTodaysLunchPlan}
          updateTodaysDinnerPlan={UpdateTodaysDinnerPlan}
          updateTodaysSnackPlan={UpdateTodaysSnackPlan}
        />
      ) : (
        <SubPage2 />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexGrow: 1,
    //borderColor: "green",
    //borderWidth: 5,
    padding: 12,
    backgroundColor: "#fffbfe",
    //backgroundColor: "green",
  },
  subContainer1: {
    flex: 1,
    height: 430,
    alignItems: "center",
    //justifyContent: "center",
    //backgroundColor: "#fffbfe", //"pink", <<<<--------------------- this
  },
  notificationContainer: {
    flex: 1.4,
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    //backgroundColor: "blue",
  },
  notificaitonIcon: {
    left: 320,
  },
  headerContainer: {
    flex: 1.2,
    width: "100%",
    //backgroundColor: "grey",
  },
  headerText: {
    fontSize: 28,
    textAlign: "left",
    fontFamily: "OpenSans_500Medium", //"OpenSans_400Regular",
  },
  nutritionReportContainer: {
    flex: 1.4,
    width: "100%",
    justifyContent: "center",
    //backgroundColor: "blue",
  },
  nutritionReportButton: {
    color: "#fffbfe",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 19, //20,
    fontFamily: "OpenSans_500Medium",
    width: 328,
    height: 48,
    borderRadius: 100, //30,
    left: 21,
    backgroundColor: "#8273a9",
  },
  nutritionReportButtonText: {
    color: "#fffbfe",
    fontSize: 20,
    fontFamily: "OpenSans_400Regular",
    //fontWeight: "700",
  },
  selectionChip: {
    flex: 1.3,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    //backgroundColor: "pink",
  },
  todayChip: {
    left: 20,
    height: 48,
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    backgroundColor: "#e8def8",
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    width: 164,
    overflow: "hidden",
    //flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  weekChip: {
    left: 19,
    height: 48,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    width: 165,
    overflow: "hidden",
    //flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  chipText: {
    fontSize: 18,
  },
});
