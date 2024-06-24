import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  FlatList,
  ListRenderItem,
  ImageProps,
  Image,
} from 'react-native';
import Header from '../components/Header';
import {Colors} from '../constants/Colors';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import Button from '../components/Button';
import Background from '../components/Background';
import Surfing from '../assets/images/surfing.png';
import {FONTS} from '../constants/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
import Maui from '../assets/images/maui.png';
import Kauai from '../assets/images/kauai.png';
import Honolulu from '../assets/images/honolulu.png';
import TravelGuide from '../components/TravelGuide';

type ItemType = {
  id: number;
  title: string;
  image: ImageProps;
};

const DATA = [
  {
    id: 1,
    title: 'Maui',
    image: Maui,
  },
  {
    id: 2,
    title: 'Kauai',
    image: Kauai,
  },
  {
    id: 3,
    title: 'Honolulu',
    image: Honolulu,
  },
];

const SurfingScreen = () => {
  const renderItem: ListRenderItem<ItemType> = ({item, index}) => {
    return (
      <View style={styles.renderContainer}>
        <Text style={styles.renderTitleText}>
          {item.id}. {item.title}
        </Text>
        <Image source={item.image} style={styles.renderImage} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Header />
        <Background
          image={Surfing}
          title="Surfing"
          height={heightPercentage(30)}
        />
        <View style={styles.contentView}>
          <Text style={styles.detailsText}>
            Hawaii is the capital of modern surfing. This group of Pacific
            islands gets swell from all directions, so there are plenty of
            pristine surf spots for all.
          </Text>
          <Text style={styles.titleText}>Top spots</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            contentContainerStyle={styles.renderContentStyle}
          />
        </View>
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
  contentView: {
    backgroundColor: Colors.white,
    paddingHorizontal: widthPercentage(3),
    paddingVertical: heightPercentage(5),
  },
  detailsText: {
    color: Colors.dark,
    fontFamily: FONTS.Regular,
    fontSize: RFValue(14),
  },
  titleText: {
    fontFamily: FONTS.Bold,
    color: Colors.dark,
    fontSize: RFValue(14),
    marginTop: heightPercentage(3),
  },
  renderContentStyle: {
    gap: heightPercentage(2),
    paddingHorizontal: widthPercentage(2),
    paddingVertical: heightPercentage(2),
  },
  renderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Colors.white,
    shadowColor: Colors.green,
    elevation: 2,
    alignItems: 'center',
    paddingLeft: widthPercentage(5),
    borderRadius: 8,
  },
  renderTitleText: {
    fontFamily: FONTS.Bold,
    color: Colors.green,
    fontSize: RFValue(14),
  },
  renderImage: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    resizeMode: 'contain',
  },
});

export default SurfingScreen;
