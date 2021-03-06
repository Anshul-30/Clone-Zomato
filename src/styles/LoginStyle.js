import React from 'react'
import { StyleSheet } from 'react-native'

const LoginPage = StyleSheet.create({
    headertxt:{
        fontWeight:'bold',
        color:'black',
        fontSize:23,
        textAlign:'center', 
        fontWeight:'800'
    },
    headerview:{
        marginHorizontal:40,
        marginVertical:15
    },
    container:{
        flexDirection:'row',
        marginHorizontal:30,
        justifyContent:'space-between'
    },
    google:{
        height:45,
        width:45,
        borderRadius:22.5,
        borderWidth:.3,
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        margin:15
    },
    image:{
        height:20,
        width:20
    },
    number:{
        flexDirection:'row',
        alignItems:'center',
        height:50,
        width:'72%',
        borderWidth:.3,
        borderRadius:5,
        borderColor:'grey'
    },
    mainview:{
        flexDirection:'row',
        height:50,
        width:70,
        borderWidth:.3,
        borderRadius:3,
        borderColor:'grey',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    continueview:{
        justifyContent:'center',
        alignItems:'center',
        height:45,
        width:'85%',
        marginHorizontal:30,
        backgroundColor:'#F35265',
        borderRadius:10,
        marginVertical:15
    },
    logingoogleheader:{flexDirection:'row',justifyContent:'center',alignItems:'center'},
    logininputtext:{ color: 'white', fontWeight: '600', fontSize: 18 }
})
export default LoginPage