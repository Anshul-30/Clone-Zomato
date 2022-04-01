import React from "react";
import Screen from "../Components/Sscreen";
import{StatusBar,ScrollView,SafeAreaView,View} from 'react-native'





function Wallet(){
return(
    <>
    {/* ----------Status Bar -------- */}
      <View>
        <StatusBar barStyle='dark-content' backgroundColor={'white'} />
      </View>



      <SafeAreaView style={{ flex: 1 }}>
      
      <ScrollView>
      <Screen/>
      </ScrollView>
      </SafeAreaView> 
      
    </>
)
}




export default Wallet