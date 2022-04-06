import React from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import images from '../constants/imagepath'
import Profilestyle from '../styles/Profilestyle'
import navigationStrings from '../navigation/navigationStrings'
import colors from '../styles/colors'


export default function ProfileScreen({ navigation }) {
  return (

    <View style={Profilestyle.screencontainer}>


      <View style={Profilestyle.viewscreen}>
        <View style={{ alignItems: 'center' }} >
          <Image source={images.like} style={Profilestyle.img} /></View>
        <Text style={{ color: colors.black}}>Likes</Text>
      </View>


      <View style={Profilestyle.viewscreen}>
        <View style={{ alignItems: 'center' }} >
          <Image source={images.notification} style={Profilestyle.img} />
        </View >
        <Text style={{ color: colors.black }}>Notification</Text>
      </View>


      <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.SETTING)}>
        <View style={Profilestyle.viewscreen}>
          <View style={{ alignItems: 'center' }} >
            <Image source={images.setting} style={Profilestyle.img} /></View>
          <Text style={{ color: colors.black }}>Settings</Text>
        </View>
      </TouchableOpacity>


      <View style={Profilestyle.viewscreen}>
        <View style={{ alignItems: 'center' }} >
          <Image source={images.payment} style={Profilestyle.img} /></View>
        <Text style={{ color: colors.black }}>Payment</Text>
      </View>
    </View>
  )
}
