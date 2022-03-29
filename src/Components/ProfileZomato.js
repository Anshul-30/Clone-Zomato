import React from 'react'
import {Text,View,Image} from 'react-native'
import Profilestyle from '../../Flatlist/Style/Profilestyle'




export default function ProfileZomato() {
  return (
    <View style={{ flexDirection: 'row', padding: 10 }}>

          <View style={Profilestyle.container}>
              <Image source={require('../assets/images/badge.png')} style={{ height: 17, width: 17 }} />
           </View>


          <View style={{ margin: 7 }}>
              <Text style={{ color: 'black', fontSize: 17 }}>Zomato Pro</Text>
          </View>
          </View>
  )
}
