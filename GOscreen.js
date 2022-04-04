import React from 'react'
import {Text,SafeAreaView}  from 'react-native'

function GOscreen({route}) {
  const {name , mail} = route.params
 
  return (
   <>
   <SafeAreaView>
     <Text>Phone Number</Text>
   <Text>{name}</Text>
<Text>{mail}</Text>
   </SafeAreaView>
   </>
  )
}

export default GOscreen