import React from 'react'
import { Text, View, Image } from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import images from '../constants/imagepath'
import styles from '../styles/style'
import colors from '../styles/colors'


export default function ProfileRating() {
  return (
    <View style={{ flexDirection: 'row', padding: 8, justifyContent: 'space-between' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={[Profilestyle.container, { marginLeft: 10 }]}>
          <Image source={images.star1} style={styles.leftarrowimg} />
        </View>


        <View style={{ padding: 7, marginLeft: 10 }}>
          <Text style={{ fontSize: 15, color: 'black' }}>
            Your Rating
          </Text>
        </View>

      </View>
      <View style={Profilestyle.rating}>
        <Text style={{ color: colors.black }}>
          5.0
        </Text>
        <Image source={images.rating} style={styles.favimg} /></View>
    </View>
  )
}
