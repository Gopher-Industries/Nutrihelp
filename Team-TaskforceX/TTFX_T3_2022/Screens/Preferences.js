import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigator/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import { selected_items_diet } from './DietryRequirements';
import { selected_items_allergy } from './Allergies';
import { selected_items_dislikes } from './Dislikes';
import { selected_items_health } from './HealthConditions';

// const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;
const DIET_DATA = selected_items_diet;

const ALLERGY_DATA = selected_items_allergy;

const DISLIKES_DATA = selected_items_dislikes;

const HEALTH_DATA = selected_items_health;

// next trim need to get values from the previous pages and output it here.
const ConfirmPrefScreen = () => {
  const navigation = useNavigation();

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
        <Text style={styles.title}>Your preferences</Text>
      </View>
      <View>
        <Text style={styles.text}>Please confirm your selections</Text>
      </View>
      <View style={styles.columnView}>
        
          <Text style={styles.preference}>Special dietary requirement</Text>
          <View>
          <FlatList
        data={DIET_DATA}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <TouchableOpacity>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
      
      />
      </View>
          <Text style={styles.preference}>Allergies</Text>
          <View>
          <FlatList
        data={ALLERGY_DATA}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <TouchableOpacity>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}/>
        </View>
          <Text style={styles.preference}>Dislikes</Text>
          <View>
          <FlatList
        data={DISLIKES_DATA}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <TouchableOpacity>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
        />
        </View>
          <Text style={styles.preference}>Health Conditions</Text>
          <View>
          <FlatList
        data={HEALTH_DATA}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.item}>
            <TouchableOpacity>
              <Text style={styles.itemText}>{item.title}</Text>
            </TouchableOpacity>
          </View>
        )}
        />
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('NutritionalReport')}
          accessibilityLabel="Confirm your preference selection">
          <Text style={styles.buttonText}>Confirm Choices</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.altButton}
          onPress={() => navigation.navigate('DietryRequirements')}
          accessibilityLabel="Redo your preference selection">
          <Text style={styles.altButtonText}>Redo</Text>
        </TouchableOpacity>
        </View></View>
    </SafeAreaView>
  );
};

export default ConfirmPrefScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
    fontSize: 150,
    textAlign: 'left',
  },
  title: {
    fontSize: 25,
    color: 'black',
    marginBottom: 20,
    marginTop: 20,
    // paddingBottom: 10,
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
  },
  preference: {
    fontWeight: 'bold',
    fontSize: 18,
    paddingTop: 5,
    paddingBottom: 5,
  },
  button: {
    backgroundColor: '#8d71ad',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    top: 10,
  },

  altButton: {
    backgroundColor: 'white',
    height: 55,
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'gray',
    top: 10,
    margin: 10,
  },

  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },

  altButtonText: {
    fontSize: 18,
    color: '#8d71ad',
    fontWeight: 'bold',
    top: 0,
    alignSelf: 'center',
    padding: 10,
  },
  columnView: {
    // flex: 1,
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // alignItems: 'flex-start',
  },

  // item: {
  //   width: '50%',
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'flex-start',
  // }
  item: {
    marginTop: 10,
    // backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 1,
    maxWidth: SCREENWIDTH / 2 - 40,
    padding: 8,
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
