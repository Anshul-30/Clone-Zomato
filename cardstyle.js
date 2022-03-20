import React from 'react'
import{StyleSheet} from 'react-native'
import { create } from 'react-test-renderer'
const cards =create.StyleSheet(
    {
        card:{
            margin:10,
                justifyContent:'center',
            height:300,
            borderColor:'grey',
            borderRadius:15,
            backgroundColor:'white',
            elevation:5
        },
        iconimage:
        {
            height:20,
            width:20,
            marginTop:10,
            marginRight:15},
        text5:{
            fontWeight:'bold',
            color:'black',
            fontSize:18,
            marginLeft:15,
            marginTop:10
        },
        imagecard:
        {
        justifyContent:'center',
        height:200,
        width:340,
        borderTopLeftRadius:15,
        borderTopRightRadius:15
    },
    }
)
export default cards