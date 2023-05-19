import React, { useState } from "react";
import {
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
import { Searchbar } from "react-native-paper";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

const DISLIKES_DATA = [
  { id: "1", title: "None", choice: false },
  { id: "2", title: "Mushrooms", choice: false },
  { id: "3", title: "Ginger",choice: false },
  { id: "4", title: "Raisins", choice: false },
  { id: "5", title: "Tofu", choice: false },
  { id: "6", title: "Anchovies", choice: false },
];
export const selected_items_dislikes = [];

export default function Dislikes({ navigation }) {
  const [dislikes, setDislikes] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      var difference = DISLIKES_DATA.filter(x => selected_items_dislikes.indexOf(x) === -1);
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
    setDislikes((prevDislikes) => [...prevDislikes, item.id]);
    setSearchQuery("");
    // BUG: Need to hide flatlist everytime after an item is added.
  };
  const AddedByYou = () => {
    if (selected_items_dislikes.length >= 1) {
      return (
        <View>
          <Text style={styles.text}>Added by you</Text>
          <View>
            <FlatList
              data={selected_items_dislikes}
              numColumns={2}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <View {...{ style: item.choice ? styles.addeditem : styles.item }}>
                  <TouchableOpacity
                    style={styles.preference}
                    onPress={() => {
                      var index = selected_items_dislikes.indexOf(item);
                      selected_items_dislikes.splice(index, 1);
                      item.choice = !item.choice
                      console.log(item, item.choice);
                      console.log(selected_items_dislikes);
                      // BUG: need to remove item.id if its already selected before
                      setDislikes((prevDislikes) => [...prevDislikes, item.id]);
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
    DISLIKES_DATA.forEach(element => {
      element.choice = false;
    });
    console.log("All data selected cleared");
    selected_items_dislikes.splice(0, selected_items_dislikes.length);
  }
  //For troubleshooting
  //console.log(dislikes);
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
        <Text style={styles.title}>Dislikes</Text>
      </View>
      <Searchbar
        placeholder="Search Dislikes"
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
                  selected_items_dislikes.push(item);
                  item.choice = !item.choice
                  console.log(item, item.choice);
                  var index0 = filteredDataSource.indexOf(item);
                  filteredDataSource.splice(index0, 1);
                  setDislikes((prevDislikes) => [...prevDislikes, item.id]);
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
        data={DISLIKES_DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View {...{ style: item.choice ? styles.addeditem : styles.item }}>
            <TouchableOpacity
              style={styles.preference}
              onPress={() => {
                // setIsSelected(!isSelected)
                if(item.title=="None")
                {
                  defaults()
                  navigation.navigate('HealthConditions');
                  //return ; 
                  // return statement removed since it wasn't actually working 
                  // if Return is added it will not clear the array or put default values. 
                  // to deselect none press the none button in the AddedByYou section 
                }
                else if (selected_items_dislikes.includes(item) && item.title!="None") {
                  var index = selected_items_dislikes.indexOf(item);
                  selected_items_dislikes.splice(index, 1);
                  item.choice = !item.choice
                  console.log(item, item.choice);
                  console.log(selected_items_dislikes);
                } else if(!selected_items_dislikes.includes(item) && item.title!="None"){
                  selected_items_dislikes.push(item);
                  item.choice = !item.choice
                  console.log(item.choice);
                  console.log(selected_items_dislikes);
                }
                // BUG: need to remove item.id if its already selected before
                setDislikes((prevDislikes) => [...prevDislikes, item.id]);
                //BUG: need to change colour when selected
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
        onPress={() => {if (selected_items_dislikes.length == 0) {
          selected_items_dislikes.push(DISLIKES_DATA[0]);
        }
        else {
          const noneIndex = selected_items_dislikes.findIndex((el) => el.title === "None");
          if (noneIndex !== -1) {
            selected_items_dislikes.splice(noneIndex, 1); // Remove the "None" element from selected_items_diet
          }
        }
        navigation.navigate("HealthConditions")}}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
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
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkIcon: {
    marginRight: 5,
  },
  listStyle: {
    paddingTop: 10,
  },
});

// import { StatusBar } from "expo-status-bar";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function Dislikes({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <View style={{ marginLeft: 10, marginTop: 30 }}>
//         <Text style={{ fontWeight: "bold", fontSize: 30 }}>Dislikes</Text>
//       </View>
//       <Button
//         title="Continue"
//         onPress={() => navigation.navigate("HealthConditions")}
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
