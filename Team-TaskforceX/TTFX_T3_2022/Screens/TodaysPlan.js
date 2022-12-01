import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function TodaysPlan({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10, marginTop: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>Todays Plan</Text>
      </View>
      <Button
        title="Nutritional Report"
        onPress={() => navigation.navigate("NutritionalReport")}
      />
      <Button title="Home" onPress={() => navigation.navigate("LandingPage")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
