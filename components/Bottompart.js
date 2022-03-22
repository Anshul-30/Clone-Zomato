import React from 'react'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image ,TouchableOpacity} from 'react-native'
import styles from '../style'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Screen from './Sscreen';
import Home from './Home';
import Wallet from './Wallet';
const Tab = createBottomTabNavigator();
function Bottompart() {
  return (
    
      <Tab.Navigator>
        <Tab.Screen  name="Delivery" component={Home} options={{headerShown:false}} />
        <Tab.Screen name= "Dinning" component={Wallet} options={{headerShown:false}}/>
        <Tab.Screen name ="Offer" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name="Wallet" component={Wallet} options={{headerShown:false}}/>
      </Tab.Navigator>
    
    
  )
}

export default Bottompart