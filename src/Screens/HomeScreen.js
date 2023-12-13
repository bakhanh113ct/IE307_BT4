import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ProductItem from '../components/ProductItem';
import Carousel from 'react-native-reanimated-carousel';
//20521450-NguyenBaKhanh

const data = [
  {
    id: 1,
    imgUrl:
      'https://img.freepik.com/free-vector/flat-design-minimal-boutique-sale-background_23-2149337460.jpg',
  },
  {
    id: 2,
    imgUrl:
      'https://img.freepik.com/free-vector/fashion-sale-with-discount-template_23-2148936503.jpg',
  },
  {
    id: 3,
    imgUrl:
      'https://img.freepik.com/free-vector/flat-spring-social-media-post-template_23-2149291888.jpg?size=626&ext=jpg&ga=GA1.1.595140955.1702472472&semt=ais',
  },
  {
    id: 4,
    imgUrl:
      'https://img.freepik.com/free-vector/flat-geometric-fashion-youtube-thumbnail_23-2148918593.jpg?size=626&ext=jpg&ga=GA1.1.595140955.1702472472&semt=ais',
  },
  {
    id: 5,
    imgUrl:
      'https://img.freepik.com/free-psd/summer-sale-70-discount_23-2148476960.jpg?size=626&ext=jpg&ga=GA1.1.595140955.1702472472&semt=ais',
  },
];

const HomeScreen = ({navigation}) => {
  const [hotDeals, setHotDeals] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const width = Dimensions.get('window').width;

  useEffect(() => {
    Promise.all([
      fetch('https://fakestoreapi.com/products?limit=10')
        .then(res => res.json())
        .then(json => {
          setHotDeals(json);
        }),

      fetch('https://fakestoreapi.com/products?limit=10')
        .then(res => res.json())
        .then(json => {
          setNewArrivals(json);
        }),
    ]).then(() => {
      setIsLoaded(true);
    });
  }, []);

  return !isLoaded ? (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator size="large" />
    </View>
  ) : (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.homeTitle}>Shop for quality, Shop for style</Text>
        <Carousel
          loop
          width={width}
          height={150}
          autoPlay={true}
          data={[...new Array(data.length).keys()]}
          scrollAnimationDuration={1000}
          renderItem={({index}) => (
            <Image source={{uri: `${data[index].imgUrl}`}} style={styles.img} />
          )}
        />
        <View style={styles.sessionContainer}>
          <Text style={styles.hotDeals}>Hot Deals </Text>
          <Image
            source={require('../../assets/hot-deal.png')}
            style={styles.sessionImage}
          />
        </View>
        <FlatList
          scrollEnabled={false}
          data={hotDeals}
          numColumns={2}
          renderItem={({item}) => <ProductItem item={item} />}
        />
        <View style={styles.sessionContainer}>
          <Text style={styles.hotDeals}>New Arrivals </Text>
          <Image
            source={require('../../assets/medal.png')}
            style={styles.sessionImage}
          />
        </View>
        <FlatList
          scrollEnabled={false}
          data={newArrivals}
          numColumns={2}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 4,
  },
  homeTitle: {
    color: '#ae0537',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    fontStyle: 'italic',
    paddingVertical: 8,
  },
  band: {
    alignSelf: 'center',
  },
  sessionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionImage: {
    height: 30,
    width: 30,
  },
  hotDeals: {
    paddingVertical: 16,
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: 150,
  },
});

export default HomeScreen;
