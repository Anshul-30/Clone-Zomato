import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
export default function New({route}) {
    const {num} = route.params
  return (
  <>
  
  <SafeAreaView>
  <Text>Welcome</Text>
<Text>{num}</Text>
  </SafeAreaView>
  </>
  )
}
