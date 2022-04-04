import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import AuthStack from './AuthStack'
import Stack from './Stack'
const Stack1 = createStackNavigator()







export default function route() {
  const [verify,setVerify] = useState(false)
  return (
    <NavigationContainer>
    <Stack1.Navigator>
      {verify? AuthStack(Stack1, verify) : Stack(Stack1)}
    </Stack1.Navigator>
  </NavigationContainer>
  )
}
