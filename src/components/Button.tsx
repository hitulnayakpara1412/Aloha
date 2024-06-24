import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import {FONTS} from '../constants/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.titleText}>Book a trip</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.green,
    position: 'absolute',
    bottom: heightPercentage(3),
    left: 0,
    right: 0,
    marginHorizontal: widthPercentage(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightPercentage(1),
    borderRadius: 8,
  },
  titleText: {
    fontFamily: FONTS.SemiBold,
    color: Colors.white,
    fontSize: RFValue(14),
  },
});

export default Button;
