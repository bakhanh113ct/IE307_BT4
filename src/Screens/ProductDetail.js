import {View, Text, Image, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
//20521450 - Nguyen Ba Khanh

const ProductDetail = ({route}) => {
  const navigation = useNavigation();
  const item = route.params.item;

  useEffect(() => {
    navigation.setOptions({title: item.title});
  });
  return (
    <View style={styles.container}>
      <Image src={item.image} style={styles.image} resizeMode="cover" />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>Price: ${item.price}</Text>
      <View style={styles.bottomText}>
        <Text style={styles.rate}>{item.rating.rate} </Text>
        <Icon name={'star-sharp'} color="#f8d605" size={17} />
        <Text style={styles.rate}> ({item.rating.count} reviews)</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  image: {
    height: '60%',
    width: '100%',
  },
  title: {
    paddingTop: 8,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000',
  },
  description: {
    paddingVertical: 8,
  },
  price: {
    fontWeight: 'bold',
    color: '#000',
    paddingBottom: 8,
  },
  bottomText: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  rate: {
    color: '#000',
  },
});

export default ProductDetail;
