import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../contexts/AppContext';
//20521450 - Nguyen Ba Khanh

const CartItem = ({item, setModalVisible, setCurrentItem}) => {
  const {updateCountForCartItem} = useAppContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.infoContainer}>
        <Image src={item.image} style={styles.image} />
        <View>
          <Text style={styles.price}>${item.price}</Text>
          <View style={styles.numberContainer}>
            <TouchableOpacity
              onPress={() => {
                updateCountForCartItem(
                  item,
                  false,
                  setModalVisible,
                  setCurrentItem,
                );
              }}>
              <Icon name="remove-sharp" size={14} color="#000" />
            </TouchableOpacity>
            <Text style={styles.amount}>{item.count}</Text>
            <TouchableOpacity
              onPress={() => {
                updateCountForCartItem(item, true);
              }}>
              <Icon name="add" size={14} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.total}>
          Total: ${(item.price * item.count).toFixed(2)}
        </Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
            setCurrentItem(item);
            // deleteItemFromCart(item);
          }}>
          <Icon name="trash" size={20} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 140,
    borderRadius: 16,
    borderColor: '#ccc',
    borderWidth: 0.7,
    marginHorizontal: 10,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 8,
    justifyContent: 'space-between',
  },
  title: {fontSize: 15, color: '#000'},
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberContainer: {
    paddingTop: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    height: 70,
    width: 60,
  },
  amount: {
    color: '#000',
    paddingHorizontal: 8,
    fontSize: 15,
  },
  total: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
