import React from 'react'
import { Image,View } from 'react-native'
import LoginPage from '../styles/LoginStyle'
import images from '../constants/imagepath'


export default function LoginGoogle() {
  return (
    <View style={LoginPage.logingoogleheader}>
     <View style={LoginPage.google}>
         <Image source={images.google} style={LoginPage.image}/>
    </View>

    <View style={LoginPage.google}>
       <Image source={images.options} style={LoginPage.image}/>
    </View>
  </View>
  )
}
