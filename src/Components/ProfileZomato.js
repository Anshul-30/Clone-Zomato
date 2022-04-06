import React from 'react'
import {Text,View,Image} from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import images from '../constants/imagepath'
import colors from '../styles/colors'



export default function ProfileZomato() {
  return (
    <View style={ Profilestyle.About}>

          <View style={Profilestyle.container}>
              <Image source={images.badge} style={{ height: 17, width: 17 }} />
           </View>


          <View style={{ margin: 7 }}>
              <Text style={{ color: colors.black, fontSize: 17 }}>Zomato Pro</Text>
          </View>
          </View>
  )
}
