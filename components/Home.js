import React from "react";
import { Text, ScrollView, View, SafeAreaView, Image, StatusBar,TouchableOpacity,TextInput ,FlatList, Alert} from 'react-native'
// import Statusbar from './Statusbar'
import Grid from './Grid'
import Flatlist from './Flatlist'
import Card from "./Card";
import styles from "../style"
import { createStackNavigator } from "@react-navigation/stack";
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Profilestyle from "../Flatlist/Style/Profilestyle";
import Order from "../Flatlist/Order";
import Table from "../Flatlist/Table";
import Statusbar from "./Statusbar";








function Home(){return(
    <><SafeAreaView>
    
     <ScrollView >  
     <Flatlist />
         <View style={{ flexDirection: 'row', justifyContent: "center" }}>
           <Image source={require('../Images/zomato-coupons.jpg')} style={styles.image} />
           <Image source={require('../Images/zomato-offer-code-2020.jpeg')} style={styles.image} />
         </View>
         <View > 
           <Text numberOfLines={1} style={styles.text3}>Eat what makes you happy</Text>
         </View> 
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