import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {Searchbar} from 'react-native-paper';
import { purple100 } from 'react-native-paper/lib/typescript/styles/colors';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

//hardcoded for now but we should be pulling from DB
const DIET_DATA = [
  {id: '1', title: 'None'},
  {id: '2', title: 'Vegetarian'},
  {id: '3', title: 'Vegan'},
  {id: '4', title: 'Keto'},
  {id: '5', title: 'Pescetarian'},
  {id: '6', title: 'Low Carb'},
  {id: '7', title: 'Test'},
];

var selected_items = [{}];

const DietScreen = () => {
  const navigation = useNavigation();
  const [diet, setDiet] = useState([]);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [isSelected, setIsSelected] = useState(false)

  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const searchData = DIET_DATA.filter(DIET_DATA => DIET_DATA.title == text).map(data => {
        {data.title};
      }) ;

      const newData = DIET_DATA.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(searchData);
      setSearchQuery(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(DIET_DATA);
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
  } else {return(<View></View>)}};

  const getItem = (item) => {
    // Function for click on an item
   setDiet(prevDiet => [...prevDiet, item.id]);
   setSearchQuery("")
   // BUG: Need to hide flatlist everytime after an item is added.
  };

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
        <Text style={styles.title}>Dietary Requirements</Text>
      </View>
      <Searchbar
        placeholder="Search Dietary Requirements"
        onChangeText={text => searchFilterFunction(text)}
        value={searchQuery}
      />
      <View >
      <FlatList
        data={filteredDataSource}
        keyExtractor={item => item.id}
        renderItem={ItemView}
      />
      </View>
      <Text style={styles.text}>Most Common</Text>
      <FlatList
        data={DIET_DATA}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.preference}
              onPress={() => {
                setIsSelected(!isSelected)
                
                // BUG: need to remove item.id if its already selected before
                setDiet(prevDiet => [...prevDiet, item.id]);
                // BUG: need to change colour when selected

              }}>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AllergyScreen')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default DietScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },
  title: {
    fontSize: 25,
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  button: {
    backgroundColor: '#8d71ad',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    top: 10,
    marginBottom: 50,
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  item: {
    marginTop: 10,
    // backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1,
    maxWidth: SCREENWIDTH / 2 - 40,
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    justifyContent: 'space-around',
    margin: 5,
    flex: 0.5,
    //backgroundColor: 'pink',
  },
  itemText: {
    color: 'black',
    // fontFamily: 'Times',
  },

  listStyle : {
    paddingTop: 10,
  },
});
