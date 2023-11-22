import * as React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  Pressable,
  Image,
  Switch,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { firebase } from "../config";
//import PushNotification from 'react-native-push-notification';
import { Notifications } from 'expo';
//import * as Permissions from 'expo-permissions';
//import messaging from '@react-native-firebase/messaging';
//import { NotificationContainer, NotificationManager } from 'react-notifications';
//import 'react-notifications/lib/notifications.css';
const windowWidth = Dimensions.get("window").width;



const Notification = () => {
//change name of switches to relevant names once decided what theyre for
  const [notificationSwitch1Value, setNotificationSwitch1Value] = useState(false);
  const [notificationSwitch3Value, setNotificationSwitch3Value] = useState(false);
  const [notificationSwitch4Value, setNotificationSwitch4Value] = useState(false);
  const [notificationSwitch2Value, setNotificationSwitch2Value] = useState(false);
  const [notificationSwitch5Value, setNotificationSwitch5Value] = useState(false);
  const navigation = useNavigation();
  
/* //potential implimentation for notifications
  useEffect(() => {
    if (notificationSwitch1Value == true) {
      Notifications.scheduleNotificationAsync({
        content: {
          title: "Reminder",
          body: "Don't forget to drink water!",
        },
        trigger: {
          seconds: 60*60, // send notification every hour
        },
      });
    }
  }, [notificationSwitch1Value]);
//*/

    return (
    <View style={styles.notifications}>
      <Text style={styles.wouldYouLikeUsToSendYou}>
          Would you like us to send you reminders throughout the day?
        </Text>
      <StatusBar barStyle="default" translucent={true} />
      <Text style={styles.notification1}>Drink Water</Text>
      <Text style={styles.notification2}>Eat Next Meal</Text>
      <Text style={styles.notification3}>Notification</Text>
      <Text style={styles.notification4}>Notification</Text>
      <Text style={styles.notification5}>Notification</Text>
      <Switch
        style={styles.notificationSwitch1}
        value={notificationSwitch1Value}
        onValueChange={setNotificationSwitch1Value}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
        <Switch
        style={styles.notificationSwitch2}
        value={notificationSwitch2Value}
        onValueChange={setNotificationSwitch2Value}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.notificationSwitch3}
        value={notificationSwitch3Value}
        onValueChange={setNotificationSwitch3Value}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.notificationSwitch4}
        value={notificationSwitch4Value}
        onValueChange={setNotificationSwitch4Value}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Switch
        style={styles.notificationSwitch5}
        value={notificationSwitch5Value}
        onValueChange={setNotificationSwitch5Value}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("TodaysPlan")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      <View >
      <Icon style={styles.backButton}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
        <Text style={styles.headline}>Notifications</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wouldYouLikeUsToSendYou: { // would you like text
    position: "absolute",
    top: 175,
    left: 16,
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
    textAlign: "left",
    width: "80%",
    height: 60,
  },
  headline: { //notifications headline text
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
  backButton: { //back button
    position: "absolute",
    left: 16,
    top: 70,
    width: 24,
    height: 24,
  },
  notification1: { //first 
    position: "absolute",
    top: 240,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 123,
    height: 40,
  },
  notificationSwitch1: {
    position: "absolute",
    top: 240,
    left: "80%",
  },
  notification2: {
    position: "absolute",
    top: 300,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 114,
    height: 40,
  },
  notificationSwitch2: {
    position: "absolute",
    top: 300,
    left: "80%",
  },
  notification3: {
    position: "absolute",
    top: 360,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 118,
    height: 40,
  },
  notificationSwitch3: {
    position: "absolute",
    top: 360,
    left: "80%",
  },
  notification4: {
    position: "absolute",
    top: 420,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 181,
    height: 40,
  },
  notificationSwitch4: {
    position: "absolute",
    top: 420,
    left: "80%",
  },
  notification5: {
    position: "absolute",
    top: 480,
    left: 16,
    fontSize: 16,
    lineHeight: 48,
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 167,
    height: 40,
  },
  notificationSwitch5: {
    position: "absolute",
    top: 480,
    left: "80%",
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
  continueButton: { //continue button
      position: "absolute",
      bottom: 32,
      left: 16,
      borderRadius: 100,
      backgroundColor: "#8273a9",
      width: windowWidth - 32,
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


  notifications: {
    position: "relative",
    borderRadius: 20,
    backgroundColor: "#fffbfe",
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
});

export default Notification;
