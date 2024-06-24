import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Animated} from 'react-native';
import {Colors} from '../constants/Colors';
import Logo from '../assets/images/logo.png';
import {resetAndNavigate} from '../utils/NavigationUtil';

const SplashScreen = () => {
  const scale = new Animated.Value(1);

  useEffect(() => {
    const breathingAnimation = Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.1, // Scale up
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1, // Scale down
        duration: 2000,
        useNativeDriver: true,
      }),
    ]);
    breathingAnimation.start(() => {
      resetAndNavigate('BottomTab');
    });

    return () => {
      breathingAnimation.stop();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={Logo}
        style={{transform: [{scale}], resizeMode: 'contain'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen;
