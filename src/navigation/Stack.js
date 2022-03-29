import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../Screens/Profile";
import Bottompart from "./Bottompart";

const Stack1 = createStackNavigator();

function Stack() {
    return (

        <Stack1.Navigator>
            <Stack1.Screen name="Home" component={Bottompart} options={{ headerShown: false }} />
            <Stack1.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
           

        </Stack1.Navigator>

    )
}
export default Stack