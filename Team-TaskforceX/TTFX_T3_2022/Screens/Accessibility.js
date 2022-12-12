import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Accessibility({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 10, marginTop: 30 }}>
        <Text style={{ fontWeight: "bold", fontSize: 30 }}>Accessibility</Text>
      </View>
      <Button
        title="Continue"
        onPress={() => navigation.navigate("CreateAccount")}
      />
      <Button title="Back" onPress={() => navigation.goBack()} />
      <StatusBar style="auto" />
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
