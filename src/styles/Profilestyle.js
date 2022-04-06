import React from 'react'
import { StyleSheet } from 'react-native'
 


const Profilestyle = StyleSheet.create({

    image:{
        height:30,
        width:30,
        marginHorizontal:15,
        padding:10
    },
    main:{
    flexDirection:'row',
    marginTop:20,
    justifyContent:'space-between'
    },
    text1:{
        fontSize:30,
        fontWeight:'500',
        color:'black'
    },
    text:{
        margin:10, 
        height:70,
        justifyContent:'space-between'
    },
    container:{
        height:30,
        width:30,
        borderRadius:15, 
        backgroundColor:'#dee3e0',
        alignItems:'center',
        justifyContent:'center'
    },
    rating:{
        height:25,
        width:50,
        backgroundColor:'#dee3e0',
        borderRadius:8,
        alignItems:'center',
        marginHorizontal:15,
        flexDirection:'row',
        justifyContent:'space-around'
    },
    img:{
        height:20,
        width:20,
        marginBottom:10
    },
    img1:{
        marginLeft:10
    },
    viewscreen:{ flexDirection: 'column', padding: 8 },
    About:
    {
        flexDirection:'row',
        padding:10
    },
    screencontainer:{ flexDirection: 'row', margin: 13, justifyContent: 'space-around' },
    wineimg:{
        height:60,
        width:60,
    },
    playimg:{ 
        height:10, 
        width:10, 
        margin:4
    },
    viewwine:{
        height:80,
        width:80,
        borderRadius:40,
        backgroundColor:'wheat',
        alignItems:'center',
        justifyContent:'center',
        marginRight:20
    },
    

})
export default Profilestyle