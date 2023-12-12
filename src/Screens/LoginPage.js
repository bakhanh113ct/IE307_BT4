import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Icon,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import FieldInput from '../components/FieldInput';
// import {UserContext} from '../App';
import CustomButton from '../components/CustomButton';
import SocialLogin from '../components/SocialLogin';
import CustomTextButton from '../components/CustomTextButton';
import {useAppContext} from '../contexts/AppContext';
//20521450 - Nguyen Ba Khanh

const LoginPage = ({navigation}) => {
  const {login, isAuthenticated, setIsAuthenticated} = useAppContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    // <View></View>
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={require('../../assets/tiny_logo.png')}
      />
      <Text style={styles.pageTitle}>Welcome</Text>
      <FieldInput
        icon={require('../../assets/mail.png')}
        placeholder="Email"
        onChangeText={setEmail}
      />
      <FieldInput
        onChangeText={setPassword}
        icon={require('../../assets/password.png')}
        placeholder="Password"
        isPassword={true}
      />
      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <CustomButton
        text={'Create'}
        onPress={() => {
          login(email, password);
        }}
      />
      <Text style={styles.orLoginWith}>Or login with</Text>
      <SocialLogin />
      {/* <View style={{flexDirection: 'row', paddingTop: 30}}>
        <Text>Don't have an account? </Text>
        <CustomTextButton
          onPress={() => {
            // navigation.navigate('Signup');
          }}
          text={'Sign up here!'}
        />
      </View> */}
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
  orLoginWith: {
    color: '#000',
    fontSize: 18,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  signUpHere: {color: '#0301ee', fontWeight: 'bold', padding: 0},
});

export default LoginPage;
