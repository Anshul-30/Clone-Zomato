import React from 'react'
import {  Image, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './Sscreen';
import HomeStack from './Home';
import WalletStack from './Wallet';
import Profile from './Profile';
import OfferStack from './Offer';
import { red } from 'react-native-reanimated/src/reanimated2/Colors';
import { color } from 'react-native-reanimated';
const Tab = createBottomTabNavigator();




function Bottompart() {
  return (
    <>
      <Tab.Navigator options={{backgroundColor:'black'}} >

        {/* ----------- Screen 1----------- */}


        <Tab.Screen  name="Delivery" component={HomeStack} options={{tabBarHideOnKeyboard:true,tabBarActiveTintColor:'black',tabBarLabelStyle:{fontSize:13},headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../Images/delivery-man.png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}} />
        

        {/* -------------Screen 2--------------*/}



        <Tab.Screen name= "Dinning" component={WalletStack} options={{tabBarActiveTintColor:'black',tabBarLabelStyle:{fontSize:13},headerShown:false,tabBarIcon:({focused})=>(
          <Image source={require('../Images/restaurant.png')} style={{ height:20,width:20, tintColor:focused?'red':'grey'}}/>
        )}}/>

        {/* -----------Screen 3 --------------- */}



        <Tab.Screen name ="OFFER" component={OfferStack} options={{tabBarHideOnKeyboard:true,tabBarLabelStyle:{fontSize:13},tabBarActiveTintColor:'black',headerShown:false,tabBarIcon:({focused})=>(
          <Image source={require('../Images/discount(2).png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}}/>


        {/* -------------Screen 4 ---------------- */}



        
        <Tab.Screen name="Wallet" component={WalletStack} options={{ tabBarActiveTintColor:'black',tabBarLabelStyle:{fontSize:13},headerShown:false, tabBarIcon:({focused})=>(
          <Image source={require('../Images/wallet.png')} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}}/>
      </Tab.Navigator>
      {/* <View style={{height:5,width:100,backgroundColor:'red',position:'absolute',bottom:77}}> */}

      {/* </View> */}
    
    </>
  )
}

export default Bottompart