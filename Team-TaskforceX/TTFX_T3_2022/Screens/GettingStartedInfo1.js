import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

//Lorem Ipsum Generator
export default function GettingStartedInfo1({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.popToTop()}
      />
      <View>
        <View style={styles.textContainer}>
          <Text>
            Unnamed. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          {/* <TouchableOpacity
            style={styles.altButton}
            onPress={() => navigation.navigate("GettingStartedInfo2")}
          >
            <Text>Show homescreen with the bottom navigation tabs</Text>
          </TouchableOpacity> */}
          <Button
            title="Continue"
            onPress={() => navigation.navigate("GettingStartedInfo2")}
          />
          {/* <Button
            title="Exit"
            onPress={() => navigation.navigate("LandingPage")}
          /> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    width: SCREENWIDTH,
  },
  textContainer: {
    justifyContent: "center",
    padding: 20,
  },
});
