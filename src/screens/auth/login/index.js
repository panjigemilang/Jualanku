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
import {colors} from '../../../utils';

export default function Login({navigation}) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const {username, password} = credentials;
  const [showPassword, setShowPassword] = useState(false);

  const inputChange = (key, val) => {
    setCredentials({
      ...credentials,
      [key]: val,
    });
  };

  const onSubmit = () => {
    if (!username) alert('Username is required!');
    else if (!password) alert('Password is required!');
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
        <Icon name="user" size={24} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="rgba(219, 221, 222, .7)"
          underlineColorAndroid="transparent"
          onChangeText={(username) => inputChange('username', username)}
          value={credentials.username}
        />
      </View>
      <View>
        <Feather name="key" size={24} style={styles.inputIcon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="rgba(219, 221, 222, .7)"
          underlineColorAndroid="transparent"
          secureTextEntry={!showPassword}
          onChangeText={(password) => inputChange('password', password)}
          value={credentials.password}
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
      <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.text}>
        Doesn't have an account?{' '}
        <Text
          style={styles.register}
          onPress={() => navigation.navigate('Register')}>
          Register Here!
        </Text>
      </Text>
    </ImageBackground>
  );
}
