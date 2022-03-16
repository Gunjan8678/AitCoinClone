import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
// import LoginScreen from './assets/screens/LoginScreen';
// import ForgotPasswordScreen from './assets/screens/ForgotPasswordScreen';
// import NewWalletScreen from './assets/screens/NewWalletScreen';
import MyTabs from './assets/Navigation/tabNavigator';
// import HomeScreen from './assets/screens/HomeScreen';
// import {createBottomTabNavigtor} from '@react-navigation/bottom-tabs';

// import EarningScreen from './assets/screens/EarningScreen';
// import HomeScreen from './assets/screens/HomeScreen';

// function HomeScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function SettingsScreen() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// const Tab =
//   Platform.OS === 'android'
//     ? createMaterialBottomTabNavigator()
//     : createBottomTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator initialRouteName="Home">
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name="Setting" component={SettingsScreen} />
//     </Tab.Navigator>
//   );
// }

const App = () => {
  return (
    // <LoginScreen />
    // <View>
    //   <Text>Hello</Text>
    // </View>
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
