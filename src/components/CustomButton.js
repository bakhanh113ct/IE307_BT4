import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
//20521450 - Nguyen Ba Khanh

const CustomButton = ({text, onPress}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        onPress();
      }}
      style={styles.loginButton}>
      <Text style={styles.loginButtonText}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: '#e77105',
    padding: 10,
    height: 50,
    width: '100%',
    borderRadius: 10,
  },
  loginButtonText: {
    alignSelf: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
  },
});

export default CustomButton;
