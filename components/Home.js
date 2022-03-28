import React ,{useState} from "react";
import { Text, ScrollView, View, SafeAreaView, Image, StatusBar,TouchableOpacity,TextInput ,FlatList, Alert} from 'react-native'
// import Statusbar from './Statusbar'
import Grid from './Grid'
import Flatlist from './Flatlist'
import Card from "./Card";
import styles from "../style"
import { createStackNavigator } from "@react-navigation/stack";
import Collapse1 from "./Collapse";
import Bottompart from "./Bottompart";
import PHOTOS from "../Flatlist/PHOTOS";




const SeeMore =()=>{

  
  return(

    
    <FlatList
             data={PHOTOS}
           renderItem={(element) => {
               return (
                 <View style={styles.gridstyle}>
                   <Image style={styles.gridimage} source={element.item.url} />
                   <Text style={styles.text2} >{element.item.title}</Text>
                 </View>
               )
             }             }
             numColumns={4}
           />

    
  )
}
   



function Home({navigation}){
  const [showMenu, setShowMenu] = useState(false)
  const [text, setText] = useState('See More')
  const seeMore = () =>{
    if(!showMenu){
      setShowMenu(true)
    }
    else{
      setShowMenu(false)
    }
    if(text=='See More' ){
      setText('See Less')
    }else
    {
      setText('See More')
    }
  }
   
  
  
  return(
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
    {
          showMenu ? 
          <SeeMore />
          : null
        }
    <TouchableOpacity onPress={seeMore}>
    <View style={styles.seemore } >
           <Text style={styles.textmore} >{text}</Text>
           {/* <Image source={require('../Images/down.png')} style={{ height: 15, width: 15, marginTop: 11 }} /> */}
         </View></TouchableOpacity>
        
        
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