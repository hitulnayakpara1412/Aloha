import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../constants/Colors';
import Logo from '../assets/images/logo.png';
import {heightPercentage, widthPercentage} from '../utils/Scalling';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPercentage(2),
  },
  logo: {
    width: widthPercentage(40),
    height: heightPercentage(5),
    resizeMode: 'contain',
  },
});

export default Header;
