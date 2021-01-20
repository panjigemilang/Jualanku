import React, {useLayoutEffect} from 'react';
import {Text, SafeAreaView, Button, Alert} from 'react-native';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import {colors} from '../../utils';

export default function Dashboard({navigation}) {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Dashboard',
      headerRight: () => (
        <SimpleLineIcon
          name="logout"
          size={20}
          color={colors.WHITE}
          onPress={logout}
        />
      ),
      headerRightContainerStyle: {
        paddingRight: 16,
      },
    });
  }, [navigation]);

  const logout = () => {
    return Alert.alert('Logout', 'Do you want to logout?', [
      {
        text: 'Yes',
        onPress: () => {
          alert('Logged out');
        },
      },
      {
        text: 'No',
      },
    ]);
  };

  return (
    <SafeAreaView>
      <Text>Dashboard</Text>
    </SafeAreaView>
  );
}
