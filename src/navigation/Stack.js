import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screens/Profile";
import Bottompart from "./Bottompart";
import Login from '../Screens/Login'
import Home from "../Screens/Home";
import YourOrder from "../Screens/YourOrder";



const Stack1 = createStackNavigator();

function Stack() {
    return (

        <Stack1.Navigator>
           <Stack1.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack1.Screen name="Order" component={YourOrder}/>
            <Stack1.Screen name="Home" component={Bottompart} options={{ headerShown: false }} />
            <Stack1.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            
        </Stack1.Navigator>

    )
}
export default Stack