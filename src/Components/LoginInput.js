import React from 'react'
import {Text,View,TouchableOpacity,Image,TextInput} from 'react-native'
import LoginPage from '../styles/LoginStyle'



export default function LoginInput({navigation}) {
  return (
    <View>
    <View style={LoginPage.container}>
         <View style={LoginPage.mainview}>
            <Image source={require('../assets/images/india.png')} style={{height:25,width:25}}/>
            <Image source={require('../assets/images/down-filled-triangular-arrow.png')} style={{height:20,width:20}}/>
        </View>
       <View style={LoginPage.number}>
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
