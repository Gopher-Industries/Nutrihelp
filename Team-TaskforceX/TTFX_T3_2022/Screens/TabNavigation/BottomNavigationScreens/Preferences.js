import { View, Text } from "react-native";

export default function Preferences({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
      }}
    >
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Preferences page comming soon
      </Text>
    </View>
  );
}
