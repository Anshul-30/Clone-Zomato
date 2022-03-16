import React from 'react'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image ,TouchableOpacity} from 'react-native'
import styles from '../style'
import DATA from '../Flatlist/DATA'

function StatusBar() {
  return (
   <>
        <View>
          <View style={styles.container}>
            <Image style={styles.location} source={require("../Images/placeholder.png")} />
            
            <Text style={styles.locationtxt}>Location </Text>
            <Image source={require('../Images/arrow-down-sign-to-navigate.png') } style={{height:15,width:15,marginTop:15}}/>
            
            <Image style={styles.location1} source={require('../Images/wine.png')} />
         </View>
          <TextInput placeholder='Search Restaurant and dish'  style={styles.search} />
        </View>
        
   </>
  )
}

export default StatusBar