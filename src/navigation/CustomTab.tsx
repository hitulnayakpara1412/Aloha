import React, {FC} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {RFValue} from 'react-native-responsive-fontsize';
import {heightPercentage} from '../utils/Scalling';
import Home from '../assets/tabicons/home.png';
import Surfing from '../assets/tabicons/surfing.png';
import Hula from '../assets/tabicons/hula.png';
import Vulcano from '../assets/tabicons/vulcano.png';
import {Colors} from '../constants/Colors';
import {FONTS} from '../constants/Fonts';

const CustomTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <View style={styles.tabContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const isFocused = state.index === index;
        let Icon;
        if (options.tabBarLabel === 'Home') {
          Icon = Home;
        } else if (options.tabBarLabel === 'Surfing') {
          Icon = Surfing;
        } else if (options.tabBarLabel === 'Hula') {
          Icon = Hula;
        } else if (options.tabBarLabel === 'Vulcano') {
          Icon = Vulcano;
        }

        const onPress = () => {
          if (route.name === 'HulaScreen' || route.name === 'VulcanoScreen') {
            Alert.alert('Under Development');
            return;
          }
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={styles.tab}>
            <Image
              source={Icon}
              style={{
                tintColor: isFocused ? Colors.green : Colors.dark,
                width: heightPercentage(3),
                height: heightPercentage(3),
              }}
            />
            <Text
              style={[
                styles.tabLabel,
                {color: isFocused ? Colors.green : Colors.dark},
              ]}>
              {options.tabBarLabel}
            </Text>
            {isFocused && <View style={styles.bottomLine} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: heightPercentage(8),
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
  },
  tabLabel: {
    fontFamily: FONTS.SemiBold,
    fontSize: RFValue(10),
  },
  bottomLine: {
    position: 'absolute',
    bottom: 0,
    height: 3,
    width: '100%',
    backgroundColor: Colors.green,
  },
});

export default CustomTabBar;
