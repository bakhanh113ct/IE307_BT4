import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppContext} from '../contexts/AppContext';
import Colors from '../utils/Colors';
import ProductItem from '../components/ProductItem';
//20521450-NguyenBaKhanh

const HomeScreen = ({navigation}) => {
  const [hotDeals, setHotDeals] = useState([]);
  const [newArrivals, setNewArrivals] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
        <Image source={require('../../assets/band.jpg')} style={styles.band} />
        <Text
          style={styles.hotDeals}
          onPress={() => {
            // navigation.navigate('ProductDetail');
          }}>
          Hot Deals
        </Text>
        {/* <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => {
          console.log(item);
          return <ProductItem item={item} />;
        }}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
      /> */}
        <FlatList
          scrollEnabled={false}
          data={hotDeals}
          numColumns={2}
          renderItem={({item}) => <ProductItem item={item} />}
        />
        <Text style={styles.hotDeals}>New Arrivals</Text>
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
  hotDeals: {
    paddingVertical: 16,
    fontSize: 22,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
