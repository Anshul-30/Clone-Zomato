import React from 'react'
import{View,ScrollView} from 'react-native'
import LoginHeader from '../Components/LoginHeader'
import Divider from 'react-native-divider'
import LoginInput from '../Components/LoginInput'
import LoginGoogle from '../Components/LoginGoogle'


export default function Login({navigation}) {
  
  return (
 <>
 <ScrollView>
      <LoginHeader />
       <View style={{marginHorizontal:30,marginVertical:10}}>

            <Divider orientation='center'  >
                      Log in or sign up
              </Divider>
     </View>
    <LoginInput />
    
      <View style={{marginHorizontal:30}}>
          <Divider orientation='center' >
                    or
          </Divider>
    </View>

  <LoginGoogle/>
  </ScrollView>
 </>
  )
}
