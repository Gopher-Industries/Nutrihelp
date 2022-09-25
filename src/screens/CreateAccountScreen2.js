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

const CreateAccountScreen2 = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfrim, setPasswordConfirm] = useState('');

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
        <Text style={styles.title}>Create Account</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email address*"
          placeholderTextColor="gray"
          onChangeText={email => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Email Address*"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password*"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View>
        <Text style={styles.text}>Password must have...</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm Password*"
          placeholderTextColor="gray"
          secureTextEntry={true}
          onChangeText={password => setPassword(password)}
        />
      </View>
      <View>
        <Text style={styles.text}>* Mandatory information</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateProfileScreen')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreateAccountScreen2;

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

  text: {
    fontWeight: 'bold',
    paddingBottom: 10,
    color: 'green',
  },

  button: {
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#8d71ad',
    margin: 10,
  },

  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 18,
  },
});
