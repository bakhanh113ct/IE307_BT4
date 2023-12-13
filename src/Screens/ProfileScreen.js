import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import UserInfoItem from '../components/UserInfoItem';
import {useAppContext} from '../contexts/AppContext';
import {useNavigation} from '@react-navigation/native';
//20521450 - Nguyen Ba Khanh
const ProfileScreen = () => {
  const {user, logout} = useAppContext();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerInfo}>
        <View style={styles.avatar_name}>
          <Image
            style={styles.circleImage}
            source={{
              uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
            }}
          />
          <Text style={styles.nameHeader}>{`${
            user.name !== undefined ? user.name.firstname : ''
          } ${user.name !== undefined ? user.name.lastname : ''}`}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.push('EditProfile');
          }}>
          <Icon name={'edit'} size={25} color={'black'} />
        </TouchableOpacity>
      </View>
      <UserInfoItem
        title="Name:"
        value={`${user.name !== undefined ? user.name.firstname : ''} ${
          user.name !== undefined ? user.name.lastname : ''
        }`}
      />
      <UserInfoItem title="User name:" value={user.username} />
      <UserInfoItem title="Email:" value={user.email} />
      <UserInfoItem title="Phone:" value={user.phone} />
      <UserInfoItem
        title="Address:"
        value={
          user.address !== undefined
            ? user.address.number +
              ', ' +
              user.address.street +
              ', ' +
              user.address.city
            : ''
        }
      />
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={logout}>
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 15,
  },
  circleImage: {width: 80, height: 80, borderRadius: 80 / 2, marginRight: 10},
  headerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  nameHeader: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
  avatar_name: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    elevation: 2,
    alignItems: 'center',
  },
  buttonOpen: {
    backgroundColor: '#2196f3',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
