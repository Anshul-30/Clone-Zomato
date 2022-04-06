import React from "react";
import navigationStrings from "../navigation/navigationStrings";

import Home from '../Screens/Home'
import Card from "./Card";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
const Tab = createMaterialTopTabNavigator();
function HeaderScreen() {
  return (

    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor: 'red',
      tabBarInactiveTintColor: 'grey',
      swipeEnabled: false,
      tabBarPressColor: 'black',

      tabBarIndicatorStyle: {
        backgroundColor: 'transparent'
      },
      tabBarStyle: {

        backgroundColor: 'white',

        marginBottom: 15,
        marginHorizontal: 10,
        //  borderRadius:2

      }
    }}>
      <Tab.Screen name={navigationStrings.DELIVERY} component={Home} />
      <Tab.Screen name={navigationStrings.DINNING} component={Card} />
    </Tab.Navigator>


  )
}
export default HeaderScreen