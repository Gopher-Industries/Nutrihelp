import { View, Text } from "react-native";

export default function ViewNutritionReport({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
      }}
    >
      <Text style={{ fontSize: 35 }}>
        Nutrition Report {"\n"}
        Comming Soon
      </Text>
      <Text
        style={{
          height: 50,
          width: 250,
          fontSize: 35,
          textAlign: "center",
          backgroundColor: "grey",
          borderRadius: 25,
        }}
        onPress={() => navigation.popToTop()}
      >
        Back
      </Text>
      <Text
        style={{
          height: 50,
          width: 250,
          fontSize: 35,
          textAlign: "center",
          backgroundColor: "#c4cdd4",
          borderRadius: 25,
        }}
        onPress={() => navigation.navigate("LandingPage")}
      >
        Sign out
      </Text>
    </View>
  );
}
