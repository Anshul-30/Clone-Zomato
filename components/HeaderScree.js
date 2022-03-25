import React from "react";
import Profile from "./Profile";
import {View,Text} from 'react-native'
import Home from './Home'
import Card from "./Card";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab = createMaterialTopTabNavigator();
function HeaderScreen(){
    return(
    
        <Tab.Navigator screenOptions={{
          tabBarActiveTintColor:'red',
          tabBarInactiveTintColor:'grey',
        //  tabBarActiveTintColor:'black',
        
        
           


           tabBarStyle:{
             backgroundColor:'gainsboro',
             marginBottom:15,
             marginHorizontal:10,
           borderRadius:10,
           
          }
          }}>
          <Tab.Screen name="Delivery1" component={Home}/>
          <Tab.Screen name="Delivery2" component={Card}/>
        </Tab.Navigator>
        
        
    )
}
export default HeaderScreen