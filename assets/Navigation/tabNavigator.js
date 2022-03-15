import {createBottomTabNavigtor} from '@react-navigation/bottom-tabs';
import EarningScreen from '../screens/EarningScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigtor();

function MyTabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" compoenent={HomeScreen} />
      <Tab.Screen name="Earnings" compoenent={EarningScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
