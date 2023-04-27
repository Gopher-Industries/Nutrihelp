import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  TextInput,
  View,
  StatusBar,
  Pressable,
  Image,
  Switch,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";


const windowWidth = Dimensions.get("window").width;


const Access = () => {
  const [familyCarerSwitchValue, setFamilyCarerSwitchValue] = useState(false);
  const [weeklyReportsSwitchValue, setWeeklyReportsSwitchValue] = useState(false);
  const [healthReportSwitchValue, setHealthReportSwitchValue] = useState(false);
  const [groceryListSwitchValue, setGroceryListSwitchValue] = useState(false);
  const [gpSwitchValue, setGpSwitchValue] = useState(false);
  const navigation = useNavigation();

  return (
    <ScrollView>
    <View style={styles.access}>
      <Text style={styles.wouldYouLikeToGiveYourFa}>
          Would you like to give your Family / Carer or GP access to your
          nutritional and health information?
      </Text>
      <TextInput
        style={styles.FamilySearchBox}
        placeholder="          Search contacts"
        keyboardType="default"
        placeholderTextColor="#49454f"
      />
      <Text style={styles.familyCarer}>Family / Carer</Text>
      <Text style={styles.weeklyReports}>Weekly Reports</Text>
      <Text style={styles.groceryList}>Grocery List</Text>
      <Text style={styles.healthReport}>Health Report</Text>
      <TextInput
        style={styles.gpSearchBox}
        placeholder="          Search contacts"
        keyboardType="default"
        placeholderTextColor="#49454f"
      />
      <Text style={styles.gP}>GP</Text>
      <View style={styles.lineView} />
      <StatusBar barStyle="default" translucent={true} />
      <View>
        <Text style={styles.headline}>Access</Text>
      </View>
      <Switch
        style={styles.familyCarerSwitch}
        value={familyCarerSwitchValue}
        onValueChange={setFamilyCarerSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.weeklyReportsSwitch}
        value={weeklyReportsSwitchValue}
        onValueChange={setWeeklyReportsSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.healthReportSwitch}
        value={healthReportSwitchValue}
        onValueChange={setHealthReportSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.groceryListSwitch}
        value={groceryListSwitchValue}
        onValueChange={setGroceryListSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.gpSwitch}
        value={gpSwitchValue}
        onValueChange={setGpSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("TodaysPlan")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <Icon style={styles.backButton}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wouldYouLikeToGiveYourFa: {
    position: "absolute",
    top: 168,
    left: 16,
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
    textAlign: "left",
    width: "90%",
    height: 80,
  },
  backButton: { //back button
    position: "absolute",
    left: 16,
    top: 70,
    width: 24,
    height: 24,
  },
  FamilySearchBox: { //Family / Carer search box
    position: "absolute",
    top: 320,
    left: 16,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    width: "90%",
    height: 60,
  },
  familyCarer: {
    position: "absolute",
    top: 264,
    left: 16,
    fontSize: 19,
    lineHeight: 48,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 157,
    height: 40,
  },
  familyCarerSwitch: {
    position: "absolute",
    top: 264,
    left: "80%",
  },
  weeklyReports: {
    position: "absolute",
    top: 419,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 116,
    height: 40,
  },
  weeklyReportsSwitch: {
    position: "absolute",
    top: 419,
    left: "80%",
  },
  groceryList: {
    position: "absolute",
    top: 475,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 105,
    height: 40,
  },
  groceryListSwitch: {
    position: "absolute",
    top: 475,
    left: "80%",
  },
  healthReport: {
    position: "absolute",
    top: 530,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 122,
    height: 40,
  },
  healthReportSwitch: {
    position: "absolute",
    top: 530,
    left: "80%",
  },
  gpSearchBox: { //GP search box
    position: "absolute",
    top: 672,
    left: 16,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    width: "90%",
    height: 60,
  },
  gP: { //gp text
    position: "absolute",
    top: 619,
    left: 15,
    fontSize: 19,
    lineHeight: 48,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 51,
    height: 40,
  },
  gpSwitch: {
    position: "absolute",
    top: 619,
    left: "80%",
  },
  lineView: { //line seperator
    position: "absolute",
    top: 588,
    left: 16,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderTopWidth: 1,
    width: "90%",
    height: 1,
  },
  headline: { //access text
    position: "absolute",
    top: 120,
    left: 16,
    fontSize: 24,
    lineHeight: 32,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 328,
  },
    continueText: {
    position: "relative",
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  continueButton: {
    position: "absolute",
    bottom: 32,
    left: 16,
    borderRadius: 100,
    backgroundColor: "#8273a9",
    width: "90%",
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 16,
    paddingRight: 16,
  },
  access: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#fffbfe",
    flex: 1,
    width: "100%",
    height: 864,
    overflow: "hidden",
  },
});

export default Access;
