import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
//20521450 - Nguyen Ba Khanh

const CustomMultipleLineInput = ({isDarkTheme, feedback, setFeedback}) => {
  return (
    <TextInput
      style={isDarkTheme ? styles.inputDark : styles.input}
      onChangeText={value => {
        setFeedback(value);
      }}
      value={feedback}
      editable
      numberOfLines={4}
      multiline
      placeholder="Your feedback here..."
      placeholderTextColor={isDarkTheme ? '#fff' : '#000'}
      keyboardType="ascii-capable"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 100,
    width: '100%',
    margin: 12,
    borderWidth: 0.2,
    padding: 10,
    textAlignVertical: 'top',
    color: '#000',
  },
  inputDark: {
    height: 100,
    width: '100%',
    margin: 12,
    borderWidth: 0.2,
    padding: 10,
    textAlignVertical: 'top',
    borderColor: '#fff',
    color: '#fff',
  },
});

export default CustomMultipleLineInput;
