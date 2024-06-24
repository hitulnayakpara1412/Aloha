import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CustomTabBar from './CustomTab';
import SurfingScreen from '../screens/SurfingScreen';
import HulaScreen from '../screens/HulaScreen';
import VulcanoScreen from '../screens/VulcanoScreen';

const Tab = createBottomTabNavigator();

const BottomTab: FC = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="SurfingScreen"
        component={SurfingScreen}
        options={{tabBarLabel: 'Surfing'}}
      />
      <Tab.Screen
        name="HulaScreen"
        component={HulaScreen}
        options={{tabBarLabel: 'Hula'}}
      />
      <Tab.Screen
        name="VulcanoScreen"
        component={VulcanoScreen}
        options={{tabBarLabel: 'Vulcano'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
