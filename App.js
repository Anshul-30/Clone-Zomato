import React from 'react'
import Statusbar from './components/Statusbar'
import Bottompart from './components/Bottompart'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'



const App = () => {

  return (
    <>
  <NavigationContainer>
        <Bottompart />
  </NavigationContainer></>
  )
}
export default App;