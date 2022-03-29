import React from 'react'
import styles from '../styles/style'
import { Text, View, FlatList, Image } from 'react-native'
// import DATA from '../Flatlist/DATA'


const DATA=[
  {
    id:'1',
    name:'MAX Safety',
    url:require("../assets/images/check.png")
   
  },
  {
    id: '2',
    name:'Fast Delivery',
    // url:require("")
  },
  {
    id: '3',
    name:'Great Offers',
    url:require("../assets/images/discount(2).png")
  },
  {
    id: '4',
    name:'Rating 4.0+',
    // url:require("/Users/admin/Desktop/Project/Zomato/Images/download(1).jpeg")
  },
  {
      id:'5',
      name:'Cuisines',
      
  },
  {
    id:'6',
    name:'Pure Veg',
    url:require("../assets/images/salad.png")
},
{
  id:'7',
  name:'Pro',
  url:require("../assets/images/premium.png")
},
{
id:'8',
name:'New Arrivals',

},
{
id:'9',
name:'More',

}
]






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
            horizontal={true} 
          />
    </View>
  </>
  )
}

export default Flatlist