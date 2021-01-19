/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Alert,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

const App: () => React$Node = () => {
  console.log('Mana ini');

  const onClick = () => {
    const angka = 5;

    return Alert.alert(
      `Button with adjusted color pressed with value : ${angka}`,
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <Text style={styles.font}>Lols</Text>
        <Text style={styles.font}>Tulisannya ilang</Text>
        <Button color="#000" title="Click me" onPress={onClick} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  font: {
    fontSize: 13,
  },
});

export default App;
