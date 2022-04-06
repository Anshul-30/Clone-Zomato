import React from "react";

import Profile from "../Screens/Profile";
import Bottompart from "./Bottompart";
import navigationStrings from "./navigationStrings";
import Menu from "../Screens/Menu";
import YourOrder from "../Screens/YourOrder";
import About from "../Screens/About";
import Setting from "../Screens/Setting";




function Stack(Stack1) {
    return (
<>
         
            <Stack1.Screen name={navigationStrings.HOME} component={Bottompart} options={{ headerShown: false }} />
            <Stack1.Screen name={navigationStrings.PROFILE} component={Profile} options={{ headerShown: false }} />
            <Stack1.Screen name={navigationStrings.MENU} component={Menu}/>
            <Stack1.Screen name = {navigationStrings.ABOUT} component={About}/>
            <Stack1.Screen name={navigationStrings.SETTING} component={Setting}/>

            <Stack1.Screen name={navigationStrings.ORDER} component={YourOrder}/>
       </>

    )
}
export default Stack