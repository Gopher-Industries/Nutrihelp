import { View, Text } from "react-native";

export default function Groceries({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "green",
      }}
    >
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Groceries page comming soon
      </Text>
    </View>
  );
}
