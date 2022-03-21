import React from 'react'
import styles from './style'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image ,TouchableOpacity,StatusBar} from 'react-native'
import DATA from './Flatlist/DATA'
import PHOTOS from './Flatlist/PHOTOS'
import Card from './components/Card'
import Statusbar from './components/Statusbar'
import Bottompart from './components/Bottompart'
import Grid from './components/Grid'
import Flatlist from './components/Flatlist'
import Screen from './components/Screen'
const App = () => {

  return (
    <>
   <View>
     <StatusBar  barStyle='dark-content' backgroundColor={'transparent'}/>
   </View>
    <SafeAreaView style={{flex:1}}>
    <Statusbar  />
    {/* <ScrollView>
    <Screen/>
    </ScrollView> */}
        <ScrollView >
       <Flatlist/>
        <View style={{flexDirection:'row',justifyContent:"center"}}>
        <Image source={require('./Images/zomato-coupons.jpg')} style={styles.image} />
        <Image source={require('./Images/zomato-offer-code-2020.jpeg')} style={styles.image} />
        </View>
        <View >
          <Text numberOfLines={1} style={styles.text3}>Eat what makes you happy</Text>
        </View>
       <Grid/>
        <View style={styles.seemore}>
          <Text style={styles.textmore}>see more</Text>
          <Image source={require('./Images/down.png') } style={{height:15,width:15,marginTop:11}}/>
        </View>
        <Text style={styles.text3}>637 restaurants around you</Text>

        <Card />
        <Card />
        <Card /> 
      </ScrollView>
      <Bottompart/>
    </SafeAreaView></>
  )
}
export default App;