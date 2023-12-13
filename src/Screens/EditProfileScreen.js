import {StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useAppContext} from '../contexts/AppContext';
import EditProfileTextInput from '../components/EditProfileTextInput';

import Icon from 'react-native-vector-icons/Feather';
import axios from 'axios';
//20521450 - Nguyen Ba Khanh

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const {user, setUser} = useAppContext();
  navigation.setOptions({
    // eslint-disable-next-line react/no-unstable-nested-components
    headerRight: () => (
      <TouchableOpacity onPress={updateUser}>
        <Icon name="check" size={25} />
      </TouchableOpacity>
    ),
  });
  const updateUser = async () => {
    const a = await axios.put(`https://fakestoreapi.com/users/${user.id}`, {
      email: email,
      username: username,
      password: 'm38rmF$',
      name: {
        firstname: firstName,
        lastname: lastName,
      },
      address: {
        city: city,
        street: street,
        number: houseNumber,
      },
      phone: phoneNumber,
    });

    setUser(a.data);
    Alert.alert('Message', 'Update user successful', [
      {
        text: 'Ok',
        onPress: () => navigation.pop(),
      },
    ]);
  };
  const [firstName, setFirstName] = useState(user.name.firstname);
  const [lastName, setLastName] = useState(user.name.lastname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const [houseNumber, setHouseNumber] = useState(user.address.number);
  const [street, setStreet] = useState(user.address.street);
  const [city, setCity] = useState(user.address.city);

  useEffect(() => {}, [user]);

  return (
    <View style={{flex: 1}}>
      <View style={[{flexDirection: 'row'}, styles.heightDefault]}>
        <EditProfileTextInput
          flex={2}
          title={'First Name'}
          value={firstName}
          setValue={setFirstName}
        />
        <EditProfileTextInput
          flex={1}
          title={'Last Name'}
          value={lastName}
          setValue={setLastName}
        />
      </View>
      <View style={styles.heightDefault}>
        <EditProfileTextInput
          flex={1}
          title={'Username'}
          value={username}
          setValue={setUsername}
        />
      </View>
      <View style={styles.heightDefault}>
        <EditProfileTextInput
          flex={1}
          title={'Email'}
          value={email}
          setValue={setEmail}
        />
      </View>
      <View style={styles.heightDefault}>
        <EditProfileTextInput
          flex={1}
          title={'Phone Number'}
          value={phoneNumber}
          setValue={setPhoneNumber}
        />
      </View>
      <View style={styles.heightDefault}>
        <EditProfileTextInput
          flex={1}
          title={'House Number'}
          value={houseNumber.toString()}
          setValue={setHouseNumber}
        />
      </View>
      <View style={styles.heightDefault}>
        <EditProfileTextInput
          flex={1}
          title={'Street'}
          value={street}
          setValue={setStreet}
        />
      </View>
      <View style={styles.heightDefault}>
        <EditProfileTextInput
          flex={1}
          title={'City'}
          value={city}
          setValue={setCity}
        />
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  input: {
    flex: 1,
    borderRadius: 6,
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
  heightDefault: {
    height: 80,
  },
});
