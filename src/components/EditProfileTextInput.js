import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
//20521450 - Nguyen Ba Khanh

const EditProfileTextInput = ({value, title, flex = 1, setValue}) => {
  return (
    <View style={{flex: flex, margin: 8}}>
      <Text>{title}</Text>
      <TextInput
        style={[styles.input]}
        onChangeText={text => {
          setValue(text);
        }}
        value={value}
        placeholder={title}
        keyboardType="numeric"
      />
    </View>
  );
};

export default EditProfileTextInput;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 6,
    height: 40,
    // margin: 8,
    borderWidth: 1,
    padding: 10,
  },
});
