import React from 'react'
import { Text, View, FlatList, Image } from 'react-native'
import styles from '../../style'
import PHOTOS from './PHOTOS'







function Grid() {
  return (
    <>
     <View>
          <FlatList
            data={PHOTOS}
            renderItem={(element) => {
              return (
                <View style={styles.gridstyle}>
                  <Image style={styles.gridimage} source={element.item.url} />
                  <Text style={styles.text2} >{element.item.title}</Text>
                </View>
              )
            }
            }
            numColumns={4}
          />
        </View>
    </>
  )
}

export default Grid