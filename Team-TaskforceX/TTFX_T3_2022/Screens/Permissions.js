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
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 84,
    height: 50,
  },
  cameraSwitch: { //camera switch
    position: "absolute",
    top: 260,
    left: 300,
  },
  location: { //location text
    position: "absolute",
    top: 310,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 87,
    height: 50,
  },
  locationSwitch: { //location switch
    position: "absolute",
    top: 310,
    left: 300,
  },
  contacts: { //contacts text
    position: "absolute",
    top: 360,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 84,
    height: 50,
  },
  contactsSwitch: { //contacts switch
    position: "absolute",
    top: 360,
    left: 300,
  },
  bluetooth: { //bluetooth text
    position: "absolute",
    top: 410,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 87,
    height: 50,
  },
  bluetoothSwitch: { //bluetooth switch
    position: "absolute",
    top: 410,
    left: 300,
  },
  health: { //health text
    position: "absolute",
    top: 460,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 66,
    height: 50,
  },
  healthSwitch: { //health switch
    position: "absolute",
    top: 460,
    left: 300,
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
    borderRadius: 0,
    backgroundColor: "#fffbfe",
    flex: 10,
    width: "100%",
    overflow: "hidden",
  },
});

export default Permissions;
