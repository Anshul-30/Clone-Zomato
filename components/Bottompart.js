import React from 'react'
import { Text, ScrollView, TextInput, View, SafeAreaView, FlatList, Image ,TouchableOpacity} from 'react-native'
import styles from '../style'

function Bottompart() {
  return (
    <View style={styles.main}>

       <TouchableOpacity><View >
          <Image source={require('../Images/delivery-man.png')} style={styles.image1} />
          <Text style={{ marginLeft: 12 ,color:'black',fontSize:13}}>Delivery</Text>
        </View>
        </TouchableOpacity> 
        <TouchableOpacity>
        <View>
        <Image source={require('../Images/restaurant-cutlery-circular-symbol-of-a-spoon-and-a-fork-in-a-circle.png')} style={styles.image1} />
          <Text style={{ marginLeft: 12,color:'black',fontSize:13 }}>Dinning</Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View >
        <Image source={require('../Images/discount(2).png')} style={styles.image1} />
          <Text style={{ marginLeft: 15 ,color:'black',fontSize:13}}>Offer</Text>
        </View></TouchableOpacity>
        <TouchableOpacity>
        <View  >
        <Image source={require('../Images/wallet.png')} style={styles.image1} />
          <Text style={{ marginLeft: 13 ,color:'black',fontSize:13}}>Wallet</Text>
        </View>
        </TouchableOpacity>
      </View>
  )
}

export default Bottompart