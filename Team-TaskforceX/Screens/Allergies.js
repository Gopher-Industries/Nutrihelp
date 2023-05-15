import React, { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { FilterChip } from "./Components/FilterChip";
import { Searchbar } from "react-native-paper";
import { firebase } from "../config";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

const ALLERGY_DATA = [
  { id: "1", title: "None", choice: false },
  { id: "2", title: "Soy", choice: false },
  { id: "3", title: "Dairy", choice: false },
  { id: "4", title: "Fish", choice: false },
  { id: "5", title: "Eggs", choice: false },
  { id: "6", title: "Gluten", choice: false },
  { id: "7", title: "Test", choice: false },
];

export const selected_items_allergy = [];

const getItem = (item) => {
  // Function for click on an item
  setAllergy((prevAllergy) => [...prevAllergy, item.id]);
  setSearchQuery("");
  // BUG: Need to hide flatlist everytime after an item is added.
};

//For troubleshooting
//console.log(allergy);
//console.log(searchQuery);
// console.log(item);
// console.log(isSelected)

export default function Allergies({ navigation }) {
  const [allergy, setAllergy] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      var difference = ALLERGY_DATA.filter(x => selected_items_allergy.indexOf(x) === -1);
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
    setAllergy((prevAllergy) => [...prevAllergy, item.id]);
    setSearchQuery("");
    // BUG: Need to hide flatlist everytime after an item is added.
  };

  const AddedByYou = () => {
    if (selected_items_allergy.length >= 1) {
      return (
        <View>
          <Text style={styles.text}>Added by you</Text>
          <View>
            <FlatList
              data={selected_items_allergy}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View style={styles.item}>
                  <TouchableOpacity
                    style={styles.preference}
                    onPress={() => {
                      var index = selected_items_allergy.indexOf(item);
                      selected_items_allergy.splice(index, 1);
                      item.choice = !item.choice
                      console.log(item, item.choice);
                      console.log(selected_items_allergy);
                      // BUG: need to remove item.id if its already selected before
                      setAllergy((prevAllergy) => [...prevAllergy, item.id]);
                    }}
                  >
                    <Text style={styles.itemText}>{item.title}</Text>
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
    ALLERGY_DATA.forEach(element => {
      element.choice = false;
    });
    console.log("All data selected cleared");
    selected_items_allergy.splice(0, selected_items_allergy.length);
  }

  //For troubleshooting
  //console.log(diet);
  console.log(searchQuery);
  // console.log(item);
  // console.log(isSelected)
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text style={styles.title}>Allergies</Text>
      </View>
      <Searchbar
        placeholder="Search Allergies"
        onChangeText={(text) => searchFilterFunction(text)}
        value={searchQuery}
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
                  selected_items_allergy.push(item);
                  item.choice = !item.choice
                  console.log(item, item.choice);
                  var index0 = filteredDataSource.indexOf(item);
                  filteredDataSource.splice(index0, 1);
                  setAllergy((prevDiet) => [...prevDiet, item.id]);
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
        data={ALLERGY_DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View {...{ style: item.choice ? styles.addeditem : styles.item }}>
            <TouchableOpacity
              style={styles.preference}
              onPress={() => {
                if (item.title == "None") {
                  defaults()
                  navigation.navigate("Dislikes")
                  //return ; 
                  // return statement removed since it wasn't actually working 
                  // if Return is added it will not clear the array or put default values. 
                  // to deselect none press the none button in the AddedByYou section 
                }
                else if (selected_items_allergy.includes(item) && item.title!="None") {
                  var index = selected_items_allergy.indexOf(item);
                  selected_items_allergy.splice(index, 1);
                  item.choice = !item.choice
                  console.log(item, item.choice);
                  console.log(selected_items_allergy);
                } else if(!selected_items_allergy.includes(item) && item.title!="None"){
                  selected_items_allergy.push(item);
                  item.choice = !item.choice
                  console.log(item.choice);
                  console.log(selected_items_allergy);
                }
                setAllergy((prevAllergy) => [...prevAllergy, item.id]);
              }}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          if (selected_items_allergy.length == 0) {
            selected_items_allergy.push(ALLERGY_DATA[0]);
          }
          navigation.navigate("Dislikes")
        }}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 30,
  },
  title: {
    fontSize: 25,
    color: "black",
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: "bold",
    color: "black",
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
  button: {
    backgroundColor: "#8d71ad",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    top: 10,
    marginBottom: 50,
  },

  buttonText: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },

  item: {
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
    // fontFamily: 'Times',
  },

  listStyle: {
    paddingTop: 10,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function Allergies({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={{ marginLeft: 10, marginTop: 30 }}>
//         <Text style={{ fontWeight: "bold", fontSize: 30 }}>Allergies</Text>
//       </View>
//       <Button
//         title="Continue"
//         onPress={() => navigation.navigate("Dislikes")}
//       />
//       <Button title="Exit" onPress={() => navigation.navigate("LandingPage")} />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
