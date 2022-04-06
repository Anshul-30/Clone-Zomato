import React from 'react'
import { View, Image, Text, SafeAreaView, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import ProfileFlatlist from '../Components/ProfileFlatlist'
import styles from '../styles/style'
import ProfileZomato from '../Components/ProfileZomato'
import Profilestyle from '../styles/Profilestyle'
import ProfileFlatlist2 from '../Components/ProfileFlatlist2'
import ProfileHeader from '../Components/ProfileHeader'
import ProfileScreen from '../Components/ProfileScreen'
import ProfileRating from '../Components/ProfileRating'
import ProfileAbout from '../Components/ProfileAbout'
import images from '../constants/imagepath'
import { useDispatch } from 'react-redux'
import { ContinueLogout } from '../redux/action'




export default function Profile({ navigation }) {
  const dispatch = useDispatch()
  return (
<>
    <SafeAreaView>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={Profilestyle.image} source={images.left_arrowhead} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Dinning')}>
        <ProfileHeader />
      </TouchableOpacity>


      <Divider width={0.4} style={styles.divider} />


      <ScrollView>
        <View style={{ paddingBottom: 200 }}>
          <ProfileScreen navigation={navigation}/>

          <Divider width={0.4} style={styles.divider} />

          <ProfileRating />

          <Divider width={0.4} style={styles.divider} />

          <View style={{ padding: 15 }}>
            <Text style={{ color: 'grey', fontSize: 17 }}>FOOD ORDERS</Text>
          </View>

          <ProfileFlatlist navigation={navigation} />


          <Divider style={styles.divider} />
          <ProfileZomato />
         


          <Divider style={styles.divider} />



          <View style={{ padding: 15 }}>
            <Text style={{ color: 'grey', fontSize: 17 }}>TABLE BOOKINGS</Text>
          </View>



          <ProfileFlatlist2 />

          <Divider style={styles.divider} />
          <ProfileAbout navigation={navigation}/>
          <Divider style={styles.divider} />


          <View style={{ marginHorizontal: 15 }}>

            <Text style={{ paddingTop: 15, fontSize: 17, color: 'black' }}>Send Feedback </Text>
            <Text style={{ paddingTop: 15, fontSize: 17, color: 'black' }}>Report a Safety Emergency  </Text>
            <Text style={{ paddingTop: 15, fontSize: 17, color: 'black' }}>Rate us on the Play Store</Text>
           <TouchableOpacity onPress={()=>dispatch(ContinueLogout())}>
            <Text style={{ paddingTop: 15, fontSize: 17, color: 'black' }}>Log Out </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>

    </SafeAreaView>
</>
  )
}
