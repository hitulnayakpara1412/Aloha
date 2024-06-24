import React, {FC} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ImageProps,
} from 'react-native';
import {heightPercentage, screenWidth} from '../utils/Scalling';
import {FONTS} from '../constants/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  image: ImageProps;
  height: number;
  title: string;
}

const Background: FC<Props> = ({image, height, title}) => {
  return (
    <ImageBackground
      source={image}
      style={[
        styles.container,
        {height: height ? height : heightPercentage(60)},
      ]}>
      <Text style={styles.titleText}>{title}</Text>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 255, 255, 0.9)']}
        start={{x: 0.5, y: 0}}
        end={{x: 0.5, y: 1}}
        style={[StyleSheet.absoluteFill, {zIndex: -1, opacity: 1}]}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontFamily: FONTS.SemiBold,
    fontSize: RFValue(50),
    textAlign: 'center',
  },
});

export default Background;
