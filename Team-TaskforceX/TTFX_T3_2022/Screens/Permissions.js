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
import { PermissionsAndroid, Platform } from 'react-native';
//import { RESULTS } from "react-native-permissions";

//import { BleManager } from 'react-native-ble-plx'
//import Contacts from 'react-native-contacts';
//import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions'; //perissions for IOS
//import { launchCamera } from 'react-native-image-picker';

const Permissions = () => {
  const [cameraSwitchValue, setCameraSwitchValue] = useState(false);
  const [locationSwitchValue, setLocationSwitchValue] = useState(false);
  const [contactsSwitchValue, setContactsSwitchValue] = useState(false);
  const [bluetoothSwitchValue, setBluetoothSwitchValue] = useState(false);
  const [healthSwitchValue, setHealthSwitchValue] = useState(false);
  const navigation = useNavigation();

  // check permission statuses when the component mounts
  React.useEffect(() => {
    const checkPermissions = async () => {
      const cameraStatus = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.CAMERA,
      );
      setCameraSwitchValue(cameraStatus);

      const locationStatus = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      setLocationSwitchValue(locationStatus);

      const contactsStatus = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
      );
      setContactsSwitchValue(contactsStatus);

      const bluetoothStatus = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
      setBluetoothSwitchValue(bluetoothStatus);

      const healthStatus = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
      );
      setHealthSwitchValue(healthStatus);
    };

    checkPermissions();
  }, []);  

  //handle camera permissions
  const handleCameraSwitch = async (value) => {
    setCameraSwitchValue(value);
    
    if (value) {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
  
        if (!granted) {
          const permissionResult = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission',
              message: 'App needs access to camera',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          );
  
          if (permissionResult !== PermissionsAndroid.RESULTS.GRANTED) {
            setCameraSwitchValue(false);
            return;
          }
        }
      } else {
        // code to handle permission check for other platforms
      }
    } else {
      if (Platform.OS === 'android') {
        const revoked = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.CAMERA,
        );
  
        if (revoked) {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
              title: 'Camera Permission Revoked',
              message: 'App needs access to camera',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          );
        }
      } else {
        // code to handle permission revocation for other platforms
      }
    }
  };
  //handle location permissions
  const handleLocationSwitch = async (value) => {
    setLocationSwitchValue(value);
  
    if (value) {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
  
        if (!granted) {
          const permissionResult = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission',
              message: 'App needs access to location',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          );
  
          if (permissionResult !== PermissionsAndroid.RESULTS.GRANTED) {
            setLocationSwitchValue(false);
            return;
          }
        }
      } else {
        // code to handle permission check for other platforms
      }
    } else {
      if (Platform.OS === 'android') {
        const revoked = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
  
        if (revoked) {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Permission Revoked',
              message: 'App needs access to location',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          );
        }
      } else {
        // code to handle permission revocation for other platforms
      }
    }
  };
  
//handle location permissions
const handleBluetoothSwitch = async (value) => {
  setBluetoothSwitchValue(value);

  if (value) {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (!granted) {
        const permissionResult = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Bluetooth Permission',
            message: 'App needs access to bluetooth',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        );

        if (permissionResult !== PermissionsAndroid.RESULTS.GRANTED) {
          setBluetoothSwitchValue(false);
          return;
        }
      }
    } else {
      // code to handle permission check for other platforms
    }
  } else {
    if (Platform.OS === 'android') {
      const revoked = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (revoked) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Bluetooth Permission Revoked',
            message: 'App needs access to bluetooth',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        );
      }
    } else {
      // code to handle permission revocation for other platforms
    }
  }
};
  
  
  //handle contacts permissions
  const handleContactsSwitch = async (value) => {
    setContactsSwitchValue(value);
  
    if (value) {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        );
  
        if (!granted) {
          const permissionResult = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              title: 'Contacts Permission',
              message: 'App needs access to contacts',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          );
  
          if (permissionResult !== PermissionsAndroid.RESULTS.GRANTED) {
            setContactsSwitchValue(false);
            return;
          }
        }
      } else {
        // code to handle permission check for other platforms
      }
    } else {
      if (Platform.OS === 'android') {
        const revoked = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        );
  
        if (revoked) {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
            {
              title: 'Contacts Permission Revoked',
              message: 'App needs access to contacts',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          );
        }
      } else {
        // code to handle permission revocation for other platforms
      }
    }
  };
  //handle health switch
  const handleHealthSwitch = async (value) => {
    setHealthSwitchValue(value);

    if (value) {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
        );
  
        if (!granted) {
          const permissionResult = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
            {
              title: 'Health Permission',
              message: 'App needs access to health data',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          );
  
          if (permissionResult !== PermissionsAndroid.RESULTS.GRANTED) {
            setHealthSwitchValue(false);
            return;
          }
        }
      } else {
        // code to handle permission check for other platforms
      }
    } else {
      if (Platform.OS === 'android') {
        const revoked = await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
        );
  
        if (revoked) {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.BODY_SENSORS,
            {
              title: 'Health Permission Revoked',
              message: 'App needs access to health data',
              buttonPositive: 'OK',
              buttonNegative: 'Cancel',
            },
          );
        }
      } else {
        // code to handle permission revocation for other platforms
      }
    }
  };


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
      <View style={styles.lineView} />
      <Switch //camera
        style={styles.cameraSwitch}
        value={cameraSwitchValue}
        onValueChange={handleCameraSwitch}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch //location
        style={styles.locationSwitch}
        value={locationSwitchValue}
        onValueChange={handleLocationSwitch}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch //contacts
        style={styles.contactsSwitch}
        value={contactsSwitchValue}
        onValueChange={handleContactsSwitch}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch //bluetooth
        style={styles.bluetoothSwitch}
        value={bluetoothSwitchValue}
        onValueChange={handleBluetoothSwitch}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch //health
        style={styles.healthSwitch}
        value={healthSwitchValue}
        onValueChange={handleHealthSwitch}
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
    width: "85%",
    height: 50,
  },
  lineView: { //line seperator
    position: "absolute",
    top: 250,
    left: 16,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderTopWidth: 1,
    width: "90%",
    height: 1,
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
    left: "80%",
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
    left: "80%",
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
    left: "80%",
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
    left: "80%",
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
    left: "80%",

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
