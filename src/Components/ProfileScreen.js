import React from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import images from '../constants/imagepath'
import Profilestyle from '../styles/Profilestyle'

export default function ProfileScreen({ navigation }) {
  return (

    <View style={{ flexDirection: 'row', margin: 13, justifyContent: 'space-around' }}>


      <View style={{ flexDirection: 'column', padding: 8 }}>
        <View style={{ alignItems: 'center' }} >
          <Image source={images.like} style={Profilestyle.img} /></View>
        <Text style={{ color: 'black' }}>Likes</Text>
      </View>


      <View style={{ flexDirection: 'column', padding: 8 }}>
        <View style={{ alignItems: 'center' }} >
          <Image source={images.notification} style={Profilestyle.img} />
        </View >
        <Text style={{ color: 'black' }}>Notification</Text>
      </View>


      <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
        <View style={{ flexDirection: 'column', padding: 8 }}>
          <View style={{ alignItems: 'center' }} >
            <Image source={images.setting} style={Profilestyle.img} /></View>
          <Text style={{ color: 'black' }}>Settings</Text>
        </View>
      </TouchableOpacity>


      <View style={{ flexDirection: 'column', padding: 8 }}>
        <View style={{ alignItems: 'center' }} >
          <Image source={images.payment} style={Profilestyle.img} /></View>
        <Text style={{ color: 'black' }}>Payment</Text>
      </View>
    </View>
  )
}
