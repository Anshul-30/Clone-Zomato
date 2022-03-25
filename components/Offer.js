import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {Text,View,SafeAreaView,Button} from 'react-native'



// import Bottompart from './Bottompart'
import Statusbar from './Statusbar'






function Offer({navigation}) {
  return (
    <SafeAreaView>
    <View>
        <Statusbar navigation={navigation} />
       
        
    </View>
    </SafeAreaView>
  )
}







export default Offer