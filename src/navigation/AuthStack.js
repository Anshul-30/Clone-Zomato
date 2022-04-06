import React from 'react'
import Login from '../Screens/Login'
import navigationStrings from './navigationStrings'


export default function AuthStack(Stack1) {
  // console.log(verify)
  return (
    <>
      <Stack1.Screen name={navigationStrings.LOGIN} component={Login} options={{ headerShown: false }} />
    


    </>
  )
}
