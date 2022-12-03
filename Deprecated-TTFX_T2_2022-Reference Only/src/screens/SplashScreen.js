import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const SplashScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <ImageBackground
        source={require('../assets/images/square-logo-blue-text-black.png')}
        style={styles.image}>
        <Text style={styles.header}>NutriHelp</Text>

        <View style={styles.textContainer}>
          <Text style={styles.text}>
            Nutrihelp supports you in managing your general wellbeing,
            nutrient-related diseases and deficiencies through personalized
            nutrition advice.
          </Text>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#8d71ad'}]}
            // //testing for now, go to Confirm Screen
            onPress={() => navigation.navigate('CreateAccountScreen')}>
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.altButton}
            onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={styles.altButtonText}>I already have an account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.termButton}
            onPress={() => navigation.navigate('TermScreen')}>
            <Text style={{textDecorationLine: 'underline'}}>
              Terms of Service
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  image: {
    // height: SCREENHEIGHT,
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },

  header: {
    fontSize: 40,
    color: 'black',
    padding: 30,
    top: SCREENHEIGHT / 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  textContainer: {
    width: SCREENWIDTH,
    height: SCREENHEIGHT - SCREENHEIGHT / 3,
    backgroundColor: 'white',
    marginTop: SCREENHEIGHT / 3,
  },

  text: {
    //fontFamily: 'Calibri',
    fontSize: 18,
    color: 'black',
    fontFamily: 'Calibri',
    justifyContent: 'center',
    padding: 20,
    paddingLeft: 30,
    paddingRight: 30,
    textAlign: 'center',
  },

  button: {
    backgroundColor: '#8d71ad',
    width: '80%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    top: 10,
  },

  altButton: {
    backgroundColor: 'white',
    width: '80%',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 15,
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

  termButton: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
});
