import React from 'react'
import { View, Text, Image } from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import images from '../constants/imagepath'


export default function ProfileHeader() {
  return (
    <View style={Profilestyle.main}>
      <View style={Profilestyle.text}>
        <Text style={Profilestyle.text1}>111111</Text>
        <View style={Profilestyle.About}>
          <Text style={{ color: 'red', fontSize: 13 }}>View activity</Text>
          <Image source={images.play} style={Profilestyle.playimg} />
        </View>
      </View>

      <View style={Profilestyle.viewwine}>
        <Image source={images.wine} style={Profilestyle.wineimg} />
      </View>

    </View>
  )
}
