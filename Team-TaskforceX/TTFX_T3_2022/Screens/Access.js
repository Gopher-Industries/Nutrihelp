import * as React from "react";
import { useState, useEffect } from "react";
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
  FlatList,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  SectionList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome";
//import Contacts from 'react-native-contacts';
import * as Contacts from 'expo-contacts';
//import { DropDownPicker } from "react-native-element-dropdown";
import  DropDownPicker  from 'react-native-dropdown-picker'
import {KeyboardAwareScrollView , KeyboardAwareFlatList} from 'react-native-keyboard-aware-scroll-view'



const Access = () => {
  const [familyCarerSwitchValue, setFamilyCarerSwitchValue] = useState(false);
  const [weeklyReportsSwitchValue, setWeeklyReportsSwitchValue] = useState(false);
  const [healthReportSwitchValue, setHealthReportSwitchValue] = useState(false);
  const [groceryListSwitchValue, setGroceryListSwitchValue] = useState(false);
  const [gpSwitchValue, setGpSwitchValue] = useState(false);
  const navigation = useNavigation();

  const [open, setOpen] = useState(false)
  const [gpOpen, setGpOpen] = useState(false)

  //const [familyText, setFamilyText] = useState('');
  //const [gpText, setGpText] = useState ('');
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedFamilyContact] = useState([]);
  const [selectedGPContact, setSelectedGPContact] = useState([]);
  //const [familyInputFocused, setFamilyInputFocused] = useState(false);
  //const [gpInputFocused, setGpInputFocused] = useState(false);
  const [showContactPicker, setShowContactPicker] = useState(false);


    // Function to fetch contacts data from an API or local storage
    const fetchContacts = async () => {
      try {
        const { status } = await Contacts.requestPermissionsAsync();
    
        if (status === 'granted') {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
          });
    
          if (data.length > 0) {
            const processedContacts = data.map((contact) => {
              const phoneNumbers = contact.phoneNumbers?.map(
                (phoneNumber) => phoneNumber.number
              );
              return {
                name: contact.name,
                phoneNumbers: phoneNumbers || [], // Handle cases where phone numbers are not available
              };
            });
            setContacts(processedContacts);
          }
        } else {
          console.log('Permission denied for accessing contacts');
        }
      } catch (error) {
        console.log('Error fetching contacts:', error);
      }
    };


      // useEffect to fetch contacts data on component mount
  useEffect(() => {
    fetchContacts();
  }, []);
/*
  //function to search contacts in users phone
  const searchContacts = async (familyText) => {
    try {
      const { status } = await Contacts.requestPermissionsAsync();
  
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
        });
  
        const filteredContacts = data.filter((contact) => {
          const name = contact.name.toLowerCase();
          const phoneNumbers = contact.phoneNumbers?.map(
            (phoneNumber) => phoneNumber.number
          );
          if (phoneNumbers) {
            return name.includes(familyText) ||
              phoneNumbers.some((phoneNumber) =>
                phoneNumber.includes(familyText)
              );
          }
          return name.includes(familyText);
        });
  
        setContacts(filteredContacts);
      }
    } catch (error) {
      console.log('Error searching contacts:', error);
    }
  };
*/

const handleFamilySwitchChange = (value) => {
  setFamilyCarerSwitchValue(value);
  setOpen(value);

  if (familyCarerSwitchValue == true)
  {
    setSelectedFamilyContact([]);
  }
};

const handleGpSwitchChange = (value) => {
  setGpSwitchValue(value);
  setGpOpen(value);

  if (gpSwitchValue == true)
  {
    setSelectedGPContact([]);
  }
};


  const handleContactPicker = () => {
    setShowContactPicker(true);
  };


  const handleContactSelection = (contact) => {
    if (familyCarerSwitchValue == true)
    {
      setSelectedFamilyContact(prevValue => [...prevValue, contact]);
    }

    console.log("test")
    for (let i = 0; i < selectedContact.length; i++) {
      console.log(selectedContact[i]);
    }
  };


  const handleGPSelection = (contact) => {
    if (gpSwitchValue == true)
    {
      setSelectedGPContact(prevValue => [...prevValue, contact])
    }
  };
/*
  const handleFamilySearch = (text) => {
    setFamilyText(text.trim().toLowerCase());
    searchContacts(text)
  };
    const handleGpSearch = (text) => {
    setGpText(text.trim().toLowerCase());
    searchContacts(text)
  };
*/

  return (
    
    
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <KeyboardAvoidingView style={styles.container} behavior="height">
    <View style = {styles.inner}>
    <Icon style={styles.backButton}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
    <View>
        <Text style={styles.headline}>Access</Text>
    </View>
      <Text style={styles.wouldYouLikeToGiveYourFa}>
          Would you like to give your Family / Carer or GP access to your
          nutritional and health information?
      </Text>
      <Text style={styles.familyCarer}>Family / Carer</Text>
      <Switch
        style={styles.familyCarerSwitch}
        value={familyCarerSwitchValue}
        onValueChange={handleFamilySwitchChange}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <DropDownPicker
        open={open}
        setOpen={setOpen}
        onOpen={handleContactPicker}
        multiple={true}
        searchable={true}
        placeholder="Search contacts"
        searchPlaceholder="Type Contact Name or Number"
        searchPlaceholderTextColor="#49454f"
        searchableError={() => <Text>Contacts not found</Text>}
        searchableStyle={styles.dropDownSearchable}
        searchableErrorStyle={styles.dropDownSearchableError}
        items={contacts.map((contact) => ({
          label: `${contact.name} (${contact.phoneNumbers.join(', ')})`,
          value: `${contact.name} (${contact.phoneNumbers.join(', ')})`,
        }))}
        defaultValue={selectedContact}
        containerStyle={styles.dropDownContainer}
        style={styles.dropDownStyle}
        itemStyle={styles.dropDownItemStyle}
        dropDownStyle={styles.dropDownDropdownStyle}
        onSelectItem={(items) =>
          handleContactSelection(items.map((item) => item.value))}
      />
      <Text style={styles.weeklyReports}>Weekly Reports</Text>
      <Switch
        style={styles.weeklyReportsSwitch}
        value={weeklyReportsSwitchValue}
        onValueChange={setWeeklyReportsSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Text style={styles.groceryList}>Grocery List</Text>
      <Switch
        style={styles.groceryListSwitch}
        value={groceryListSwitchValue}
        onValueChange={setGroceryListSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <Text style={styles.healthReport}>Health Report</Text>
      <Switch
        style={styles.healthReportSwitch}
        value={healthReportSwitchValue}
        onValueChange={setHealthReportSwitchValue}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <View style={styles.lineView} />
      <Text style={styles.gP}>GP</Text>
      <Switch
        style={styles.gpSwitch}
        value={gpSwitchValue}
        onValueChange={handleGpSwitchChange}
        thumbColor="#fff"
        trackColor={{ false: "#939393", true: "#8273a9" }}
      />
      <DropDownPicker
        open={gpOpen}
        setOpen={setGpOpen}
        onOpen={handleContactPicker}
        multiple={true}
        searchable={true}
        placeholder="Search contacts"
        searchPlaceholder="Type Contact Name or Number"
        searchablePlaceholderTextColor="#49454f"
        searchableError={() => <Text>Contacts not found</Text>}
        searchableStyle={styles.dropDownSearchable}
        searchableErrorStyle={styles.dropDownSearchableError}
        items={contacts.map((contact) => ({
          label: `${contact.name} (${contact.phoneNumbers.join(', ')})`,
          value: contact.name,
        }))}
        defaultValue={selectedContact}
        containerStyle={styles.dropDownContainer}
        style={styles.dropDownStyle}
        itemStyle={styles.dropDownItemStyle}
        dropDownStyle={styles.dropDownDropdownStyle}
        onChangeItem={(item) => handleGPSelection(item.value)}
      />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => navigation.navigate("Notifications")}
      >
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    
    
    
  );
};
/*
const FamilyFlatList = ({ contacts, handleContactSelection }) => (
  
  <FlatList
    data={contacts}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => handleContactSelection(item.name)}>
        <Text style={styles.flatListText}>
          {item.name} - {" "}
          {item.phoneNumbers && item.phoneNumbers.length > 0 ?
            item.phoneNumbers
              .map((phoneNumber) => phoneNumber.number)
              .join(", ") :
            "No phone numbers"
          }
        </Text>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id}
    style={styles.familyFlatList}
  />
);

const GPFlatList = ({ contacts, handleContactSelection }) => (
  
  <FlatList
    data={contacts}
    renderItem={({ item }) => (
      <TouchableOpacity onPress={() => handleContactSelection(item.name)}>
        <Text style={styles.gpFlatListText}>
          {item.name} - {" "}
          {item.phoneNumbers && item.phoneNumbers.length > 0 ?
            item.phoneNumbers
              .map((phoneNumber) => phoneNumber.number)
              .join(", ") :
            "No phone numbers"
          }
        </Text>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id}
    style={styles.gpFlatList}
  />
);

<TextInput
        onFocus={() => setFamilyInputFocused(true)}
        style={styles.FamilySearchBox}
        placeholder="          Search contacts"
        keyboardType="default"
        placeholderTextColor="#49454f"
        onChangeText={handleFamilySearch}
        value={familyCarerSwitchValue ? familyText : "          Search contacts"}
        editable = {familyCarerSwitchValue}
      /> 
      {familyInputFocused && familyCarerSwitchValue && familyText ? (
              <FamilyFlatList contacts={contacts} handleContactSelection={handleContactSelection} />
            ) : null}


            <TextInput
        onFocus={() => setGpInputFocused(true)}
        style={styles.gpSearchBox}
        placeholder="          Search contacts"
        keyboardType="default"
        placeholderTextColor="#49454f"
        onChangeText={handleGpSearch}
        value={gpSwitchValue ? gpText : "          Search contacts"}
        editable = {gpSwitchValue}
      />
      {gpInputFocused && gpSwitchValue && gpText ? (
              <GPFlatList contacts={contacts} handleContactSelection={handleGPSelection} />
            ) : null}

*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#FFFBFE',
  },
  inner:{
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "flex-end",
  },
  backButton: { //back button
    marginLeft: 16,
    marginBottom: 20,
    width: 200,
    height: 24,
  },
  headline: { //access text
    marginBottom: 10,
    marginLeft: 16,
    fontSize: 24,
    color: "#000",
    textAlign: "left",
    display: "flex",
    width: 328,
    height: 50,
  },
  wouldYouLikeToGiveYourFa: {
    marginTop: 10,
    marginLeft: 16,
    fontSize: 16,
    lineHeight: 24,
    color: "#000",
    textAlign: "left",
    width: "90%",
    height: 50,
  },
  familyCarer: { //family header text
    marginTop: 15,
    marginLeft: 16,
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
    marginTop: -40,
    marginRight: 16,
  },
dropDownContainer: {
  width: '90%',
  height: 60,
  marginBottom: 20,
  marginLeft: 16,
  zIndex: 999,
},
dropDownStyle: {
  backgroundColor: '#fafafa',
  borderColor: '#ccc',
  borderWidth: 1,
},
dropDownItemStyle: {
  justifyContent: 'flex-start',
},
dropDownDropdownStyle: {
  backgroundColor: '#fafafa',
},
dropDownSearchable: {
  borderRadius: 5,
  borderColor: '#79747e',
  borderWidth: 1,
  paddingLeft: 15,
  paddingRight: 40,
},
dropDownSearchableError: {
  borderColor: 'red',
},
/*
  FamilySearchBox: { //Family / Carer search box
    marginTop: 20,
    marginLeft: 16,
    padding: 15,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    width: "90%",
    height: 60,
    marginBottom: 10,
  },
  familyFlatList: { //Flatlist
    top: -11,
    paddingHorizontal: 10,
    paddingVertical: 0,
    backgroundColor: '#fffbfe',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 16,
    width: "90%",
    zIndex: 1
  },
  flatListText: { //Flatline text
    fontSize: 16,
    lineHeight: 50,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: 40,
  },
  */
  weeklyReports: { //reports text
    marginTop: 10,
    marginLeft: 16,
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
    marginTop: -40,
    marginRight: 16,
  },
  groceryList: { //Grocery text
    marginTop: 10,
    marginLeft: 16,
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
    marginTop: -40,
    marginRight: 16,
  },
  healthReport: { //health text
    marginTop: 10,
    marginLeft: 16,
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
    marginTop: -40,
    marginRight: 16,
  },
  lineView: { //line seperator
    marginTop: 20,
    marginLeft: 16,
    borderStyle: "solid",
    borderColor: "#dbdbdb",
    borderTopWidth: 1,
    width: "90%",
    height: 1,
  },
  gP: { //gp text
    marginTop: 10,
    marginLeft: 15, 
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
    marginTop: -40,
    marginRight: 16,
  },
  /*
  gpSearchBox: { //GP search box
    padding: 15,
    marginBottom: 20,
    marginLeft: 16,
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: "#79747e",
    borderWidth: 1,
    width: "90%",
    height: 60,
  },
  
  gpFlatList: { //flatlist
    top: -21,
    paddingHorizontal: 10,
    paddingVertical: 45,
    backgroundColor: '#fffbfe',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginLeft: 16,
    width: "90%",
    alignItems: "start",
    zIndex: 1
  },
  gpFlatListText: { //Flatline text
    fontSize: 16,
    lineHeight: 50,
    fontWeight: "600",
    color: "#000",
    textAlign: "left",
    display: "flex",
    width: "100%",
    height: 40,
  },
  */
    continueText: {
    fontSize: 16,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
  },
  continueButton: {
    marginBottom: 40,
    marginLeft: 16,
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
    borderRadius: 20,
    backgroundColor: "#fffbfe",
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

export default Access;
