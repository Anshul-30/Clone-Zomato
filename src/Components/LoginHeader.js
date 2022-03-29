import React from 'react'
import {Text,View,Image,StatusBar,SafeAreaView,TextInput,ScrollView,TouchableOpacity} from 'react-native'
import Divider from 'react-native-divider'
import LoginPage from '../styles/LoginStyle'



export default function LoginHeader({navigation}) {
  return (
  <><ScrollView>
   <StatusBar barStyle='light-content'/>
   <Image source={require('../assets/images/Creative-fast-food-background-vector-design-01.jpg')} style={{width:'100%'}}/>
  <SafeAreaView>
   <View style={{marginHorizontal:40,marginVertical:30}}>
   <Text style={LoginPage.headertxt}>India's #1 Food Delivery and Dinning App</Text>
   
   </View>
   <View style={{marginHorizontal:30}}>
  <Divider orientation='center' >
    Log in or sign up
  </Divider></View>
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


    <View style={{justifyContent:'center',alignItems:'center',height:45,width:'85%',marginHorizontal:30,backgroundColor:'#F35265',borderRadius:10,marginVertical:20}}>
    <Text style={{color:'white',fontWeight:'600',fontSize:18}}>Continue</Text>
    </View>


    </TouchableOpacity>
    </View>
  <View style={{marginHorizontal:30}}>
  <Divider orientation='center' >
    or
  </Divider></View>
  <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <View style={{height:45,width:45,borderRadius:22.5,borderWidth:.3,borderColor:'grey',justifyContent:'center',alignItems:'center',margin:15}}>
      <Image source={require('../assets/images/google.png')} style={{height:20,width:20}}/>
    </View>
    <View style={{height:45,width:45,borderRadius:22.5,borderWidth:.3,borderColor:'grey',justifyContent:'center',alignItems:'center',margin:15}}>
      <Image source={require('../assets/images/option.png')} style={{height:20,width:20}}/>
    </View>
  </View>
  
  
  </SafeAreaView></ScrollView>
   </>
  )
}
