import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import GOscreen from './GOscreen';
import Input from './Input';

const Tab =createStackNavigator();

function Stackdemo() {
  return (
 <NavigationContainer>
     <Tab.Navigator>
         <Tab.Screen name='Input' component={Input} />
         <Tab.Screen name='GO' component={GOscreen} />
         </Tab.Navigator>
 </NavigationContainer>
  )
}

export default Stackdemo