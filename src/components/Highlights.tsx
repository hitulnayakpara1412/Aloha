import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ListRenderItem,
  ImageProps,
} from 'react-native';
import React, {ReactNode} from 'react';
import {Colors} from '../constants/Colors';
import {FONTS} from '../constants/Fonts';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import {RFValue} from 'react-native-responsive-fontsize';
import Surfing from '../assets/images/surfing.png';
import Hula from '../assets/images/hula.png';
import Vulcano from '../assets/images/vulcano.png';
import Arrow from '../assets/images/right_arrow.png';
import {navigate} from '../utils/NavigationUtil';

type ItemType = {
  id: number;
  image: ImageProps;
  title: string;
  desc: string;
};

const DATA = [
  {
    id: 1,
    title: 'Surfing',
    desc: 'Best Hawaiian islands for surfing.',
    image: Surfing,
  },
  {
    id: 2,
    title: 'Hula',
    desc: 'Try it yourself.',
    image: Hula,
  },
  {
    id: 3,
    title: 'Vulcanoes',
    desc: 'Volcanic conditions can change at any time.',
    image: Vulcano,
  },
];

const Highlights = () => {
  const renderItem: ListRenderItem<ItemType> = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.renderContainer}
        onPress={() => {
          if (item.title === 'Surfing') {
            navigate('SurfingScreen');
          }
        }}>
        <Image source={item.image} style={styles.renderImage} />
        <View style={styles.renderContentView}>
          <Text style={styles.contentTitleText}>{item.title}</Text>
          <Text style={styles.contentDescText}>{item.desc}</Text>
          <View style={styles.arrowView}>
            <Image source={Arrow} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Highlights</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    paddingVertical: heightPercentage(3),
  },
  titleText: {
    fontFamily: FONTS.Bold,
    color: Colors.dark,
    marginLeft: widthPercentage(3),
    fontSize: RFValue(14),
  },
  contentContainerStyle: {
    paddingHorizontal: widthPercentage(3),
    gap: widthPercentage(5),
    paddingVertical: heightPercentage(2),
  },
  renderContainer: {
    borderRadius: 8,
    maxWidth: widthPercentage(75),
    shadowColor: Colors.dark,
    elevation: 1,
    backgroundColor: Colors.white,
  },
  renderImage: {
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    resizeMode: 'contain',
  },
  renderContentView: {
    paddingHorizontal: widthPercentage(5),
    paddingVertical: heightPercentage(2),
    flex: 1,
  },
  contentTitleText: {
    color: Colors.green,
    fontFamily: FONTS.Bold,
    fontSize: RFValue(20),
  },
  contentDescText: {
    color: Colors.dark,
    fontFamily: FONTS.Medium,
    fontSize: RFValue(14),
    marginTop: heightPercentage(1),
    flex: 1,
  },
  arrowView: {
    width: heightPercentage(5),
    height: heightPercentage(5),
    backgroundColor: Colors.light_green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: heightPercentage(3),
    alignSelf: 'flex-end',
  },
});

export default Highlights;
