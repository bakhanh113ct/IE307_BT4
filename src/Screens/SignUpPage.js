import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useState} from 'react';
import FieldInput from '../components/FieldInput';
import CustomButton from '../components/CustomButton';
import CustomTextButton from '../components/CustomTextButton';
import {useAppContext} from '../contexts/AppContext';
//20521450 - Nguyen Ba Khanh

const SignUpPage = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.pageTitle}>Create New Account</Text>
      <FieldInput
        icon={require('../../assets/user.png')}
        placeholder="Username"
        onChangeText={setName}
      />
      <FieldInput
        icon={require('../../assets/mail.png')}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <FieldInput
        icon={require('../../assets/password.png')}
        placeholder="Enter password"
        onChangeText={setPassword}
        isPassword={true}
      />
      <FieldInput
        icon={require('../../assets/password.png')}
        placeholder="Confirm Password"
        onChangeText={setConfirm}
        isPassword={true}
      />
      <CustomButton
        text={'Sign up'}
        onPress={() => {
          if (password == confirm && password != '') {
            // setIsAuthenticated(true);
            // setUser({
            //   email: email,
            //   password: password,
            // });
          } else alert('check password again!');
        }}
      />
      <View style={{flexDirection: 'row', paddingTop: 30}}>
        <Text>Already have an account? </Text>
        <CustomTextButton
          text={'Login now!'}
          onPress={() => {
            navigation.navigate('Login');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 30,
    flex: 1,
    paddingTop: 70,
    backgroundColor: '#fff',
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  pageTitle: {
    paddingTop: 8,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 23,
  },
  forgotPassword: {alignSelf: 'flex-end', color: '#ff70c2', paddingTop: 5},
  loginButton: {
    marginTop: 16,
    alignItems: 'center',
    backgroundColor: '#e77105',
    padding: 10,
    height: 50,
    width: '100%',
    borderRadius: 10,
  },
  loginButtonText: {
    alignSelf: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    color: '#fff',
  },
  orLoginWith: {
    color: '#000',
    fontSize: 18,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  iconSocial: {height: 45, width: 45},
});

export default SignUpPage;
