import React from 'react'
import Login from '../Screens/Login'
import Bottompart from './Bottompart'


export default function AuthStack(Stack1) {
  return (
  <>
  <Stack1.Screen name="Login" component={Login} options={{headerShown:false}}/>
  
  </>
  )
}
