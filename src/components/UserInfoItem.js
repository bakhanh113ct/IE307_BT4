import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//20521450 - Nguyen Ba Khanh

const UserInfoItem = ({title, value}) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.blackColor]}>{title}</Text>
      <Text style={[styles.value, styles.blackColor]}>{value}</Text>
    </View>
  );
};

export default UserInfoItem;

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  blackColor: {
    color: 'black',
  },
});
