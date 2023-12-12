import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppContext} from '../contexts/AppContext';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from '../utils/Colors';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CategoryScreen from './CategoryScreen';
import CartScreen from './CartScreen';

const Tab = createBottomTabNavigator();

const MainTab = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focus, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Categories':
              iconName = 'grid';
              break;
            case 'Cart':
              iconName = 'cart';
              break;
            case 'Profile':
              iconName = 'settings';
              break;
            default:
              iconName = 'home';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#679dda',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoryScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitleAlign: 'center',
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
