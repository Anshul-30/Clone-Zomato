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
                
                <View style={{margin:10,justifyContent:'center',height:300,borderColor:'grey',borderRadius:15,backgroundColor:'white',elevation:5}} >
                    <View style={{alignItems:"center"}}>
                        <Image source={element.item.url} style={{justifyContent:'center',height:200,width:340,borderTopLeftRadius:15,borderTopRightRadius:15}} />
                       
                    </View>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold',color:'black',fontSize:18,marginLeft:5}}>{element.item.title}</Text>
                        <Image style={{height:20,width:20,marginTop:5,marginRight:5}}source={element.item.img}/>
                    </View>
                       
                </View>
            
               )
           }
        }/>
       </View>
    )
}
export default Card
