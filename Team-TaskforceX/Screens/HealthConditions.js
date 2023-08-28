import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Searchbar } from "react-native-paper";
import { firebase } from "../config";
import { useAccessibilityContext } from "./Components/AccessibilityContext"; // Import the context hook
import * as Speech from 'expo-speech';


const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

//hardcoded for now but we should be pulling from DB
const HEALTH_DATA = [
  { id: "1", title: "None" },
  { id: "2", title: "Vit B6 deficiency" },
  { id: "3", title: "Vit D deficiency" },
  { id: "4", title: "Limit Sodium" },
  { id: "5", title: "Limit Cholesterol" },
  { id: "6", title: "Diabetes type 2" },
  { id: "7", title: "Cardiovascular" },
  { id: "8", title: "Iron deficiency" },
];
export const selected_items_health = [];

const searchFilterFunction = (text) => {
  // Check if searched text is not blank
  if (text) {
    // Inserted text is not blank
    // Filter the masterDataSource and update FilteredDataSource
    const newData = HEALTH_DATA.filter(function (item) {
      // Applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredDataSource(newData);
    setSearchQuery(text);
  } else {
    // Inserted text is blank
    // Update FilteredDataSource with masterDataSource
    setFilteredDataSource(HEALTH_DATA);
    setSearchQuery(text);
  }
};

const ItemView = ({ item }) => {
  if (searchQuery.length > 0) {
    return (
      // Flat List Item
      <Text style={styles.listStyle} onPress={() => getItem(item)}>
        {item.title}
      </Text>
    );
  } else {
    return <View></View>;
  }
};

const getItem = (item) => {
  // Function for click on an item
  setHealthCondition((prevHealth) => [...prevHealth, item.id]);
  setSearchQuery("");
  // BUG: Need to hide flatlist everytime after an item is added.
};

//For troubleshooting
//console.log(health);
//console.log(searchQuery);
// console.log(item);
// console.log(isSelected)

export default function HealthConditions({ navigation }) {
  const [healthCondition, setHealthCondition] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const { accessibilitySettings, setAccessibilitySettings } = useAccessibilityContext();
  const { colourBlind, textLarge, isVoiceOverOn } = accessibilitySettings;
  // Set up a state to trigger re-renders when Access properties change
  const [accessPropertiesUpdated, setAccessPropertiesUpdated] = useState(0);

  
  //call this for voiceover
  const speak = (text) => {
    Speech.speak(text, {
      language: 'en', // Language code (e.g., 'en', 'es', 'fr', etc.)
      pitch: 1.0, // Pitch of the voice (0.5 to 2.0)
      rate: 1.0, // Speaking rate (0.1 to 0.9 for slow, 1.0 for normal, 1.1 to 2.0 for fast)
    });
  };

  const handleInputFocus = (label) => {
    if (isVoiceOverOn) {
      speak(label);
    }
  };

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      var difference = HEALTH_DATA.filter(x => selected_items_health.indexOf(x) === -1);
      const newData = difference.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearchQuery(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(null);
      setSearchQuery(text);
    }
  };

  const ItemView = ({ item }) => {
    if (searchQuery.length > 0) {
      return (
        // Flat List Item
        <Text style={styles.listStyle} onPress={() => getItem(item)}>
          {item.title}
        </Text>
      );
    } else {
      return <View></View>;
    }
  };

  const getItem = (item) => {
    // Function for click on an item
    setHealthCondition((prevHealthCondition) => [...prevHealthCondition,item.id]);
    setSearchQuery("");
    // BUG: Need to hide flatlist everytime after an item is added.
  };
  const AddedByYou = () => {
    if (selected_items_health.length >= 1) {
      return (
        <View>
          <Text style={styles.text}>Added by you</Text>
          <View>
          <FlatList
              data={selected_items_health}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View {...{ style: item.choice ? styles.addeditem : styles.item }}>
                  <TouchableOpacity
                    style={styles.preference}
                    onPress={() => {
                      var index = selected_items_health.indexOf(item);
                      selected_items_health.splice(index, 1);
                      item.choice = !item.choice
                      console.log(item, item.choice);
                      console.log(selected_items_health);
                      // BUG: need to remove item.id if its already selected before
                      setHealthCondition((prevHealthCondition) => [...prevHealthCondition, item.id]);
                      if (isVoiceOverOn == true) {
                        speak(item.title);}
                    }}
                  >
                    <View style={styles.itemContent}>
               {item.choice && (
               <Icon name="check" size={20} color="black" style={styles.checkIcon}/>
               )}
              <Text style={styles.itemText}>{item.title}</Text>
                </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      )
    }
  }

  const defaults = () => {
    HEALTH_DATA.forEach(element => {
      element.choice = false;
    });
    console.log("All data selected cleared");
    selected_items_health.splice(0, selected_items_health.length);
  }
  //For troubleshooting
  //console.log(diet);
  console.log(searchQuery);
  // console.log(item);
  // console.log(isSelected)

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFBFE",
      padding: 30,
    },
    title: {
      fontSize: textLarge ? 30 : 24,
      color: "black",
      marginTop: 20,
      marginBottom: 20,
    },
    text: {
      fontSize: textLarge ? 24 : 20,
      marginBottom: 10,
      marginTop: 20,
      fontWeight: "bold",
      color: "black",
    },
    button: {
      backgroundColor: colourBlind ? "red":"#8273a9",
      height: 55,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 25,
      top: 10,
      marginBottom: 50,
    },
    buttonText: {
      fontSize: textLarge ? 20 : 16,
      color: "white",
      fontWeight: "bold",
    },
    item: {
      flexDirection: 'row', // Add this line
      alignItems: 'center', // Add this line
      marginTop: 10,
      // backgroundColor: 'green',
      borderColor: "black",
      borderWidth: 1,
      maxWidth: SCREENWIDTH / 2 - 40,
      padding: 10,
      alignItems: "center",
      borderRadius: 10,
      justifyContent: "space-around",
      margin: 5,
      flex: 0.5,
      //backgroundColor: 'pink',
    },
    itemText: {
      color: "black",
      fontSize: textLarge ? 18 : 14,
        // fontFamily: 'Times',
    },
    addeditem: {
      marginTop: 10,
      backgroundColor: 'lavender',
      borderColor: "black",
      borderWidth: 1,
      maxWidth: SCREENWIDTH / 2 - 40,
      padding: 10,
      alignItems: "center",
      borderRadius: 10,
      justifyContent: "space-around",
      margin: 5,
      flex: 0.5,
    },
    checkIcon: {
      marginRight: 5, // Adjust this value to add spacing between the label and check mark
    },
    itemContent: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    listStyle: {
      paddingTop: 10,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <Icon //Back arrow
        style={styles.backArrow}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => 
          {if (isVoiceOverOn == true) {
            speak("Back");
          }navigation.goBack()}}
      />
      <View>
        <Text style={styles.title}>Health Conditions</Text>
      </View>
      <Searchbar
        placeholder="Search Health Conditions"
        onChangeText={(text) => searchFilterFunction(text)}
        value={searchQuery}
        onFocus={() => handleInputFocus("Search Health Conditions")}
      />
      <View>
      <FlatList
          data={filteredDataSource}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <TouchableOpacity
                style={styles.preference}
                onPress={() => {
                  //setIsSelected(!isSelected)
                  setSearchQuery("");
                  selected_items_health.push(item);
                  item.choice = !item.choice
                  console.log(item, item.choice);
                  var index0 = filteredDataSource.indexOf(item);
                  filteredDataSource.splice(index0, 1);
                  setHealthCondition((prevHealthCondition) => [...prevHealthCondition, item.id]);
                  if (isVoiceOverOn == true) {
                    speak(item.title);}
                }}
              >
                <Text style={styles.itemText}>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>

      <View>
        {AddedByYou()}
      </View>

        <Text style={styles.text}>Most Common</Text>
      <FlatList
        data={HEALTH_DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View {...{ style: item.choice ? styles.addeditem : styles.item }}>
            <TouchableOpacity
              style={styles.preference}
              onPress={() => {
                if (item.title == "None") {
                  defaults()
                  navigation.navigate("Preferences")
                  //return ; 
                  // return statement removed since it wasn't actually working 
                  // if Return is added it will not clear the array or put default values. 
                  // to deselect none press the none button in the AddedByYou section 
                }
                else if (selected_items_health.includes(item) && item.title!="None") {
                  var index = selected_items_health.indexOf(item);
                  selected_items_health.splice(index, 1);
                  item.choice = !item.choice
                  console.log(item, item.choice);
                  console.log(selected_items_health);
                } else if(!selected_items_health.includes(item) && item.title!="None"){
                  selected_items_health.push(item);
                  item.choice = !item.choice
                  console.log(item.choice);
                  console.log(selected_items_health);
                }
                
                setHealthCondition((prevHealthCondition) => [...prevHealthCondition, item.id]);
                if (isVoiceOverOn == true) {
                  speak(item.title);}
              }}
            >
              <View style={styles.itemContent}>
                  {item.choice && (
                    <Icon name="check" size={20} color="black" style={styles.checkIcon} />
                  )}
      <Text style={styles.itemText}>{item.title}</Text>
          </View>
      </TouchableOpacity>
          </View>
        )}
      />
        <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (selected_items_health.length == 0) {
            selected_items_health.push(HEALTH_DATA[0]);
          }
          else {
            const noneIndex = selected_items_health.findIndex((el) => el.title === "None");
            if (noneIndex !== -1) {
              selected_items_health.splice(noneIndex, 1); // Remove the "None" element from selected_items_diet
            }
          }
          {if (isVoiceOverOn == true) {
            speak("continue");}}
          navigation.navigate("Preferences")
        }}
        >
        <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
}

