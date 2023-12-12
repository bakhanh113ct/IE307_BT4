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
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [token, setToken] = useState('');
  const [user, setUser] = useState({
    email: 'john@gmail.com',
    password: 'm38rmF$',
  });

  const login = (username, password) => {
    if (username === user.email && password === user.password) {
      axios
        .post('https://fakestoreapi.com/auth/login', {
          username: 'johnd',
          password: 'm38rmF$',
        })
        .then(function (response) {
          setToken(response.data.token);
          const decoded = jwtDecode(response.data.token);
          // setUser({
          //   ...user,
          //   id: decoded.sub,
          // });

          fetch(`https://fakestoreapi.com/users/${decoded.sub}`)
            .then(res => res.json())
            .then(json => {
              setUser({
                ...user,
                id: decoded.sub,
                username: json.username,
                name: json.name.firstname + ' ' + json.name.lastname,
                email: json.email,
                phone: json.phone,
                address:
                  json.address.number +
                  ', ' +
                  json.address.street +
                  ', ' +
                  json.address.city,
              });
              console.log(user);
            });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      Alert.alert('Incorrect email or password1');
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
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
