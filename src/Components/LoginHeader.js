import React from 'react'
import {Text,View,Image,StatusBar,SafeAreaView,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import Divider from 'react-native-divider'
import LoginPage from '../styles/LoginStyle'
import images from '../constants/imagepath'


export default function LoginHeader() {
  return (
  <>
  
  <ScrollView>
   <StatusBar barStyle='light-content' backgroundColor={'#a52a2a'}/>
   <Image source={images.header} style={{width:'100%'}}/>
  
  <SafeAreaView>

   <View style={LoginPage.headerview}>
          <Text style={LoginPage.headertxt}>India's #1 Food Delivery and Dinning App</Text>
   </View>


  
  </SafeAreaView>
  
  </ScrollView>
   </>
  )
}
