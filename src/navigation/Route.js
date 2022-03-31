import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Stack from './Stack'
const Stack1 = createStackNavigator()







export default function route() {
  return (
    <NavigationContainer>
    <Stack1.Navigator>
      {false? AuthStack(Stack1) : Stack(Stack1)}
    </Stack1.Navigator>
  </NavigationContainer>
  )
}
