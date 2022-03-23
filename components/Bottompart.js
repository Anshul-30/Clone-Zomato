import React from 'react'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image ,TouchableOpacity} from 'react-native'
import styles from '../style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './Sscreen';
import Home from './Home';
import Wallet from './Wallet';
import Profile from './Profile';
import { red } from 'react-native-reanimated/src/reanimated2/Colors';
import { shouldBeUseWeb } from 'react-native-reanimated/src/reanimated2/PlatformChecker';
const Tab = createBottomTabNavigator();
function Bottompart() {
  return (
    
      <Tab.Navigator  >
        <Tab.Screen  name="Delivery" component={Home} options={{headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../Images/delivery-man.png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )
      
      }} />
        <Tab.Screen name= "Dinning" component={Wallet} options={{headerShown:false,tabBarIcon:({focused})=>(
          <Image source={require('../Images/restaurant.png')} style={{ height:20,width:20, tintColor:focused?'red':'grey'}}/>
        )}}/>
        <Tab.Screen name ="Offer" component={Profile} options={{headerShown:false,tabBarIcon:({focused})=>(
          <Image source={require('../Images/discount(2).png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}}/>
        <Tab.Screen name="Wallet" component={Wallet} options={{headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../Images/wallet.png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}}/>
      </Tab.Navigator>
    
    
  )
}

export default Bottompart