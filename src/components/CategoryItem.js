import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const CategoryItem = ({item, changeSelectedCate, selectedCategory}) => {
  const map = new Map([
    ['All', require('../../assets/visualization.png')],
    ['electronics', require('../../assets/electronics.png')],
    ['jewelery', require('../../assets/diamond.png')],
    ["men's clothing", require('../../assets/man.png')],
    ["women's clothing", require('../../assets/girl.png')],
  ]);

  return (
    <TouchableOpacity
      onPress={() => {
        changeSelectedCate(item);
      }}>
      <View style={styles.container}>
        <Image source={map.get(item)} style={styles.image} />
        <Text style={{color: selectedCategory === item ? 'blue' : '#000'}}>
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    height: 70,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  image: {
    width: 50,
    height: 50,
  },
});
