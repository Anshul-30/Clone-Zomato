import React from 'react'
import Login from '../Screens/Login'



export default function AuthStack(Stack1) {
  // console.log(verify)
  return (
    <>
      <Stack1.Screen name="Login" component={Login} options={{ headerShown: false }} />
    


    </>
  )
}
