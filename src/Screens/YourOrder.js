import React from 'react'
import {Text,View} from 'react-native'




export default function YourOrder({route}) {
  const {name} = route.params
  return (
    <View>
        <Text style={{color:'black'}}>Your Order Screen</Text>
        <Text>{name}</Text>
        {/* <Text>{}</Text> */}
    </View>
  )
}
