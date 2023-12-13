import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
//20521450 - Nguyen Ba Khanh

const FieldInput = ({icon, placeholder, onChangeText, isPassword = false}) => {
  return (
    <View style={styles.passwordContainer}>
      <Image source={icon} style={styles.inputIcon} />
      <TextInput
        style={styles.inputStyle}
        secureTextEntry={isPassword}
        placeholder={placeholder}
        keyboardType={!isPassword ? 'email-address' : 'default'}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    marginTop: 20,
    paddingLeft: 10,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
  },
  inputStyle: {
    flex: 1,
  },
  inputIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
    marginRight: 10,
    tintColor: '#ccc',
  },
});

export default FieldInput;
