import * as React from 'react';
import {StatusBar} from 'expo-status-bar';
import {NavigationContainer} from '@react-navigator/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

// const SCREENHEIGHT = Dimensions.get('window').height;
// const SCREENWIDTH = Dimensions.get('window').width;

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
        <View style={styles.item}>
          <Text style={styles.preference}>Special dietary requirement</Text>
          <Text style={styles.preference}>Allergies</Text>
          <Text style={styles.preference}>Dislikes</Text>
          <Text style={styles.preference}>Health Conditions</Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('DailyNutritionPlanScreen')}
          accessibilityLabel="Confirm your preference selection">
          <Text style={styles.buttonText}>Confirm Choices</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.altButton}
          onPress={() => navigation.navigate('DietRequirementScreen')}
          accessibilityLabel="Redo your preference selection">
          <Text style={styles.altButtonText}>Redo</Text>
        </TouchableOpacity>
      </View>
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
    paddingTop: 10,
    paddingBottom: 10,
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
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },

  // item: {
  //   width: '50%',
  //   flex: 1,
  //   flexDirection: 'row',
  //   flexWrap: 'wrap',
  //   alignItems: 'flex-start',
  // }
});
