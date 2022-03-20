import React from 'react'
import styles  from '../style'
import {View,ImageBackground,Text,FlatList,Image} from 'react-native'
// import User from './Food'
import CARD  from '../Flatlist/card'
const Card = ()=>
{
    return(
       <View >
           <FlatList 
           data={CARD}
           renderItem={(element)=>{
               return(
                
            <View style={styles.card} >
                    <View style={{alignItems:"center" ,flexDirection:'row'}}>
                        <Image source={element.item.url} style={styles.imagecard} />
                        <View style={{position:'absolute',left:15,top:15,height:20,width:70,backgroundColor:'black',opacity:.6,alignItems:'center',borderRadius:4}}>
                            <Text style={{color:'white',fontSize:13}}>{element.item.pro}</Text>
                            </View>
                        <View style={{height:30,width:30 ,position:'absolute',zIndex:500,backgroundColor:'black',opacity:.6,borderRadius:15,left:5,justifyContent:'center',alignItems:'center'}}>
                        <Image source={element.item.uri} style={{height:20,width:20, }}/></View>
                    <View style={{height:30,width:30,position:'absolute',zIndex:201,right:5,backgroundColor:'black',opacity:.6,borderRadius:15,alignItems:'center',justifyContent:'center'}}>
                        <Image source={element.item.left} style={{height:20,width:20 ,}}/>
                    </View></View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.text5}>{element.item.title}</Text>
                        <Image style={styles.iconimage}source={element.item.img}/>
                    </View>
                       
                </View>
            
               )
           }
        }/>
       </View>
    )
}
export default Card
