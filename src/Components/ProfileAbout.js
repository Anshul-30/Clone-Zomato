import React from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import images from '../constants/imagepath'




export default function ProfileAbout({navigation}) {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate('About')}>
    <View style={{flexDirection:'row',padding:10}}>

    <View style={Profilestyle.container}>
     
            <Image source={images.about}style={{height:15,width:15}}/>
    </View>


    <View  style={{margin:7}}>
           <Text style={{color:'black',fontSize:17}}>About</Text>
    </View>
    
  </View></TouchableOpacity>
  )
}
