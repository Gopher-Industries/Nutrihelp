import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Meal from "./Meal";

export default function SubPage1({
  todaysBreakfastPlan,
  todaysLunchPlan,
  todaysDinnerPlan,
  todaysSnackPlan,
  updateTodaysBreakfastPlan,
  updateTodaysLunchPlan,
  updateTodaysDinnerPlan,
  updateTodaysSnackPlan,
}) {
  const [subPageData0, updateSubPageData0] = useState(todaysBreakfastPlan);
  const [subPageData1, updateSubPageData1] = useState(todaysLunchPlan);
  const [subPageData2, updateSubPageData2] = useState(todaysDinnerPlan);
  const [subPageData3, updateSubPageData3] = useState(todaysSnackPlan);

  // Used to trigger an update of data passed from
  // calling function on re-render.
  // Triggers can be added to the array
  useEffect(() => {
    updateTodaysBreakfastPlan(subPageData0);
    updateTodaysLunchPlan(subPageData1);
    updateTodaysDinnerPlan(subPageData2);
    updateTodaysSnackPlan(subPageData3);
  }, [subPageData0, subPageData1, subPageData2, subPageData3]);

  const UpdateSubPageData0 = (state) => {
    updateSubPageData0(state);
  };
  const UpdateSubPageData1 = (state) => {
    updateSubPageData1(state);
  };
  const UpdateSubPageData2 = (state) => {
    updateSubPageData2(state);
  };
  const UpdateSubPageData3 = (state) => {
    updateSubPageData3(state);
  };

  const TitleBar = (props) => {
    return (
      <View style={{ flex: 1, flexDirection: "row", height: 70 }}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: "OpenSans_600SemiBold", //"OpenSans_600SemiBold", //"OpenSans_400Regular",
              textAlign: "left",
            }}
          >
            {props.title}
          </Text>
          <View
            // indicator background
            style={{
              position: "absolute",
              height: 10,
              width: 95,
              top: "57%",
              bottom: "63.21%",
              borderRadius: 10,
              backgroundColor: "#eee",
            }}
          />
          <View
            style={{
              position: "absolute",
              height: 10,
              width: props.indicatorValue, //80,
              top: "57%",
              bottom: "63.21%",
              borderTopLeftRadius: 10,
              borderBottomLeftRadius: 10,
              backgroundColor: props.indicatorColour,
            }}
          />
          <Text
            style={{
              bottom: "2%",
              fontSize: 20,
              fontWeight: "bold",
              left: "52%",
              color: props.textColour,
            }}
          >
            {props.calories}
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              top: "6%",
              fontSize: 20,
              fontFamily: "OpenSans_600SemiBold",
              //"OpenSans_700Bold",//"OpenSans_500Medium", //"OpenSans_400Regular",
              //fontWeight: "400",
              textAlign: "right",
            }}
          >
            Recommended
          </Text>
          <Text
            style={{
              top: "8%",
              fontSize: 20,
              textAlign: "right",
              color: "#707070",
            }}
          >
            {props.recommended}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View sytle={styles.subContainer0}>
      <TitleBar
        title="Breakfast"
        indicatorValue={80}
        indicatorColour="#b0c2a7"
        textColour="#b0c2a7"
        calories="1836 KJ"
        recommended="1532 - 1930 KJ"
      />
      <Meal mealData={subPageData0} updateMealData={UpdateSubPageData0} />
      <TitleBar
        title="Lunch"
        indicatorValue={40}
        indicatorColour="#e8bf8f"
        textColour="#e8bf8f"
        calories="890 KJ"
        recommended="1352 - 1650 KJ"
      />
      <Meal mealData={subPageData1} updateMealData={UpdateSubPageData1} />
      <TitleBar
        title="Dinner"
        indicatorValue={90}
        indicatorColour="#e9aaaa"
        textColour="#e9aaaa"
        calories="2274 KJ"
        recommended="1253 - 1920 KJ"
      />
      <Meal mealData={subPageData2} updateMealData={UpdateSubPageData2} />
      <TitleBar
        title="Snacks"
        indicatorValue={35}
        indicatorColour="#e8bf8f"
        textColour="#e8bf8f"
        calories="250 KJ"
        recommended="432 - 800 KJ"
      />
      <Meal mealData={subPageData3} updateMealData={UpdateSubPageData3} />
    </View>
  );
}

const styles = StyleSheet.create({
  subContainer0: {
    // heading
    flex: 1,
    height: 100,
    width: "100%",
  },
});
