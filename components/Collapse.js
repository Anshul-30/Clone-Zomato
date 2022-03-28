import React, { useState } from 'react'
import {Collapse,CollapseHeader, CollapseBody} from 'accordion-collapse-react-native';
import {Text,View,Image} from'react-native'
import { FlatList } from 'react-native-gesture-handler';
import PHOTOS from '../Flatlist/PHOTOS';
import styles from '../style';




export default function Collapse1() {
  return (
    <>
   <Collapse  >
   <CollapseHeader >
   <View style={styles.seemore}>
           <Text style={styles.textmore}>see more</Text>
           <Image source={require('../Images/down.png')} style={{ height: 15, width: 15, marginTop: 11 }} />
         </View>
   </CollapseHeader>
   <CollapseBody>
  <CollapseHeader>
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
  </CollapseHeader>
   </CollapseBody>
  
   </Collapse>
   </>
  )
}
