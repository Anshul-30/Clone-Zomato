import React from 'react'
import Profilestyle from '../styles/Profilestyle'
import{Text,FlatList,Image,View} from 'react-native'
import Table from './Table'
import styles from '../styles/style'





export default function ProfileFlatlist2() {
  return (
    <FlatList 
      data={Table}
      renderItem={(element)=>{
        return(
          <>
          <View style={Profilestyle.About}>
            <View style={Profilestyle.container}>
            <Image source={element.item.img} style={styles.favimg}/></View>
            <View style={{margin:7}}>
            <Text style={styles.comontext}>{element.item.title}</Text></View>
          </View>
          </>
        )
      }}
      />
  )
}
