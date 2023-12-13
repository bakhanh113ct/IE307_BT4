import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../contexts/AppContext';
//20521450 - Nguyen Ba Khanh

const ProductItem = ({item}) => {
  const navigation = useNavigation();
  const {addToCart} = useAppContext();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('ProductDetail', {item});
      }}>
      <View>
        <Image src={item.image} style={styles.image} resizeMode="cover" />
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>
        <View style={styles.bottomAction}>
          <View>
            <Text style={styles.price}>${item.price}</Text>
            <View style={styles.bottomText}>
              <Text style={styles.rate}>{item.rating.rate} </Text>
              <Icon name={'star-sharp'} color="#f8d605" size={17} />
              <Text style={styles.rate}> ({item.rating.count})</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.circleButton}
            onPress={() => {
              item.count = 1;
              addToCart(item);
            }}>
            <Icon name={'add-sharp'} size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1 / 2,
    height: 220,
    textAlign: 'left',
    paddingHorizontal: 20,
  },
  image: {
    height: 120,
    width: '100%',
  },
  title: {textAlign: 'left'},
  bottomAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: '#ae0537',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  rate: {},
  bottomText: {flexDirection: 'row', alignItems: 'center'},
  circleButton: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: '#052f63',
  },
});

export default ProductItem;
