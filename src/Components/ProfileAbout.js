import React from 'react'
import {Text,View,Image} from 'react-native'
import Profilestyle from '../../Flatlist/Style/Profilestyle'




export default function ProfileAbout() {
  return (
    <View style={{flexDirection:'row',padding:10}}>

    <View style={Profilestyle.container}>
            <Image source={require('../assets/images/info(1).png')}style={{height:15,width:15}}/>
    </View>


    <View  style={{margin:7}}>
           <Text style={{color:'black',fontSize:17}}>About</Text>
    </View>
    
  </View>
  )
}
