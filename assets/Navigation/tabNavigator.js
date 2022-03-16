import React from 'react';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import EarningScreen from '../screens/EarningScreen';
import HomeScreen from '../screens/HomeScreen';
import DownlineScreen from '../screens/DownlineScreen';
import AitCoinScreen from '../screens/AitCoinScreen';
import UserProfile from '../screens/UserProfile';

const Tab =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route, navigation}) => ({
        tabBarIcon: () => {
          let iconName;
          if (route.name === 'Home') {
            iconName = Platform.OS === 'android' ? 'home' : 'md-home';
          } else if (route.name === 'Earnings') {
            iconName = Platform.OS === 'android' ? 'user' : 'user';
          } else if (route.name === 'Aitcoin') {
            iconName = Platform.OS === 'android' ? 'user' : 'user';
          } else if (route.name === 'Downline') {
            iconName = Platform.OS === 'android' ? 'user' : 'user';
          } else if (route.name === 'Profile') {
            iconName = Platform.OS === 'android' ? 'user' : 'user';
          }
          return <Icon name={iconName} size={25} />;
        },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Tab.Screen name="Earnings" component={EarningScreen} />
      <Tab.Screen name="Aitcoin" component={AitCoinScreen} />
      <Tab.Screen name="Downline" component={DownlineScreen} />
      <Tab.Screen name="Profile" component={UserProfile} />
    </Tab.Navigator>
  );
}

export default MyTabs;
