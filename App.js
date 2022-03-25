import React from 'react'
import Statusbar from './components/Statusbar'
import Bottompart from './components/Bottompart'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './components/Stack'



const App = () => {

  return (
    <>
  
  <NavigationContainer>
  
        <Stack/>
  </NavigationContainer></>
  )
}
export default App;