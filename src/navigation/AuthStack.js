import React from 'react'
import Login from '../Screens/Login'
import New from '../Screens/new'

import Bottompart from './Bottompart'


export default function AuthStack(Stack1, verify) {
  console.log(verify)
  return (
    <>
      <Stack1.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack1.Screen name="New" component={New} options={{ headerShown: false }} />


    </>
  )
}
