import React from 'react'
import styles from '../style'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image ,TouchableOpacity} from 'react-native'
import DATA from '../Flatlist/DATA'
function Flatlist() {
  return (
  <>
    <View >
          <FlatList showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={(element) => {
              return (
                <View style={styles.flatlist} >
                  <View>
                  <Image source={element.item.url} style={styles.try}/></View>
                  <View>
                  <Text numberOfLines={1} style={styles.searchtxt}>{element.item.name}</Text></View>
                </View>
              )
            }}
            keyExtractor={item => item.id}
            horizontal={true} />
        </View>
  </>
  )
}

export default Flatlist