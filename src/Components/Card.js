import React from 'react'
import styles  from '../styles/style'
import {View,Text,FlatList,Image,TouchableOpacity} from 'react-native'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import images from '../constants/imagepath'
import navigationStrings from '../navigation/navigationStrings'
import colors from '../styles/colors'



const CARD=[
    {
        id:'1',
        url:images.burger,
        title:'Pizza Wings',
        img:images.star,
        uri:images.right_arrow,
        pro:'Promoted',
        fav:images.fav,
        left:images.left_arrow,
        arrival:'39 mins | 7 km',
        offer1:'15% OFF  ',
        offer2:'Up to rs 35',
        dis:images.discount,
        loc:'Fast Food',
        price:'rs 250 for one',
        saf:'Follow all Max Safety measures to ensure your food is safe'
    },
    {
        id:'2',
        url:images.kulcha,
        title:'Hotel Ambros',
        img:images.star,
        fav:images.fav,
        uri:images.right_arrow,
        left:images.left_arrow,
        pro:'Promoted',
        arrival:'39 mins | 7 km',
        offer1:'15% OFF',
        offer2:'Up to rs 35',
        dis:images.discount,
        loc:'Fast Food',
        price:'rs 250 for one',
        saf:'Follow all Max Safety measures to ensure your food is safe'
    },
    {
        id:'3',
        url:images.rolls,
        title:'Bingo (Parinary Garden)',
        img:images.star,
        fav:images.fav,
        uri:images.right_arrow,
        left:images.left_arrow,
        pro:'Promoted',
        arrival:'39 mins | 7 km',
        offer1:'10% OFF',
        offer2:'Up to rs 35',
        dis:images.discount,
        loc:'Fast Food',
        price:'rs 250 for one',
        saf:'Follow all Max Safety measures to ensure your food is safe'
    },
    {
        id:'4',
        url:images.paratha,
        title:'A Emporter',
        fav:images.fav,
        img:images.star,
        uri:images.right_arrow,
        left:images.left_arrow,
        pro:'Promoted',
        arrival:'39 mins | 7 km',
        offer1:'15% OFF',
        offer2:'Up to rs 35',
        dis:images.discount,
        loc:'Fast Food',
        price:'rs 250 for one',
        saf:'Follow all Max Safety measures to ensure your food is safe'
   
    },
    {
        id:'5',
        url:images.burger,
        title:'Hungry Hub',
        fav:images.fav,
        img:images.star,
        uri:images.right_arrow,
        left:images.left_arrow,
        pro:'Promoted',
        arrival:'39 mins | 7 km',
        offer1:'30% OFF ',
        offer2:'Up to rs 35',
        dis:images.discount,
        price:'rs 250 for one',
        loc:'Fast Food',
        saf:'Follow all Max Safety measures to ensure your food is safe'
    },]




const Card = ({navigation})=>
{

    function click(element){
            console.log(element.title)
            if(element.id === '1')
            navigation.navigate(navigationStrings.MENU)
    }
    return(
       <View >


           <FlatList 
           data={CARD}
           renderItem={(element)=>{
               return(
                <TouchableOpacity onPress={()=>click(element.item)} activeOpacity={.9}>
                 <View style={[styles.card]} >
                    <View style={styles.viewcard}>
                        <Image source={element.item.url} style={styles.imagecard} />
                        

                        <View style={styles.pro}>
                            <Text style={styles.protext}>{element.item.pro}</Text>
                        </View>


                        <View style={styles.fav}>
                            <Image source={element.item.fav} style={styles.favimg}/>
                        </View>

                                
                        <View style={styles.leftarrow}><TouchableOpacity>
                        <Image source={element.item.left} style={styles.leftarrowimg}/></TouchableOpacity>
                        </View>



                    <View style={styles.rightarrow}><TouchableOpacity>
                        <Image source={element.item.uri} style={styles.leftarrowimg}/></TouchableOpacity>
                    </View>


                    <View style={styles.arrival}>
                        <Text style={{color:colors.black}}>{element.item.arrival}</Text>
                    </View>


                    <View style={styles.offer}>
                        <View style={{flexDirection:'row'}}>
                            <Image source={element.item.dis} style={styles.dis}/>
                            <Text style={{color:colors.white}}>{element.item.offer1}</Text>
                        </View>
                        <View>
                            <Text style={{color:colors.white,textAlign:'center'}}>{element.item.offer2}</Text>
                        </View>
                    </View>

                    </View>

                 <View style={{flex:1}}>
                    <View style={styles.viewicon}>
                        <Text style={styles.text5}>{element.item.title}</Text>
                        <Image style={styles.iconimage}source={element.item.img}/>
                    </View>

                    <View style={styles.viewloc}>
                        <Text style={styles.text7}>{element.item.loc}</Text>
                        <Text style={styles.text7}>{element.item.price}</Text>
                    </View>

                        
                        {/* divider is element to draw horiztal or vertical line */}


                    <Divider width={0.3} style={styles.div}></Divider>
                    <View style={{flex:.57}}>
                        <Text style={[styles.saf,{color:colors.grey}]}>{element.item.saf}</Text>
                    </View>
                    
                    </View>   
                </View>
                </TouchableOpacity>
               )
           }
        }/>
       </View>
    )
}
export default Card
