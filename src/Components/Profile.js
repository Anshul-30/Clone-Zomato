import React from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import ProfileFlatlist from './ProfileFlatlist'
import styles from '../../style'
import ProfileZomato from './ProfileZomato'
import Profilestyle from '../../Flatlist/Style/Profilestyle'
import ProfileFlatlist2 from './ProfileFlatlist2'
import ProfileHeader from './ProfileHeader'
import ProfileScreen from './ProfileScreen'
import ProfileRating from './ProfileRating'
import ProfileAbout from './ProfileAbout'




export default function Profile({ navigation }) {
  return (

    <SafeAreaView>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={Profilestyle.image} source={require("../assets/images/left-arrow.png")} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Dinning')}>
        <ProfileHeader />
      </TouchableOpacity>


      <Divider width={0.4} style={styles.divider} />


      <ScrollView>
        <View style={{ paddingBottom: 200 }}>
          <ProfileScreen />

          <Divider width={0.4} style={styles.divider} />

          <ProfileRating />

          <Divider width={0.4} style={styles.divider} />

          <View style={{ padding: 15 }}>
            <Text style={{ color: 'grey', fontSize: 17 }}>FOOD ORDERS</Text>
          </View>

          <ProfileFlatlist />


          <Divider style={styles.divider} />
          <ProfileZomato />
         


          <Divider style={styles.divider} />



          <View style={{ padding: 15 }}>
            <Text style={{ color: 'grey', fontSize: 17 }}>TABLE BOOKINGS</Text>
          </View>



          <ProfileFlatlist2 />

          <Divider style={styles.divider} />
          <ProfileAbout />
          <Divider style={styles.divider} />


          <View style={{ marginHorizontal: 15 }}>

            <Text style={{ paddingTop: 15, fontSize: 17, color: 'black' }}>Send Feedback </Text>
            <Text style={{ paddingTop: 15, fontSize: 17, color: 'black' }}>Report a Safety Emergency  </Text>
            <Text style={{ paddingTop: 15, fontSize: 17, color: 'black' }}>Rate us on the Play Store</Text>
            <Text style={{ paddingTop: 15, fontSize: 17, color: 'black' }}>Log Out </Text>

          </View>
        </View>
      </ScrollView>

    </SafeAreaView>

  )
}
