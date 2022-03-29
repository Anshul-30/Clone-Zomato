import React from 'react'
import {Text,View,Image} from 'react-native'
import Profilestyle from '../../Flatlist/Style/Profilestyle'

export default function ProfileScreen() {
  return (
    <View style={{flexDirection:'row',margin:13,justifyContent:'space-around'}}>
    <View style={{flexDirection:'column',padding:8}}>
    <View style={{alignItems:'center'}} >
      <Image  source={require('../assets/images/like.png')} style={Profilestyle.img}/></View>
      <Text style={{color:'black'}}>Likes</Text>
    </View>
    <View style={{flexDirection:'column',padding:8}}>
      <View style={{alignItems:'center'}} >
      <Image  source={require('../assets/images/bell.png')} style={Profilestyle.img}/>
    </View >
      <Text style={{color:'black'}}>Notification</Text>
    </View>
    <View style={{flexDirection:'column',padding:8}}>
    <View style={{alignItems:'center'}} >
      <Image  source={require('../assets/images/setting.png')} style={Profilestyle.img}/></View>
      <Text style={{color:'black'}}>Settings</Text>
    </View>
    <View style={{flexDirection:'column' ,padding:8}}>
    <View style={{alignItems:'center'}} >
      <Image  source={require('../assets/images/credit-card.png')} style={Profilestyle.img}/></View>
      <Text style={{color:'black'}}>Payment</Text>
    </View>
    </View>
  )
}
