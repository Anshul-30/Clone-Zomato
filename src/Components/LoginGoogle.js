import React from 'react'
import { Image,View } from 'react-native'
import LoginPage from '../styles/LoginStyle'



export default function LoginGoogle() {
  return (
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     <View style={LoginPage.google}>
         <Image source={require('../assets/images/google.png')} style={LoginPage.image}/>
    </View>

    <View style={LoginPage.google}>
       <Image source={require('../assets/images/option.png')} style={LoginPage.image}/>
    </View>
  </View>
  )
}
