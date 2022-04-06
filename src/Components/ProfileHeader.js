import React from 'react'
import{View,Text,Image} from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import images from '../constants/imagepath'


export default function ProfileHeader() {
  return (
    <View style={Profilestyle.main}>
    <View style={Profilestyle.text}>
        <Text style={{fontSize:30,fontWeight:'500',color:'black'}}>111111</Text>
            <View style={Profilestyle.About}>
                <Text style={{color:'red',fontSize:13}}>View activity</Text>
                <Image source={images.play} style={{height:10,width:10,margin:4}}/>
           </View>
    </View>

  <View style={{height:80,width:80,borderRadius:40,backgroundColor:'wheat',alignItems:'center',justifyContent:'center',marginRight:20}}>
  <Image source={images.wine} style={{height:60,width:60,}}/> 
  </View>

</View>
  )
}
