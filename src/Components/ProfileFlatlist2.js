import React from 'react'
import Profilestyle from '../styles/Profilestyle'
import{Text,FlatList,Image,View} from 'react-native'
import Table from './Table'





export default function ProfileFlatlist2() {
  return (
    <FlatList 
      data={Table}
      renderItem={(element)=>{
        return(
          <>
          <View style={{flexDirection:'row',padding:10}}>
            <View style={Profilestyle.container}>
            <Image source={element.item.img} style={{height:15,width:15}}/></View>
            <View style={{margin:7}}>
            <Text style={{color:'black',fontSize:17}}>{element.item.title}</Text></View>
          </View>
          </>
        )
      }}
      />
  )
}
