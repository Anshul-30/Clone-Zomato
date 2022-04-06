import React, { useState, useRef } from 'react'
import { Text, View, TouchableOpacity, Image, TextInput } from 'react-native'
import LoginPage from '../styles/LoginStyle'
import PhoneInput from "react-native-phone-number-input";
import { continueLogin } from '../redux/action/auth';
import {useDispatch} from 'react-redux'



export default function LoginInput() {
  const dispatch = useDispatch();
  const [text, setText] = useState('')
  const [show, setShow] = useState(false)


  const phoneRegex = /^[0-9]{10}$/
  const number = () => {
    if (phoneRegex.test(text)) 
    {
      setShow(false)
      // navigation.navigate('New', { num: text })
      dispatch(continueLogin())
      
    }
    
    else 
    {
      setShow(true)
    }

  }

  return (

    <View>
      <View style={LoginPage.container}>

        <PhoneInput
        displayInitialValueAsLocalNumber={true}
          placeholder='Enter phone number'
          containerStyle={{ height: 70, width: '99%', borderRadius: 3 }}
          withDarkTheme
          withShadow
          autoFocus
          onChangeText={(value) => setText(value)}
          />

      </View>

      <TouchableOpacity onPress={number} >

        <View style={LoginPage.continueview}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Continue</Text>
        </View>

      </TouchableOpacity>

      {
        show ? <Text style={{ textAlign: 'center' }}>Invalid Phone Numbers</Text> : null
      }
    </View>
  )
}
