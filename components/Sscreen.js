import React from 'react'
import {Image,View,Text,FlatList} from'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import Item from '../Flatlist/Item'
import secondstyle from '../Flatlist/Style/secondscreen'






function Screen() {
  return (
    <>


  <View style={{alignItems:"center"}}>
      <View style={secondstyle.main}>
          <Image source={require('../Images/wallet(1).png')} style={secondstyle.mainimage} />
      </View>

      <View>
            <Text style={secondstyle.text}>Edition Wallet</Text>
            <Text numberOfLines={2} style={secondstyle.text1}> Seamless one-click checkout for all payments on Zomato</Text>
      </View>
     
  </View>


        <View style={secondstyle.btn}>
            <Text style={secondstyle.button}>Activate Wallet</Text>
         </View>
        <Divider width={8} style={{marginBottom:15}}/>
        <View>
              <FlatList 
                 data={Item}
                 renderItem={(element)=>{
                  return(
                           <>
                           <View style={{flex:1,flexDirection:'row'}}>
                             

                               <View style={secondstyle.mainview}>
                                   <View style={secondstyle.back}>
                                      <Image source={element.item.img} style={{height:30,width:30}}/>

                                   </View>
                                 </View>


                             <View style={{flex:0.7}}>
                                  <Text style={secondstyle.text2}>{element.item.title}</Text>
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