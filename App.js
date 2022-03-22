import React from 'react'
import styles from './style'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image, TouchableOpacity, StatusBar } from 'react-native'
import DATA from './Flatlist/DATA'
import PHOTOS from './Flatlist/PHOTOS'
import Card from './components/Card'
import Statusbar from './components/Statusbar'
import Bottompart from './components/Bottompart'
import Grid from './components/Grid'
import Flatlist from './components/Flatlist'
import Screen from './components/Sscreen'
import { NavigationContainer } from '@react-navigation/native'
const App = () => {

  return (
    

  <NavigationContainer>
        <Bottompart />
  </NavigationContainer>
      
  )
}
export default App;