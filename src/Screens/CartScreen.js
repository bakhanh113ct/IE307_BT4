import {
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CartItem from '../components/CartItem';
import {useAppContext} from '../contexts/AppContext';
import MyCustomModal from '../components/MyCustomModal';
import {useNavigation} from '@react-navigation/native';

const CartScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const {cart, deleteItemFromCart} = useAppContext();
  const navigation = useNavigation();

  const onModalCancel = () => {
    setModalVisible(false);
    setCurrentItem(null);
  };
  const onOk = () => {
    deleteItemFromCart(currentItem);
    setCurrentItem(null);
    setModalVisible(false);
  };
  return cart.length === 0 ? (
    <View style={styles.emptyContainer}>
      <Text>You have no products in your cart</Text>
      <TouchableHighlight
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Shopping now!</Text>
        </View>
      </TouchableHighlight>
    </View>
  ) : (
    <View style={styles.container}>
      <MyCustomModal
        message={'Are you sure you want to delete this product'}
        modalVisible={modalVisible}
        onCancel={onModalCancel}
        onOK={onOk}
      />
      <FlatList
        style={styles.list}
        data={cart}
        renderItem={({item}) => (
          <CartItem
            item={item}
            setModalVisible={setModalVisible}
            setCurrentItem={setCurrentItem}
          />
        )}
      />
      <View style={styles.bottom}>
        <Text style={styles.totalAmount}>
          Total amount: $
          {cart
            .map(e => e.price * e.count)
            .reduce((a, b) => a + b, 0)
            .toFixed(2)}
        </Text>
        {cart.length !== 0 ? (
          <TouchableHighlight onPress={() => {}}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>checkout</Text>
            </View>
          </TouchableHighlight>
        ) : (
          <View></View>
        )}
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  bottom: {
    flexDirection: 'row',
    height: 55,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  totalAmount: {
    color: '#000',
    fontSize: 15,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#2196F3',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
