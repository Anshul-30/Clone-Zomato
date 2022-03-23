import React from 'react'
import styles  from '../style'
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native'
import CARD  from '../Flatlist/card'
import { Divider } from 'react-native-elements/dist/divider/Divider'



const Card = ()=>
{
    return(
       <View >


           <FlatList 
           data={CARD}
           renderItem={(element)=>{
               return(
                
            <View style={[styles.card]} >
                    <View style={{alignItems:"center" ,flexDirection:'row',justifyContent:'center'}}>
                        <Image source={element.item.url} style={styles.imagecard} />
                        

                        <View style={styles.pro}>
                            <Text style={{color:'white',fontSize:13}}>{element.item.pro}</Text>
                        </View>


                        <View style={styles.fav}>
                            <Image source={element.item.fav} style={{height:15,width:15}}/>
                        </View>

                                
                        <View style={styles.leftarrow}><TouchableOpacity>
                        <Image source={element.item.left} style={{height:20,width:20, }}/></TouchableOpacity>
                        </View>



                    <View style={styles.rightarrow}><TouchableOpacity>
                        <Image source={element.item.uri} style={{height:20,width:20 ,}}/></TouchableOpacity>
                    </View>


                    <View style={styles.arrival}>
                        <Text style={{color:'black'}}>{element.item.arrival}</Text>
                    </View>


                    <View style={styles.offer}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={element.item.dis} style={styles.dis}/>
                            <Text style={{color:'white'}}>{element.item.offer1}</Text>
                        </View>
                        <View>
                            <Text style={{color:'white',textAlign:'center'}}>{element.item.offer2}</Text>
                        </View>
                    </View>

                    </View>

                 <View style={{flex:1}}>
                    <View style={{flex:.5,flexDirection:'row',justifyContent:'space-between'}}>
                        <Text style={styles.text5}>{element.item.title}</Text>
                        <Image style={styles.iconimage}source={element.item.img}/>
                    </View>

                    <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:15,marginRight:15}}>
                        <Text style={styles.text7}>{element.item.loc}</Text>
                        <Text style={styles.text7}>{element.item.price}</Text>
                    </View>

                        
                        {/* divider is element to draw horiztal or vertical line */}


                    <Divider width={0.3} style={{marginHorizontal:15,flex:.07}}></Divider>
                    <View style={{flex:.57}}>
                        <Text style={{marginLeft:15,marginTop:4,marginRight:15}}>{element.item.saf}</Text>
                    </View>
                    
                    </View>   
                </View>
            
               )
           }
        }/>
       </View>
    )
}
export default Card
