import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CategoryItem from '../components/CategoryItem';
import ProductItem from '../components/ProductItem';

const CategoryScreen = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => setCategories(['All', ...json])),
      fetch('https://fakestoreapi.com/products?limit=100')
        .then(res => res.json())
        .then(json => {
          setData(json);
        }),
    ]).then(() => {
      setIsLoaded(true);
    });
  }, []);

  const changeData = cate => {
    setIsLoaded(false);
    if (cate !== 'All') {
      fetch(`https://fakestoreapi.com/products/category/${cate}`)
        .then(res => res.json())
        .then(json => setData(json))
        .then(() => {
          setIsLoaded(true);
        });
    } else {
      fetch('https://fakestoreapi.com/products?limit=100')
        .then(res => res.json())
        .then(json => setData(json))
        .then(() => {
          setIsLoaded(true);
        });
    }
  };
  const changeSelectedCate = cate => {
    console.log(cate);
    setSelectedCategory(cate);
    changeData(cate);
  };
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.categoryList}
        data={categories}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <CategoryItem
            item={item}
            changeSelectedCate={changeSelectedCate}
            selectedCategory={selectedCategory}
          />
        )}
      />
      {isLoaded ? (
        <FlatList
          style={styles.list}
          data={data}
          numColumns={2}
          renderItem={({item}) => <ProductItem item={item} />}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, paddingTop: 8},
  categoryList: {width: '100%', height: 85, flexGrow: 0},
  list: {
    flex: 1,
  },
});

export default CategoryScreen;
