import React, { createRef} from 'react'
import { Text, TextInput, View, Image ,TouchableOpacity, Alert} from 'react-native'
import styles from '../../style'
import { Divider } from 'react-native-elements/dist/divider/Divider'


function showAlert(){
  Alert.alert(
    
    "Microphones Permission is not enabled"
  )
}



function Statusbar( {navigation}) {
  const search_image = require('../assets/images/search(1).png')
  const mike =require('../assets/images/voice.png')

  return (
   <>
        <View >

          {/* ------------ Location------------- */}
     <View >
          <View style={styles.container}>
            <TouchableOpacity></TouchableOpacity>
              <Image style={styles.location} source={require("../assets/images/placeholder.png")} />
              <Text style={styles.locationtxt}>Location </Text>
              <Image source={require('../assets/images/arrow-down-sign-to-navigate.png') } style={{height:15,width:15,marginTop:10}}/>
              </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={{justifyContent:'flex-end'}}>
            <Image style={styles.location1} source={require('../assets/images/wine.png')} />
           </View>
           </TouchableOpacity>
  </View>


          {/* -------------Input box ----------- */}


         <View style={styles.search}  >
           <Image source={search_image} style={styles.searchicon}/>
           <TextInput  placeholder='Search Restaurant and dish' style={styles.searchtxt1} />
           <Divider orientation='vertical' style={{margin:7}}></Divider>
           <TouchableOpacity onPress={showAlert}>
           <Image source={mike} style={[styles.mike]}/>
           </TouchableOpacity>
          </View>



        </View>
        
   </>
  )
}


export default Statusbar

