import React from 'react'
import { Dimensions } from "react-native";
const {height,width} = Dimensions.get('window');
import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    try:{
        height:width/20,
        width:width/20
    },
    imagecard:{
        marginTop:10,
        marginRight:5,
        height:width/15,
        width:width/15
    },
    bckimg:{
        height: width/1.9,
        width: width/1.1,
        
        
        borderWidth:1,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        // resizeMode:'contain'
        
    },
    locationtxt:{
        marginTop:6,
        color:'red',
        fontWeight:'bold',
        fontSize:20
    },
    container:{
        flexDirection:'row',
        marginTop:10,
       
        
    },
    location:{
        height:width/15,
        width:width/15,
        marginTop:12,
        marginHorizontal:8

    },
    location1:{
        height:width/15,
        width:width/15,
        // justifyContent:'flex-end',
        position:'absolute',
        right:10,
        top:10

    },
    search:{
        // width:width/1.1,
        marginVertical:20,
        // height:width/12,
        width:'95%',
        marginLeft:10,
        
        borderColor:'grey',
        borderWidth:0.3,
        paddingHorizontal:10,
        borderRadius:10
    },
    searchtxt:{
        textAlign: 'center', 
        fontSize: 12,
        width:'100%' ,
        color:'black',
        
    },
    flatlist:{
        width:width/3.5,
        borderWidth:0.3,
        padding:10,
        marginHorizontal:10,
        // marginVertical:10,
        marginBottom:10,
        borderRadius:10,
        borderColor:'grey',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    images:{
        flexDirection:'row',
        height:width/3,
        width:width/1.09,
        marginTop:0,
        margin:12,
        // marginRight:0,
        // marginVertical:10,
        // marginHorizontal:5,
        borderWidth:1
        
    },
    
    image:{
       height:100,
        width:160,
    marginRight:8,
    marginLeft:8,
        borderRadius:20
    },
    text1:{
        color:'black',
        fontWeight:'bold',
        fontSize:22
       
    },
    text:{
        // color:'red',
        fontSize:22
    },
    gridstyle:{
        width:width/5,
        height:width/3.5,
        // borderWidth:1,
        marginLeft:width/22,
        justifyContent:'center'
    },
    gridimage:{
        width:width/6,
        height:width/6,
        borderRadius:(width/6)/2,
        // marginHorizontal:17,
        // marginVertical:15
    },
    text2:{
        // textAlign:'center',
        fontWeight:'600',
        marginHorizontal:10,
        marginVertical:10
    },
    seemore:{
        
        margin:15,
        width:'90%',
        borderRadius:5,
        borderWidth:0.3,
        borderColor:'grey',
        flexDirection:"row",
        justifyContent:"center"
        
    },
    textmore:{
        textAlign:'center',
        fontSize:15,
        padding:7,
        color:'black'

    },
    text3:{
        fontSize:17,
        fontWeight:'bold',
        margin:10,
        color:'black'

    },
    
    text4:{
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold'

    },
    image1:{
        height:width/12,
        width:width/12,
       marginLeft:20,
       marginRight:20,
        marginTop:5
    },
    main:{
        
        height:'43%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    
    image2:{
        height:width/15,
        width:width/15,
        position:"absolute", 
        zIndex:201,
        marginTop:20,
        marginRight:20
    }
})
   
export default styles;