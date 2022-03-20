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
                        <View style={styles.pro}>
                            <Text style={{color:'white',fontSize:13}}>{element.item.pro}</Text>
                            </View>
                            <View style={styles.fav}>
                                <Image source={element.item.fav} style={{height:15,width:15}}/>
                                </View>
                        <View style={styles.leftarrow}>
                        <Image source={element.item.uri} style={{height:20,width:20, }}/>
                        </View>
                    <View style={styles.rightarrow}>
                        <Image source={element.item.left} style={{height:20,width:20 ,}}/>
                    </View>
                    <View style={styles.arrival}>
                        
                        <Text style={{color:'black'}}>{element.item.arrival}</Text>
                        </View>
                        <View style={styles.offer}>
                        <Image source={element.item.dis} style={styles.dis}/>
                           <Text style={{color:'white'}}>{element.item.offer}</Text>
                            </View>
                    </View>
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
