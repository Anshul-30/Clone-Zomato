import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import {Text,View,SafeAreaView,Button} from 'react-native'



// import Bottompart from './Bottompart'
import Statusbar from './Statusbar'






function Offer() {
  return (
    <SafeAreaView>
    <View>
        <Statusbar />
       
        
    </View>
    </SafeAreaView>
  )
}





// const stack = createStackNavigator()

// function OfferStack(){
//   return(
// <stack.Navigator>
//   <stack.Screen name='Offer' component={Offer} options={{headerShown:false}}></stack.Screen>
// </stack.Navigator>
//   )
// }

export default Offer