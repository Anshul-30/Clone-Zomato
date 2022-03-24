import React from "react";
import { Text, ScrollView, View, SafeAreaView, Image, StatusBar,TouchableOpacity,TextInput ,FlatList} from 'react-native'
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








function Profile({navigation}) {
  return (



    <SafeAreaView>
            <Image style={Profilestyle.image} source={require("../Images/left-arrow.png")}/>

        <TouchableOpacity>
            <View style={Profilestyle.main}>
              <View style={Profilestyle.text}>
                  <Text style={{fontSize:30,fontWeight:'500',color:'black'}}>111111</Text>
                      <View style={{flexDirection:'row',marginLeft:10}}>
                          <Text style={{color:'red',fontSize:13}}>View activity</Text>
                          <Image source={require('../Images/play.png')} style={{height:10,width:10,margin:4}}/>
                     </View>
              </View>

            <View style={{height:80,width:80,borderRadius:40,backgroundColor:'wheat',alignItems:'center',justifyContent:'center',marginRight:20}}>
            <Image source={require('../Images/wine.png')} style={{height:60,width:60,}}/> 
            </View>
          
        </View>
        </TouchableOpacity>


        <Divider width={0.4} style={styles.divider}/>


        <ScrollView>
        <View style={{paddingBottom:200}}>
        <View style={{flexDirection:'row',margin:13,justifyContent:'space-around'}}>
        <View style={{flexDirection:'column',padding:8}}>
        <View style={{alignItems:'center'}} >
          <Image  source={require('../Images/like.png')} style={Profilestyle.img}/></View>
          <Text style={{color:'black'}}>Likes</Text>
        </View>
        <View style={{flexDirection:'column',padding:8}}>
          <View style={{alignItems:'center'}} >
          <Image  source={require('../Images/bell.png')} style={Profilestyle.img}/>
        </View >
          <Text style={{color:'black'}}>Notification</Text>
        </View>
        <View style={{flexDirection:'column',padding:8}}>
        <View style={{alignItems:'center'}} >
          <Image  source={require('../Images/setting.png')} style={Profilestyle.img}/></View>
          <Text style={{color:'black'}}>Settings</Text>
        </View>
        <View style={{flexDirection:'column' ,padding:8}}>
        <View style={{alignItems:'center'}} >
          <Image  source={require('../Images/credit-card.png')} style={Profilestyle.img}/></View>
          <Text style={{color:'black'}}>Payment</Text>
        </View>
        </View>



        <Divider width={0.4} style={styles.divider}/>


        <View style={{flexDirection:'row',padding:8,justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
          <View style={{height:30,width:30,borderRadius:15,backgroundColor:'#dee3e0',justifyContent:'center',alignItems:'center',marginLeft:10}}>
          <Image source={require('../Images/star(1).png')} style={{height:20,width:20,}}/></View>


        <View style={{padding:7,marginLeft:10}}>
          <Text style={{fontSize:15,color:'black'}}>
            Your Rating
          </Text></View></View>
          <View style={Profilestyle.rating}>
         <Text style={{color:'black'}}>
           5.0
         </Text>
          <Image source={require('../Images/star(2).png')} style={{ height:15,width:15}}/></View>
        </View>
        <Divider width={0.4} style={styles.divider} />
        <View style={{padding:15}}>
          <Text style={{color:'grey' ,fontSize:17}}>FOOD ORDERS</Text>
        </View>
      
      
      
      <FlatList 
      data={Order}
      renderItem={(element)=>{
        return(
          <>
          <View style={{flexDirection:'row',padding:10}}>
            <View style={Profilestyle.container}>
            <Image source={element.item.img} style={{height:15,width:15}}/>
            </View>
            <View style={{margin:7}}>
            <Text style={{color:'black',fontSize:17}}>{element.item.title}</Text></View>
          </View>
          </>
        )
      }}
      />

      <Divider style={styles.divider}/>

      <View style={{flexDirection:'row',padding:10}}>

        <View style={Profilestyle.container}>
          <Image source={require('../Images/badge.png')}style={{height:17,width:17}}/>
        </View>
      <View  style={{margin:7}}>
      <Text style={{color:'black',fontSize:17}}>Zomato Pro</Text></View>
      </View>
      <Divider style={styles.divider}/>
      <View style={{padding:15}}>
          <Text style={{color:'grey',fontSize:17}}>TABLE BOOKINGS</Text>
        </View>
        <FlatList 
      data={Table}
      renderItem={(element)=>{
        return(
          <>
          <View style={{flexDirection:'row',padding:10}}>
            <View style={Profilestyle.container}>
            <Image source={element.item.img} style={{height:15,width:15}}/></View>
            <View style={{margin:7}}>
            <Text style={{color:'black',fontSize:17}}>{element.item.title}</Text></View>
          </View>
          </>
        )
      }}
      />
        <Divider style={styles.divider}/>

      <View style={{flexDirection:'row',padding:10}}>
        <View style={Profilestyle.container}>
          <Image source={require('../Images/info(1).png')}style={{height:15,width:15}}/>
        </View>
      <View  style={{margin:7}}>
      <Text style={{color:'black',fontSize:17}}>About</Text></View>
      </View>
      <Divider style={styles.divider}/>


      <View style={{marginHorizontal:15}}>
        <Text style={{paddingTop:15,fontSize:17,color:'black'}}>Send Feedback </Text>
        <Text style={{paddingTop:15,fontSize:17,color:'black'}}>Report a Safety Emergency  </Text>
        <Text style={{paddingTop:15,fontSize:17,color:'black'}}>Rate us on the Play Store</Text>
        <Text style={{paddingTop:15,fontSize:17,color:'black'}}>Log Out </Text>

      </View>
      </View>
        </ScrollView>
        
    </SafeAreaView>

  )
}









function Statusbar({navigation}) {
  const search_image = require('../Images/search(1).png')
  const mike =require('../Images/voice.png')

  return (
   <>
        <SafeAreaView >

{/* -------------Status Bar ------------ */}
<View> 
         <StatusBar barStyle='dark-content' backgroundColor={'transparent'} />
      </View>
          {/* ------------ Location------------- */}
     <View >
          <View style={styles.container}>
              <Image style={styles.location} source={require("../Images/placeholder.png")} />
              <Text style={styles.locationtxt}>Location </Text>
              <Image source={require('../Images/arrow-down-sign-to-navigate.png') } style={{height:15,width:15,marginTop:10}}/>
              </View>
            <TouchableOpacity onPress={()=>{navigation.navigate('Profile')}}>
            <View style={{justifyContent:'flex-end'}}>
            <Image style={styles.location1} source={require('../Images/wine.png')} />
           </View>
           </TouchableOpacity>
  </View>


          {/* -------------Input box ----------- */}


         <View style={styles.search}  >
           <Image source={search_image} style={styles.searchicon}/>
           <TextInput  placeholder='Search Restaurant and dish' style={styles.searchtxt1} />
           <Divider orientation='vertical' style={{margin:7}}></Divider>
           <Image source={mike} style={[styles.mike]}/>
          </View>










    
     
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















const Stack = createStackNavigator()
function HomeStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Bar" component={Statusbar} options={{headerShown:false}}></Stack.Screen>
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}

export default HomeStack