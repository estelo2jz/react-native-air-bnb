import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Post = ({title, price}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image 
        style={styles.image}
        source={{uri: "https://images.pexels.com/photos/3889990/pexels-photo-3889990.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"}}
      />

      {/* Bed & Bedroom */}
      <Text stylee={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        Entire Flat. Puerto de la cruz 
        Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
      </Text>

      {/* Old pirce & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36</Text>
        <Text style={styles.price}>  ${price}</Text>
        / night
      </Text>

      {/* Total price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  )
}

export default Post;
