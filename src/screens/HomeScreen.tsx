import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import Background from '../components/Background';
import BackImage from '../assets/images/background.png';
import {heightPercentage} from '../utils/Scalling';
import {Colors} from '../constants/Colors';
import Highlights from '../components/Highlights';
import Button from '../components/Button';
import Categories from '../components/Categories';
import TravelGuide from '../components/TravelGuide';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Header />
        <Background
          image={BackImage}
          title={`Welcome${'\n'}to Hawaii`}
          height={heightPercentage(60)}
        />
        <Highlights />
        <Categories />
        <TravelGuide />
      </ScrollView>
      <Button />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light_green,
    flex: 1,
  },
  contentContainerStyle: {
    paddingBottom: heightPercentage(10),
  },
});

export default HomeScreen;
