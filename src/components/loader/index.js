import React, {useContext} from 'react';
import {ActivityIndicator, View, Dimensions, Platform} from 'react-native';
import {colors} from '../../utils';
import {styles} from './styles';

const {height, width} = Dimensions.get('window');

const Loader = () => {
  const loading = false;

  return loading ? (
    <View style={styles.loaderContainer}>
      <View style={styles.indicator}>
        <ActivityIndicator
          size="large"
          animating={loading}
          color={color.WHITE}
          style={{
            left: Platform.OS === 'ios' ? 1.3 : 0,
            top: Platform.OS === 'ios' ? 1 : 0,
          }}
        />
      </View>
    </View>
  ) : null;
};

export default Loader;
