import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppContext} from '../contexts/AppContext';
import SignUpPage from './SignUpPage';
import LoginPage from './LoginPage';
import ProfileScreen from './ProfileScreen';
import MainTab from './MainTab';
import ProductDetail from './ProductDetail';

const Stack = createNativeStackNavigator();

const MainPage = () => {
  const {isAuthenticated, login} = useAppContext();

  useEffect(() => {
    login('john@gmail.com', 'm38rmF$');
  }, []);
  return (
    <NavigationContainer>
      {isAuthenticated === false ? (
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Signup"
            component={SignUpPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="MainTab">
          <Stack.Screen
            name="MainTab"
            component={MainTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetail"
            component={ProductDetail}
            options={{headerShown: true}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default MainPage;
