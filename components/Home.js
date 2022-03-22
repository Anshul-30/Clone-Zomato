import React from "react";
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native'
import Statusbar from './Statusbar'
import Bottompart from './Bottompart'
import Grid from './Grid'
import Flatlist from './Flatlist'
import Card from "./Card";
import styles from "../style"
function Home(){
return(
 <>
    <View> 
         <StatusBar barStyle='dark-content' backgroundColor={'transparent'} />
      </View>
       <SafeAreaView style={{ flex: 1 }}>
       {/* Header start user defined components */}
     <Statusbar />
         <ScrollView >  
         {/* Flatlist text user defined components */}
        <Flatlist />
         <View style={{ flexDirection: 'row', justifyContent: "center" }}>
           <Image source={require('../Images/zomato-coupons.jpg')} style={styles.image} />
           <Image source={require('../Images/zomato-offer-code-2020.jpeg')} style={styles.image} />
         </View>
         <View > 
           <Text numberOfLines={1} style={styles.text3}>Eat what makes you happy</Text>
         </View> 
         {/* Flatlist -- Grid userdefined components*/}
          <Grid />
         <View style={styles.seemore}>
           <Text style={styles.textmore}>see more</Text>
           <Image source={require('../Images/down.png')} style={{ height: 15, width: 15, marginTop: 11 }} />
         </View>
         <Text style={styles.text3}>637 restaurants around you</Text> 
     
         <Card />
         <Card />
         <Card /> 
       </ScrollView>    
     
       </SafeAreaView>
      </>
)
}
export default Home