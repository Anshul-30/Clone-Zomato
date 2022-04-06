import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Stack from './Stack'
import Login from '../redux/reducer/ContinueLogin'
import {useSelector} from 'react-redux'
const Stack1 = createStackNavigator()

export default function route() {
  const login = useSelector (state => state.Login);
  return (
    <NavigationContainer>
    <Stack1.Navigator>
      {login? Stack(Stack1):AuthStack(Stack1) }
    </Stack1.Navigator>
  </NavigationContainer>
  )
}
