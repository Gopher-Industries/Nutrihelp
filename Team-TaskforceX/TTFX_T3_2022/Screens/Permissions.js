import * as React from "react";
import { useState } from "react";
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  Pressable,
  Image,
  Switch,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const Permissions = () => {
  const [cameraSwitchValue, setCameraSwitchValue] = useState(false);
  const [contactsSwitchValue, setContactsSwitchValue] = useState(false);
  const [bluetoothSwitchValue, setBluetoothSwitchValue] = useState(false);
  const navigation = useNavigation();
  const [locationSwitchValue, setLocationSwitchValue] = useState(false);
  const [healthSwitchValue, setHealthSwitchValue] = useState(false);

  return (
    <View style={styles.permissions}>
      <Text style={styles.weNeedAccessToTheFollowin}>
        We need access to the following to provide the best experience for you
      </Text>
      <Text style={styles.camera}>Camera</Text>
      <Text style={styles.location}>Location</Text>
      <Text style={styles.contacts}>Contacts</Text>
      <Text style={styles.bluetooth}>Bluetooth</Text>
      <Text style={styles.health}>Health</Text>
     
      <View >
      <Icon style={styles.backButton}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
        <Text style={styles.headline}>Permissions</Text>
      </View>
      <Switch
        style={styles.cameraSwitch}
        value={cameraSwitchValue}
        onValueChange={setCameraSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.contactsSwitch}
        value={contactsSwitchValue}
        onValueChange={setContactsSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.bluetoothSwitch}
        value={bluetoothSwitchValue}
        onValueChange={setBluetoothSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.locationSwitch}
        value={locationSwitchValue}
        onValueChange={setLocationSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.healthSwitch}
        value={healthSwitchValue}
        onValueChange={setHealthSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <TouchableOpacity
        style={styles.continue}
        onPress={() => navigation.navigate("Access")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  weNeedAccessToTheFollowin: { //We need access text
    position: "absolute",
    top: 180,
    left: 16,
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 24,
    color: "#000",
    textAlign: "left",
    width: 329,
    height: 49,
  },
  camera: { //camera text
    position: "absolute",
    top: 260,
    left: 16,
    fontSize: 16,
    lineHeight: 20,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 84,
    height: 40,
  },
  location: { //location text
    position: "absolute",
    top: 310,
    left: 16,
    fontSize: 16,
    lineHeight: 20,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 87,
    height: 30,
  },
  contacts: { //contacts text
    position: "absolute",
    top: 360,
    left: 16,
    fontSize: 16,
    lineHeight: 20,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 84,
    height: 37,
  },
  bluetooth: { //bluetooth text
    position: "absolute",
    top: 410,
    left: 16,
    fontSize: 16,
    lineHeight: 20,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 87,
    height: 31,
  },
  health: { //health text
    position: "absolute",
    top: 460,
    left: 16,
    fontSize: 16,
    lineHeight: 20,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 66,
    height: 31,
  },
  icon: {
    width: "100%",
    height: "100%",
  },
  backButton: { //back button
    position: "absolute",
    left: 16,
    top: 70,
    width: 24,
    height: 24,
  },
  headline: { //permissions headline
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
  
  cameraSwitch: { //camera switch
    position: "absolute",
    height: "5%",
    width: "14.44%",
    top: "32%",
    right: "4.44%",
    bottom: "58.75%",
    left: "81.11%",
  },
  locationSwitch: { //location switch
    position: "absolute",
    height: "5%",
    width: "14.44%",
    top: "38.5%",
    right: "4.44%",
    bottom: "50%",
    left: "81.11%",
  },
  contactsSwitch: { //contacts switch
    position: "absolute",
    height: "5%",
    width: "14.44%",
    top: "45.3%",
    right: "4.44%",
    bottom: "41.25%",
    left: "81.11%",
  },
  bluetoothSwitch: { //bluetooth switch
    position: "absolute",
    height: "5%",
    width: "14.44%",
    top: "51.8%",
    right: "4.44%",
    bottom: "32.5%",
    left: "81.11%",
  },
  healthSwitch: { //health switch
    position: "absolute",
    height: "5%",
    width: "14.44%",
    top: "58.2%",
    right: "4.44%",
    bottom: "23.75%",
    left: "81.11%",
  },
  continueText: { //continue button text
    position: "relative",
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  continue: { //continue button
    position: "absolute",
    top: 685,
    left: 26,
    borderRadius: 100,
    backgroundColor: "#8273a9",
    width: 328,
    height: 40,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  permissions: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#fffbfe",
    flex: 1,
    width: "100%",
    height: 640,
    overflow: "hidden",
  },
});

export default Permissions;
