import React from 'react'
import{Text,View,Image,FlatList,TouchableOpacity} from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import Order from '../Components/Order'





export default function ProfileFlatlist({navigation}) {
function click(title)
{
  console.log(title.title)
  if(title.id === "1")
  navigation.navigate('Login')
  else
 if(title.id === "2")
   navigation.navigate('Login')
  
  
}


  return (
    <FlatList 
      data={Order}
      renderItem={(element)=>{
        return(
          <><TouchableOpacity onPress={()=>click(element.item)}>
          <View style={{flexDirection:'row',padding:10}}>
            <View style={Profilestyle.container}>
            <Image source={element.item.img} style={{height:15,width:15}}/>
            </View>
            <View style={{margin:7}}>
            <Text style={{color:'black',fontSize:17}}>{element.item.title}</Text></View>
          </View></TouchableOpacity>
          </>
        )
      }}
      />
  )
}
