import React from 'react'
import { Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import Profilestyle from '../styles/Profilestyle'
import Order from '../Components/Order'
import navigationStrings from '../navigation/navigationStrings'
import styles from '../styles/style'
import colors from '../styles/colors'





export default function ProfileFlatlist({ navigation }) {

  function click(title) {
    // console.log(title.title)
    switch (title.id) {
      case '1':
        navigation.navigate(navigationStrings.ORDER, { name: title.title })
        break;
      case '2':
        navigation.navigate(navigationStrings.ORDER, { name: title.title })
    }



  }


  return (
    <FlatList
      data={Order}
      renderItem={(element) => {
        return (
          <><TouchableOpacity onPress={() => click(element.item)}>
            <View style={{ flexDirection: 'row', padding: 10 }}>
              <View style={Profilestyle.container}>
                <Image source={element.item.img} style={styles.favimg} />
              </View>
              <View style={{ margin: 7 }}>
                <Text style={styles.comontext}>{element.item.title}</Text></View>
            </View></TouchableOpacity>
          </>
        )
      }}
    />
  )
}
