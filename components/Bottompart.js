import React from 'react'
import {  Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './Sscreen';
import Home from './Home';
import Wallet from './Wallet';
import Profile from './Profile';
import Offer from './Offer';
import { red } from 'react-native-reanimated/src/reanimated2/Colors';
import { color } from 'react-native-reanimated';
const Tab = createBottomTabNavigator();




function Bottompart() {
  return (
    
      <Tab.Navigator  >

        {/* ----------- Screen 1----------- */}


        <Tab.Screen  name="Delivery" component={Home} options={{tabBarHideOnKeyboard:true,tabBarActiveTintColor:'red',tabBarLabelStyle:{fontSize:13},headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../Images/delivery-man.png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}} />
        

        {/* -------------Screen 2--------------*/}



        <Tab.Screen name= "Wallet" component={Wallet} options={{tabBarActiveTintColor:'red',tabBarLabelStyle:{fontSize:13},headerShown:false,tabBarIcon:({focused})=>(
          <Image source={require('../Images/wallet.png')} style={{ height:20,width:20, tintColor:focused?'red':'grey'}}/>
        )}}/>

        {/* -----------Screen 3 --------------- */}



        <Tab.Screen name ="Offer" component={Offer} options={{tabBarHideOnKeyboard:true,tabBarLabelStyle:{fontSize:13},tabBarActiveTintColor:'red',headerShown:false,tabBarIcon:({focused})=>(
          <Image source={require('../Images/discount(2).png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}}/>


        {/* -------------Screen 4 ---------------- */}



        
        <Tab.Screen name="Profile" component={Profile} options={{ tabBarActiveTintColor:'red',tabBarLabelStyle:{fontSize:13},headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../Images/user.png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}}/>
      </Tab.Navigator>
    
    
  )
}

export default Bottompart