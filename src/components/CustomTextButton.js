import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Button} from '@rneui/themed';

//20521450 - Nguyen Ba Khanh

const CustomTextButton = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.signUpHere}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  signUpHere: {color: '#1314d9', fontWeight: 'bold', padding: 0},
});
export default CustomTextButton;
