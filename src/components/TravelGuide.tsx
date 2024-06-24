import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import {FONTS} from '../constants/Fonts';
import {Colors} from '../constants/Colors';
import {RFValue} from 'react-native-responsive-fontsize';
import Profile from '../assets/images/profile.png';

const TravelGuide = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Travel Guide</Text>
      <View style={styles.cardContainer}>
        <View style={styles.contentView}>
          <View>
            <Text style={styles.guideNameText}>Hadwin Malone</Text>
            <Text style={styles.timeText}>Guide since 2012</Text>
          </View>
          <Image source={Profile} />
        </View>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactText}>Contanct</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: widthPercentage(3),
    paddingTop: heightPercentage(2),
  },
  titleText: {
    fontFamily: FONTS.Bold,
    color: Colors.dark,
    fontSize: RFValue(14),
    marginBottom: heightPercentage(2),
  },
  cardContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: widthPercentage(5),
    paddingVertical: heightPercentage(2),
    borderRadius: 8,
  },
  contentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  guideNameText: {
    fontFamily: FONTS.Bold,
    color: Colors.dark,
    fontSize: RFValue(22),
  },
  timeText: {
    fontFamily: FONTS.Medium,
    color: Colors.dark,
    fontSize: RFValue(14),
  },
  contactButton: {
    borderColor: Colors.green,
    borderWidth: 1,
    maxWidth: widthPercentage(35),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingVertical: heightPercentage(0.7),
    marginTop: heightPercentage(2),
  },
  contactText: {
    fontFamily: FONTS.Bold,
    color: Colors.green,
    fontSize: RFValue(14),
  },
});

export default TravelGuide;
