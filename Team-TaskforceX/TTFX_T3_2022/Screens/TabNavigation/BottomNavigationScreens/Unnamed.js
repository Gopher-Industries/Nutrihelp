import { View, Text } from "react-native";

export default function Unnamed({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
      }}
    >
      <Text style={{ fontSize: 25, textAlign: "center" }}>
        Unnamed page comming soon
      </Text>
    </View>
  );
}
