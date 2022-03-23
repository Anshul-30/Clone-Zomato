import React from 'react'
import {View,Image,Text,SafeAreaView,ScrollView,FlatList} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Order from '../Flatlist/Order'
import styles from '../style'
export default function Profile() {
  return (
    <SafeAreaView>
    
        
            <Image style={{height:30,width:30,marginHorizontal:15,padding:10}} source={require("../Images/left-arrow.png")}/>
        
        
        <View style={{flexDirection:'row',marginTop:20,justifyContent:'space-between'}}>
            <View style={{margin:10, height:70,justifyContent:'space-between'}}>
              <Text style={{fontSize:30,fontWeight:'500'}}>111111</Text>
              <View style={{flexDirection:'row',marginLeft:10}}>
              <Text style={{color:'red',fontSize:13}}>View activity</Text>
              <Image source={require('../Images/play.png')} style={{height:10,width:10,margin:4}}/>
              </View>
            </View>
            <View style={{height:80,width:80,borderRadius:40,backgroundColor:'wheat',alignItems:'center',justifyContent:'center',marginRight:20}}>
            <Image source={require('../Images/wine.png')} style={{height:60,width:60,}}/> 
            </View>
          
        </View>
        <Divider width={0.4} style={styles.divider}/>
        <ScrollView>
        <View style={{flexDirection:'row',margin:13,justifyContent:'space-around'}}>
        <View style={{flexDirection:'column',padding:8}}>
        <View style={{alignItems:'center'}} >
          <Image  source={require('../Images/like.png')} style={{marginBottom:10,height:20,width:20}}/></View>
          <Text>Likes</Text>
        </View>
        <View style={{flexDirection:'column',padding:8}}>
          <View style={{alignItems:'center'}} >
          <Image  source={require('../Images/bell.png')} style={{height:20,width:20,marginBottom:10}}/>
        </View >
          <Text>Notification</Text>
        </View>
        <View style={{flexDirection:'column',padding:8}}>
        <View style={{alignItems:'center'}} >
          <Image  source={require('../Images/setting.png')} style={{height:20,width:20,marginBottom:10}}/></View>
          <Text>Settings</Text>
        </View>
        <View style={{flexDirection:'column' ,padding:8}}>
        <View style={{alignItems:'center'}} >
          <Image  source={require('../Images/credit-card.png')} style={{height:20,width:20,marginBottom:10}}/></View>
          <Text>Payment</Text>
        </View>
        </View>
        <Divider width={0.4} style={styles.divider}/>
        <View style={{flexDirection:'row',padding:8,justifyContent:'space-between'}}>
          <View style={{flexDirection:'row'}}>
          <View style={{height:30,width:30,borderRadius:15,backgroundColor:'#dee3e0',justifyContent:'center',alignItems:'center',marginLeft:10}}>
          <Image source={require('../Images/star(1).png')} style={{height:20,width:20,}}/></View>
        <View style={{padding:7,marginLeft:10}}>
          <Text style={{fontSize:15}}>
            Your Rating
          </Text></View></View>
          <View style={{height:25,width:50,backgroundColor:'#dee3e0',borderRadius:8,alignItems:'center',marginHorizontal:15,flexDirection:'row',justifyContent:'space-around'}}>
         <Text>
           5.0
         </Text>
          <Image source={require('../Images/star(2).png')} style={{ height:15,width:15}}/></View>
        </View>
        <Divider width={0.4} style={styles.divider} />
        <View style={{padding:15}}>
          <Text style={{color:'grey'}}>FOOD ORDERS</Text>
        </View>
      <FlatList 
      data={Order}
      renderItem={(element)=>{
        return(
          <>
          <View style={{flexDirection:'row',padding:10}}>
            <View style={{height:30,width:30,borderRadius:15, backgroundColor:'#dee3e0',alignItems:'center',justifyContent:'center'}}>
            <Image source={element.item.img} style={{height:15,width:15}}/></View>
            <View style={{margin:7}}>
            <Text >{element.item.title}</Text></View>
          </View>
          </>
        )
      }}
      />
      <Divider style={styles.divider}/>
      <View style={{flexDirection:'row',padding:10}}>
        <View style={{height:30,width:30,borderRadius:15, backgroundColor:'#dee3e0',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../Images/badge.png')}style={{height:17,width:17}}/>
        </View>
      <View  style={{margin:7}}>
      <Text>Zomato Pro</Text></View>
      </View>
      <Divider style={styles.divider}/>
      <View style={{padding:15}}>
          <Text style={{color:'grey'}}>TABLE BOOKINGS</Text>
        </View>
        <FlatList 
      data={Order}
      renderItem={(element)=>{
        return(
          <>
          <View style={{flexDirection:'row',padding:10}}>
            <View style={{height:30,width:30,borderRadius:15, backgroundColor:'#dee3e0',alignItems:'center',justifyContent:'center'}}>
            <Image source={element.item.img} style={{height:15,width:15}}/></View>
            <View style={{margin:7}}>
            <Text >{element.item.title}</Text></View>
          </View>
          </>
        )
      }}
      />
        <Divider style={styles.divider}/>
      <View style={{flexDirection:'row',padding:10}}>
        <View style={{height:30,width:30,borderRadius:15, backgroundColor:'#dee3e0',alignItems:'center',justifyContent:'center'}}>
          <Image source={require('../Images/info(1).png')}style={{height:15,width:15}}/>
        </View>
      <View  style={{margin:7}}>
      <Text>About</Text></View>
      </View>
      <Divider style={styles.divider}/>
      <View style={{marginHorizontal:15}}>
        <Text style={{paddingTop:15}}>Send Feedback </Text>
        <Text style={{paddingTop:15}}>Report a Safety Emergency  </Text>
        <Text style={{paddingTop:15}}>Rate us on the Play Store</Text>
        <Text style={{paddingTop:15}}>Log Out </Text>

      </View>
        </ScrollView>
        
    </SafeAreaView>

  )
}
