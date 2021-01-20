import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  View,
  TextInput,
} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {FormBackground, Logo} from '../../../assets';

export default function Register({navigation}) {
  const [credentials, setCredentials] = useState({
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
  });
  const {name, username, password, confirmPassword} = credentials;
  const [showPassword, setShowPassword] = useState(false);

  const inputChange = (key, val) => {
    setCredentials({
      ...credentials,
      [key]: val,
    });
  };

  const onSubmit = () => {
    if (!name) alert('Name is required!');
    else if (!username) alert('Username is required!');
    else if (!password) alert('Password is required!');
    else if (!confirmPassword || confirmPassword !== password)
      alert("Confirm password didn't match!");
  };

  return (
    <ImageBackground
      source={FormBackground}
      style={styles.backgroundContainer}
      blurRadius={1.5}>
      <View style={styles.overlay} />
      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
        <Text style={styles.logoTitle}>JUALANKU</Text>
      </View>
      <View>
        <Icon name="idcard" size={24} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="rgba(219, 221, 222, .7)"
          underlineColorAndroid="transparent"
          onChangeText={(name) => inputChange('name', name)}
          value={name}
        />
      </View>
      <View>
        <Icon name="user" size={24} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgba(219, 221, 222, .7)"
          underlineColorAndroid="transparent"
          onChangeText={(username) => inputChange('username', username)}
          value={username}
        />
      </View>
      <View>
        <Feather name="key" size={24} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(219, 221, 222, .7)"
          underlineColorAndroid="transparent"
          onChangeText={(password) => inputChange('password', password)}
          value={password}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          style={styles.inputEye}
          onPress={() => setShowPassword(!showPassword)}>
          <Feather
            name={showPassword ? 'eye' : 'eye-off'}
            size={24}
            color="rgba(255, 255, 255, .7)"
          />
        </TouchableOpacity>
      </View>
      <View>
        <Feather name="lock" size={24} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="rgba(219, 221, 222, .7)"
          underlineColorAndroid="transparent"
          onChangeText={(confirmPassword) =>
            inputChange('confirmPassword', confirmPassword)
          }
          value={confirmPassword}
          secureTextEntry={!showPassword}
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Have an account?{' '}
        <Text
          style={styles.register}
          onPress={() => navigation.navigate('Login')}>
          Login Here!
        </Text>
      </Text>
    </ImageBackground>
  );
}
