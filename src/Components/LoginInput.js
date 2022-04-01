import React, { useState ,useRef} from 'react'
import {Text,View,TouchableOpacity,Image,TextInput} from 'react-native'
import LoginPage from '../styles/LoginStyle'
import PhoneInput from "react-native-phone-number-input";
 


export default function LoginInput({navigation}) {
const [text, setText] = useState('')
const phoneInput = useRef<PhoneInput>(null);
  return (

    <View>
    <View style={LoginPage.container}>
         
       

        <PhoneInput
            placeholder='Enter phone number'
            containerStyle={{height:50,width:'99%',borderRadius:3}}
            withDarkTheme
            withShadow
            autoFocus
          />


       

      
        
   </View>
            <Text>{text}</Text>
  <TouchableOpacity onPress={()=>navigation.navigate('Home')} >

         <View style={LoginPage.continueview}>
             <Text style={{color:'white',fontWeight:'600',fontSize:18}}>Continue</Text>
          </View>

  </TouchableOpacity>

 </View>
  )
}
