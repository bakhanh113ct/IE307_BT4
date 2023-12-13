import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useAppContext} from '../contexts/AppContext';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CategoryScreen from './CategoryScreen';
import CartScreen from './CartScreen';
import {StyleSheet, View} from 'react-native';
import {Badge} from '@rneui/themed';
//20521450 - Nguyen Ba Khanh

const Tab = createBottomTabNavigator();

const MainTab = ({navigation}) => {
  const {cart} = useAppContext();
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
          if (iconName === 'cart') {
            return (
              <View style={styles.iconContainer}>
                <Icon
                  name={iconName}
                  size={size}
                  color={color}
                  style={{right: -6}}
                />
                <Badge value={cart.length} status="error" />
              </View>
            );
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
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  badge: {
    top: -10,
    left: -5,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
  },
});

export default MainTab;
