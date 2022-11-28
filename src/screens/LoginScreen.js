import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Icon
        name="arrow-left"
        size={20}
        color="black"
        type="entypo"
        onPress={() => navigation.goBack()}
      />
      <View>
        <Text style={styles.title}>Login</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email address"
          placeholderTextColor="gray"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>

      <TouchableOpacity>
        <View
          styles={{
            backgroundColor: 'green',
            borderWidth: 1,
            borderColor: 'black',
          }}>
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Tabs')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
        <View>
          <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
        </View>
        <View style={{flex: 1, height: 1, backgroundColor: 'gray'}} />
      </View>
      <View>
        <TouchableOpacity
          style={styles.altButton}
          onPress={() => alert('Setup TBC')}>
          <Text style={styles.altButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 30,
  },

  title: {
    fontSize: 25,
    color: 'black',
    marginBottom: 20,
    marginTop: 20,
  },

  inputView: {
    borderRadius: 5,
    borderColor: 'black',
    height: 60,
    marginBottom: 20,
    borderWidth: 1,
  },

  TextInput: {
    height: 50,
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
  },

  forgot_button: {
    height: 30,
    marginBottom: 30,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },

  button: {
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8d71ad',
    margin: 10,
  },

  altButton: {
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },

  altButtonText: {
    fontWeight: 'bold',
    color: '#8d71ad',
    fontSize: 18,
  },
});
