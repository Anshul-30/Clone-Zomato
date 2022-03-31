import React from "react";

import Profile from "../Screens/Profile";
import Bottompart from "./Bottompart";
import Login from "../Screens/Login";
import Menu from "../Screens/Menu";
import YourOrder from "../Screens/YourOrder";
import About from "../Screens/About";





function Stack(Stack1) {
    return (
<>
         
            <Stack1.Screen name="Home" component={Bottompart} options={{ headerShown: false }} />
            <Stack1.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            <Stack1.Screen name="Menu" component={Menu}/>
            <Stack1.Screen name = "About" component={About}/>

            <Stack1.Screen name="Order" component={YourOrder}/>
       </>

    )
}
export default Stack