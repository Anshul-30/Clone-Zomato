import React from "react";
import Screen from "./Sscreen";
import{StatusBar,ScrollView,SafeAreaView,View} from 'react-native'
import Bottompart from "./Bottompart";
import Statusbar from "./Statusbar";
function Wallet(){
return(
    <>
      <View>
        <StatusBar barStyle='dark-content' backgroundColor={'transparent'} />
      </View>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Header start user defined components */}
      <Statusbar />
      <ScrollView>
    <Screen/>
    </ScrollView>
 
      </SafeAreaView> 
      
    </>
)
}
export default Wallet