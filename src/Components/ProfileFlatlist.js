import React from 'react'
import{Text,View,Image,FlatList} from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import Order from '../Components/Order'

export default function ProfileFlatlist() {
  return (
    <FlatList 
      data={Order}
      renderItem={(element)=>{
        return(
          <>
          <View style={{flexDirection:'row',padding:10}}>
            <View style={Profilestyle.container}>
            <Image source={element.item.img} style={{height:15,width:15}}/>
            </View>
            <View style={{margin:7}}>
            <Text style={{color:'black',fontSize:17}}>{element.item.title}</Text></View>
          </View>
          </>
        )
      }}
      />
  )
}
