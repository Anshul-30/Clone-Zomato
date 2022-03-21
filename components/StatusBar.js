import React from 'react'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image ,TouchableOpacity} from 'react-native'
import styles from '../style'
import DATA from '../Flatlist/DATA'
import { Divider } from 'react-native-elements/dist/divider/Divider'
function Statusbar() {
  const search_image = require('../Images/search(1).png')
  const mike =require('../Images/voice.png')
  return (
   <>
        <View>
          <View style={styles.container}>
            <Image style={styles.location} source={require("../Images/placeholder.png")} />
            
            <Text style={styles.locationtxt}>Location </Text>
            <Image source={require('../Images/arrow-down-sign-to-navigate.png') } style={{height:15,width:15,marginTop:15}}/>
            
            <Image style={styles.location1} source={require('../Images/wine.png')} />
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