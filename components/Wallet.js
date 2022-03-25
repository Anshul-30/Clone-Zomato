import React from "react";
import Screen from "./Sscreen";
import{StatusBar,ScrollView,SafeAreaView,View} from 'react-native'
import Statusbar from "./Statusbar";




function Wallet(){
return(
    <>
    {/* ----------Status Bar -------- */}
      <View>
        <StatusBar barStyle='dark-content' backgroundColor={'transparent'} />
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