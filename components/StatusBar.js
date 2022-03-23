import React, { Component } from 'react'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image ,TouchableOpacity} from 'react-native'
import styles from '../style'
import DATA from '../Flatlist/DATA'
import Wallet from './Wallet'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Profile from './Profile'
function Statusbar() {
  const search_image = require('../Images/search(1).png')
  const mike =require('../Images/voice.png')
  const onpress =()=> {Wallet}
  return (
   <>
        <View >
          <View >
          <View style={styles.container}>
            <Image style={styles.location} source={require("../Images/placeholder.png")} />
            
            <Text style={styles.locationtxt}>Location </Text>
            
            <Image source={require('../Images/arrow-down-sign-to-navigate.png') } style={{height:15,width:15,marginTop:10}}/>
            </View>
            <TouchableOpacity onPress={Profile}>
            <View style={{justifyContent:'flex-end'}}>
        
            <Image style={styles.location1} source={require('../Images/wine.png')} />
         </View></TouchableOpacity>
         </View>
         <View style={styles.search}  >
         <Image source={search_image} style={styles.searchicon}/>
          <TextInput  placeholder='Search Restaurant and dish' style={styles.searchtxt1} />
          <Divider orientation='vertical' style={{margin:7}}></Divider>
          <Image source={mike} style={[styles.mike]}/>
          </View>
        </View>
        
   </>
  )
}


export default Statusbar

