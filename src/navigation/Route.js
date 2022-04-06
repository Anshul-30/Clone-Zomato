import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Stack from './Stack'
import userStatus from '../redux/reducer/ContinueLogin'
import {useSelector} from 'react-redux'
const Stack1 = createStackNavigator()

export default function route() {
  const userStatus = useSelector (state => state.userStatus);
  return (
    <NavigationContainer>
    <Stack1.Navigator>
      {userStatus? Stack(Stack1):AuthStack(Stack1) }
    </Stack1.Navigator>
  </NavigationContainer>
  )
}
