import React from 'react'
import {Text,View,Image,TouchableOpacity} from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import images from '../constants/imagepath'
import navigationStrings from '../navigation/navigationStrings'
import styles from '../styles/style'
import colors from '../styles/colors'


export default function ProfileAbout({navigation}) {
  return (
    <TouchableOpacity onPress={()=>navigation.navigate(navigationStrings.ABOUT)}>
    <View style={Profilestyle.About}>

    <View style={Profilestyle.container}>
     
            <Image source={images.about}style={styles.favimg}/>
    </View>


    <View  style={{margin:7}}>
           <Text style={styles.comontext}>About</Text>
    </View>
    
  </View></TouchableOpacity>
  )
}
