import React from 'react'
import { StyleSheet } from 'react-native'
const secondstyle = StyleSheet.create({
main:{
backgroundColor:"lightcyan",
height:150,width:150, 
borderRadius:75, 
justifyContent:"center"
},
mainimage:{
    height:120,
    width:120,
    position:"absolute",
    transform:[{rotate:'-20deg'}],
    marginLeft:15
},
text:{

    fontWeight:'bold',
    color:'black',
    fontSize:25,
    textAlign:'center',
    margin:10,
    marginBottom:0
},
text1:
{marginHorizontal:5,
    textAlign:'center',
    marginBottom:7,
    fontWeight:'500'
},
button:{
    padding:10,
    textAlign:"center",
    color:"white",
    fontSize:18
},
btn:{
    margin:15,
    backgroundColor:"#F35265",
    borderRadius:10
},
back:{
    height:50,
    width:50,
    borderRadius:25,
    alignItems:'center',
    backgroundColor:'gainsboro',
    justifyContent:'center'
},
text2:
{
    fontWeight:'bold',
color:'black',
fontSize:16
},
mainview:
{
    flex:.2 , 
    alignItems:"center",
justifyContent:"center"
},
})
export default secondstyle