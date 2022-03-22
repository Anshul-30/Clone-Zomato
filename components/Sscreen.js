import React from 'react'
import {Image,View,Text,Button,FlatList} from'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Item from '../Flatlist/Item'
function Screen() {
  return (
    <>
  <View style={{alignItems:"center"}}>
      <View style={{backgroundColor:"lightcyan",height:150,width:150, borderRadius:75, justifyContent:"center"}}>
      <Image source={require('../Images/wallet(1).png')} style={{height:120,width:120,position:"absolute",transform:[{rotate:'-20deg'}],marginLeft:15}} />
      </View>
      <View>
      <Text style={{fontWeight:'bold',color:'black',fontSize:25,textAlign:'center',margin:10,marginBottom:0}}>
              Edition Wallet
          </Text>
          <Text numberOfLines={2} style={{marginHorizontal:5,textAlign:'center',marginBottom:7,fontWeight:'500'}}> Seamless one-click checkout for all payments on Zomato</Text>
      </View>
     
      </View>
      <View style={{margin:15,backgroundColor:"#F35265",borderRadius:10}}>
      {/* <Button title='Activate Wallet' color='#F35265'></Button> */}
        <Text style={{padding:10,textAlign:"center",color:"white"}}>Activate Wallet</Text>
      </View>
    <Divider width={8} style={{marginBottom:15}}/>
    <View>
        <FlatList 
        data={Item}
        renderItem={(element)=>{
            return(
                <>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:.2 , alignItems:"center",justifyContent:"center"}}>
                    <View style={{height:50,width:50,borderRadius:25,alignItems:'center',backgroundColor:'gainsboro',justifyContent:'center'}}>
                     <Image source={element.item.img} style={{height:30,width:30}}/>

                    </View>
                    </View>
                     <View style={{flex:0.7}}>
                     <Text style={{fontWeight:'bold',color:'black',fontSize:16}}>{element.item.title}</Text>
                     <Text numberOfLines={2}>{element.item.des}</Text>
                     </View>
                     
                  </View>
                <Divider width={.3} style={{margin:10,padding:5}}/> 
                </>
            )
        }}
        />
    </View>
    </>
  )
}

export default Screen