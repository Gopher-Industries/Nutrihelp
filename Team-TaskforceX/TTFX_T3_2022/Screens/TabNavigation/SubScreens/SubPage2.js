import { View, Text, StyleSheet } from "react-native";

export default function SubPage2() {
  return (
    <View style={styles.page2Display}>
      <Text style={styles.textDisplay}>Weekly Plan</Text>
      <Text style={styles.textDisplay}>Under Construction</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page2Display: {
    flex: 1,
    height: 800,
    backgroundColor: "#c1e9d5",
    alignItems: "center",
  },
  textDisplay: {
    fontSize: 25,
    textAlign: "center",
  },
});
