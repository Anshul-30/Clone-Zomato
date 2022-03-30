import React from 'react'
import {  Image, View,SafeAreaView ,StatusBar} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import images from '../constants/imagepath';
import Card from '../Components/Card';
import HomeStack from '../Screens/Home';
import WalletStack from '../Screens/Wallet';

import OfferStack from '../Screens/Offer';

import Statusbar from '../Components/StatusBar';

const Tab = createBottomTabNavigator();




function Bottompart({navigation}) {
  return (
    <>
    <StatusBar barStyle='dark-content' backgroundColor={'transparent'}/>
     <SafeAreaView>
     <Statusbar navigation={navigation} /> 
     </SafeAreaView>
      <Tab.Navigator options={{backgroundColor:'black'}} >

        {/* ----------- Screen 1----------- */}


        <Tab.Screen  name="Delivery" component={HomeStack}
         options={{
          tabBarHideOnKeyboard:true,
          tabBarActiveTintColor:'black',
          tabBarLabelStyle:{fontSize:13},
          headerShown:false, 
          
          tabBarIcon:({focused})=>(
          <Image source={images.deliver} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}} />
        

        {/* -------------Screen 2--------------*/}



        <Tab.Screen name= "Dinning" component={Card}
         options={{
           tabBarActiveTintColor:'black',
           tabBarLabelStyle:{fontSize:13},
           headerShown:false,
           tabBarIcon:({focused})=>(
          <Image source={images.dinning} style={{ height:20,width:20, tintColor:focused?'red':'grey'}}/>
        )}}/>

        {/* -----------Screen 3 --------------- */}



        <Tab.Screen name ="Offer" component={OfferStack} 
        options={{
          tabBarHideOnKeyboard:true,
          tabBarLabelStyle:{fontSize:13},
          tabBarActiveTintColor:'black',
          headerShown:false,
          tabBarIcon:({focused})=>(
          <Image source={images.discount2} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}}/>


        {/* -------------Screen 4 ---------------- */}



        
        <Tab.Screen name="Wallet" component={WalletStack} 
        options={{ 
          tabBarActiveTintColor:'black',
          tabBarLabelStyle:{fontSize:13},
          headerShown:false,
           tabBarIcon:({focused})=>(
          <Image source={images.money} style={{ height:20,width:20,tintColor:focused?'red':'grey'}}/>
        )}}/>
      </Tab.Navigator>
     
    
    </>
  )
}

export default Bottompart