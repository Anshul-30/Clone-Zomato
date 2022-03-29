import React from 'react'
import {Text,View,TouchableOpacity,Image,TextInput} from 'react-native'
import LoginPage from '../styles/LoginStyle'



export default function LoginInput({navigation}) {
  return (
    <View>
    <View style={{flexDirection:'row',marginHorizontal:30,justifyContent:'space-between'}}>
         <View style={{flexDirection:'row',height:50,width:70,borderWidth:.3,borderRadius:3,borderColor:'grey',alignItems:'center',justifyContent:'space-evenly'}}>
            <Image source={require('../assets/images/india.png')} style={{height:25,width:25}}/>
            <Image source={require('../assets/images/down-filled-triangular-arrow.png')} style={{height:20,width:20}}/>
        </View>
       <View style={{flexDirection:'row',alignItems:'center',height:50,width:'72%',borderWidth:.3,borderRadius:5,borderColor:'grey'}}>
           <Text style={{padding:10,color:'black'}}>+91</Text>
            <TextInput placeholder='Enter Phone Number'/>
        </View>
   </View>

  <TouchableOpacity onPress={()=>navigation.navigate('Home')}>

         <View style={LoginPage.continueview}>
             <Text style={{color:'white',fontWeight:'600',fontSize:18}}>Continue</Text>
          </View>

  </TouchableOpacity>

 </View>
  )
}
