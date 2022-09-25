import React, {useState} from 'react';
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
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import SearchBar from '../assets/components/SearchBar.js';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const DATA = [
  {id: '1', title: 'None'},
  {id: '2', title: 'Vegetarian'},
  {id: '3', title: 'Vegan'},
  {id: '4', title: 'Keto'},
  {id: '5', title: 'Pescetarian'},
  {id: '6', title: 'Low Carb'},
  {id: '7', title: 'Test'},
];

const DislikesScreen = () => {
  const navigation = useNavigation();
  const [selectedId, setSelectedId] = useState(null);
  //   const [diet, setDiet] = useState("")

  // trialing out pressable instead of touchable
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
      <SearchBar />
      <Text style={styles.text}>Most Common</Text>
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Pressable onPress={() => alert('Pressed')}>
              <Text style={styles.itemText}>{item.title}</Text>
            </Pressable>
            {/* <Text style={styles.itemText}>{item.title}</Text> */}
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

export default DislikesScreen;

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
  },
  itemText: {
    color: 'black',
    // fontFamily: 'Times',
  },
});
