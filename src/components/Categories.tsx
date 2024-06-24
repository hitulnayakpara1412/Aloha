import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ListRenderItem,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import {heightPercentage, widthPercentage} from '../utils/Scalling';
import {RFValue} from 'react-native-responsive-fontsize';
import {FONTS} from '../constants/Fonts';
import Arrow from '../assets/images/right_arrow.png';

type ItemType = {
  id: number;
  title: string;
};

const DATA = [
  {
    id: 1,
    title: 'Adventure',
  },
  {
    id: 2,
    title: 'Culinary',
  },
  {
    id: 3,
    title: 'Eco-tourism',
  },
  {
    id: 4,
    title: 'Family',
  },
  {
    id: 5,
    title: 'Sport',
  },
];

const Categories = () => {
  const renderItem: ListRenderItem<ItemType> = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.renderContainer}>
        <Text style={styles.renderText}>{item.title}</Text>
        <Image source={Arrow} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Catergories</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: heightPercentage(2),
    paddingHorizontal: widthPercentage(3),
  },
  titleText: {
    fontFamily: FONTS.Bold,
    color: Colors.dark,
    fontSize: RFValue(14),
    marginBottom: heightPercentage(2),
  },
  contentContainerStyle: {
    gap: heightPercentage(1),
  },
  renderContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: widthPercentage(5),
    paddingVertical: heightPercentage(2),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  renderText: {
    fontFamily: FONTS.Regular,
    color: Colors.dark,
    fontSize: RFValue(14),
  },
});

export default Categories;
