import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';

//20521450 - Nguyen Ba Khanh

const ListQuestion = ({feedbacks, isDarkTheme}) => {
  return (
    <FlatList
      style={{alignSelf: 'flex-start'}}
      data={feedbacks}
      renderItem={({item}) => (
        <Text
          style={isDarkTheme ? styles.questionItemDark : styles.questionItem}>
          {item}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  questionItem: {
    color: '#000',
  },
  questionItemDark: {
    color: '#fff',
  },
});

export default ListQuestion;
