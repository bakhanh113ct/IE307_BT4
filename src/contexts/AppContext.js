import React, {createContext, useContext, useState, useEffect} from 'react';
import {Alert} from 'react-native';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';
import 'core-js/stable/atob';
//20521450-NguyenBaKhanh

const AppContext = createContext(true);

export const useAppContext = () => {
  return useContext(AppContext);
};

const AppProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});

  const login = (username, password) => {
    axios
      .post('https://fakestoreapi.com/auth/login', {
        username: username,
        password: password,
      })
      .then(function (response) {
        setToken(response.data.token);
        setIsAuthenticated(true);
        // console.log(token);
        const decoded = jwtDecode(response.data.token);
        const temp = [];

        Promise.all([
          fetch(`https://fakestoreapi.com/carts/user/${decoded.sub}`)
            .then(res => res.json())
            .then(async json => {
              for (var i = 0; i < json[0].products.length; i++) {
                const response = await fetch(
                  `https://fakestoreapi.com/products/${json[0].products[i].productId}`,
                );

                const product = await response.json();
                product.count = json[0].products[i].quantity;
                temp.push(product);
              }
            })
            .then(() => {
              setCart([...temp]);
            }),

          fetch(`https://fakestoreapi.com/users/${decoded.sub}`)
            .then(res => res.json())
            .then(json => {
              setUser(json);
            }),
        ]);
      })
      .catch(function (error) {
        Alert.alert('Incorrect email or password');
      });
  };
  const logout = () => {
    setIsAuthenticated(false);
    setUser({});
    setCart([]);
  };

  const addToCart = item => {
    const exist = cart.find(x => x.id === item.id);
    if (exist) {
      Alert.alert('Message', 'Product is already in your cart');
      return;
    }
    setCart([item, ...cart]);
  };

  const updateCountForCartItem = (
    item,
    isIncrease,
    setModalVisible,
    setCurrentItem,
  ) => {
    var index = cart.indexOf(item);
    if (isIncrease) {
      cart[index].count++;
    } else {
      if (cart[index].count > 1) {
        cart[index].count--;
      } else {
        setModalVisible(true);
        setCurrentItem(item);
        // deleteItemFromCart(item);
      }
    }
    setCart([...cart]);
  };

  const deleteItemFromCart = item => {
    var index = cart.indexOf(item);

    if (index > -1) {
      cart.splice(index, 1);
    }
    setCart([...cart]);
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        login,
        logout,
        cart,
        addToCart,
        deleteItemFromCart,
        updateCountForCartItem,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
