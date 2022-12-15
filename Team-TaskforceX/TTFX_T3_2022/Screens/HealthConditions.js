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
import Icon from "react-native-vector-icons/FontAwesome"; //Back Arrow
import { Searchbar } from "react-native-paper";
import { TextInput as RNPTextInput } from "react-native-paper"; //Search Bar

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

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

  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = HEALTH_DATA.filter(function (item) {
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
    setHealthCondition((prevHealthCondition) => [
      ...prevHealthCondition,
      item.id,
    ]);
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
                <View style={styles.item}>
                  <TouchableOpacity
                    style={styles.preference}>
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
  //For troubleshooting
  //console.log(diet);
  console.log(searchQuery);
  // console.log(item);
  // console.log(isSelected)
  return (
    <SafeAreaView style={styles.container}>
      <Icon //Back arrow
        style={styles.backArrow}
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text style={styles.title}>Health Conditions</Text>
      </View>
      <RNPTextInput //Active search bar.
        style={styles.searchHealthTextInputRNPTextInput}
        placeholder="Search Health Conditions"
        onChangeText={(text) => searchFilterFunction(text)}
        value={searchQuery}
        label="Search Health Conditions"
        mode="outlined"
        activeOutlineColor="#8273a9"
      />
      <View>
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item) => item.id}
          renderItem={ItemView}
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
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.preference}
              onPress={() => {
                //setIsSelected(!isSelected)
                if (item.title == "None") {
                  navigation.navigate('Preferences');
                  selected_items_health.splice(0,selected_items_health);
                  return;
                }
                if (selected_items_health.includes(item)) {
                  var index = selected_items_health.indexOf(item);
                  selected_items_health.splice(index, 1);
                  console.log(selected_items_health);
                } else {
                  selected_items_health.push(item);
                  console.log(selected_items_health);
                }

                // BUG: need to remove item.id if its already selected before
                setHealthCondition((prevHealthCondition) => [
                  ...prevHealthCondition,
                  item.id,
                ]);
                // BUG: need to change colour when selected
              }}
            >
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Preferences")}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  //Background
  container: {
    flex: 1,
    backgroundColor: "#FFFBFE",
    padding: 16,
  },
  
  //Back Arrow
  backArrow: {
    marginTop: 52,
  },
  
  //Main Title
  title: { 
    fontSize: 24,
    fontFamily: "OpenSans_400Regular",
    color: "black",
    marginTop: 30,
    marginBottom: 20,
    lineHeight: 32,
    
  },

  //Search Bar
  searchHealthTextInputRNPTextInput: {
    borderRadius: 4,
    borderColor: "black",
    borderStyle: "solid",
    width: 361,
    height: 56,
    backgroundColor: "#FFFBFE",
  },

  //Secondary headings
  text: { 
    fontSize: 19,
    marginTop: 16,
    color: "black",
    fontFamily: "OpenSans_400Regular",
    lineHeight: 48,
    fontWeight: '600',
  },

 //Continue button
  button: {
    backgroundColor: "#8273A9",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    top: 10,
    marginBottom: 32,
  },

  //Continue button text
  buttonText: {
    fontSize: 16,
    letterSpacing: 0.1,
    lineHeight: 20,
    fontWeight: '700',
    fontFamily: 'OpenSans_400Regular',
    color: '#fff',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },

  //Chips
  item: {
    marginTop: 16,
    backgroundColor: "#FFFBFE",
    borderColor: "#79747E",
    borderWidth: 1,
    maxWidth: SCREENWIDTH / 2 - 16,
    alignItems: "center",
    borderRadius: 8,
    justifyContent: "space-around",
    margin: 5,
    flex: 0.5,
    height: 32,
  },

  //Chips text
  itemText: { 
    fontSize: 14,
    color: "#49454F",
    alignItems: "center",
    fontFamily: "OpenSans_400Regular",
    fontWeight: '600',
  },

  listStyle: {
    paddingTop: 10,
  },
});