import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';

//20521450 - Nguyen Ba Khanh

const SocialLogin = () => {
  return (
    <View style={{flexDirection: 'row', paddingTop: 30}}>
      <Image
        source={require('../../assets/google.png')}
        style={styles.iconSocial}
      />
      <View style={{width: 20}} />
      <Image
        source={require('../../assets/facebook.png')}
        style={styles.iconSocial}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconSocial: {height: 45, width: 45},
});
export default SocialLogin;
