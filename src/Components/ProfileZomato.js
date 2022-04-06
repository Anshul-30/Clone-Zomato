import React from 'react'
import {Text,View,Image} from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import images from '../constants/imagepath'
import colors from '../styles/colors'
import styles from '../styles/style'



export default function ProfileZomato() {
  return (
    <View style={ Profilestyle.About}>

          <View style={Profilestyle.container}>
              <Image source={images.badge} style={styles.badge} />
           </View>


          <View style={{ margin: 7 }}>
              <Text style={styles.comontext}>Zomato Pro</Text>
          </View>
          </View>
  )
}
