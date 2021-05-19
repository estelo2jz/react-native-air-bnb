import React from 'react';
import {View, ImageBackground} from 'react-native';

import styles from './styles';

const HomeScreen = (props) => {
  return (
    <View>
      {/* Search Bar */}
      <ImageBackground 
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image} 
      />
      {/* Title */}
      {/* Button */}
    </View>
  )
}

export default HomeScreen;
