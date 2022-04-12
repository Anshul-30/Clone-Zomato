import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import Order from '../Components/Order'
import navigationStrings from '../navigation/navigationStrings'
import styles from '../styles/style'
 




export default function ProfileFlatlist({ navigation }) {

  function click(title) {
    // console.log(title.title)
    switch (title.key) {
      case '1':
        navigation.navigate(navigationStrings.ORDER, { name: title.title })
        break;
      case '2':
        navigation.navigate(navigationStrings.ORDER, { name: title.title })
    }



  }


  return (
    <>
      {
        Order.map((item) => {
          return (
            <><TouchableOpacity onPress={() => click(item)}>
              <View style={Profilestyle.About}>
                <View style={Profilestyle.container}>
                  <Image source={item.img} style={styles.favimg} />
                </View>
                <View style={{ margin: 7 }}>
                  <Text style={styles.comontext}>{item.title}</Text></View>
              </View></TouchableOpacity>
            </>
          )

        })
      }

    </>
    
  )
}
