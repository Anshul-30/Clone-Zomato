import React from 'react'
import { Image,View } from 'react-native'



export default function LoginGoogle() {
  return (
    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
     <View style={{height:45,width:45,borderRadius:22.5,borderWidth:.3,borderColor:'grey',justifyContent:'center',alignItems:'center',margin:15}}>
         <Image source={require('../assets/images/google.png')} style={{height:20,width:20}}/>
    </View>

    <View style={{height:45,width:45,borderRadius:22.5,borderWidth:.3,borderColor:'grey',justifyContent:'center',alignItems:'center',margin:15}}>
       <Image source={require('../assets/images/option.png')} style={{height:20,width:20}}/>
    </View>
  </View>
  )
}
