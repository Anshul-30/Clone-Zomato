import React from 'react'
import {Text,View,Image} from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import images from '../constants/imagepath'


export default function ProfileRating() {
  return (
    <View style={{flexDirection:'row',padding:8,justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
          <View style={{height:30,width:30,borderRadius:15,backgroundColor:'#dee3e0',justifyContent:'center',alignItems:'center',marginLeft:10}}>
          <Image source={images.star1} style={{height:20,width:20,}}/>
          </View>


        <View style={{padding:7,marginLeft:10}}>
          <Text style={{fontSize:15,color:'black'}}>
            Your Rating
          </Text>
       </View>
          
        </View>
          <View style={Profilestyle.rating}>
         <Text style={{color:'black'}}>
           5.0
         </Text>
          <Image source={images.rating} style={{ height:15,width:15}}/></View>
        </View>
  )
}
