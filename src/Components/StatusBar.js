import React, { createRef, useState} from 'react'
import { Text, TextInput, View, Image ,TouchableOpacity, Alert} from 'react-native'
import styles from '../styles/style'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import ActionSheet ,{SheetManager}from 'react-native-actions-sheet'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import saved from './Address'





function showAlert(){
  Alert.alert(
    
    "Microphones Permission is not enabled"
  )
}



function Statusbar( {navigation}) {
  
function Show(){
  SheetManager.show("Action")
}

  const search_image = require('../assets/images/search(1).png')
  const mike =require('../assets/images/voice.png')

  return (
   <>
<View >

          {/* ------------ Location------------- */}
     <View >
          <View style={styles.container}>
            <TouchableOpacity  onPress={Show}  >
              <Image style={styles.location} source={require("../assets/images/placeholder.png")}/>
           </TouchableOpacity>
              <Text style={styles.locationtxt}>Location </Text>
              <Image source={require('../assets/images/arrow-down-sign-to-navigate.png') } style={{height:15,width:15,marginTop:10}}/>
              </View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <View style={{justifyContent:'flex-end'}}>
            <Image style={styles.location1} source={require('../assets/images/wine.png')} />
           </View>
           </TouchableOpacity>
  </View>


          {/* -------------Input box ----------- */}


         <View style={styles.search}  >
           <Image source={search_image} style={styles.searchicon}/>
           <TextInput  placeholder='Search Restaurant and dish' style={styles.searchtxt1} />
           <Divider orientation='vertical' style={{margin:7}}></Divider>
           <TouchableOpacity onPress={showAlert}>
           <Image source={mike} style={[styles.mike]}/>
           </TouchableOpacity>
          </View>



        </View>
        


        {/* ---------------------------ActionSheet-------------------------------*/}

        <ActionSheet id="Action">


        <View style={{left:0,right:0,height:'75%',borderTopLeftRadius:45,borderTopRightRadius:45}} >
         <View style={{height:'200%'}}>
              {/* ----------Header---------- */}
        <TouchableOpacity >
         <Text style={{margin:10,fontSize:20}}>Select a location</Text>
      </TouchableOpacity>


        <View style={styles.search}>
            <Image source={search_image} style={styles.searchicon}/>
            <TextInput  placeholder='Search Restaurant and dish' style={styles.searchtxt1} />
        </View>

            {/* -----------ScrollView start-------------- */}

            <View style={{paddingBottom:200}}>
            <ScrollView>

                <View style={{marginHorizontal:20}}>
                  <Text style={{color:'red' ,padding:10,paddingBottom:2}}> Use current location</Text>
                  <Text style={{color:'grey',padding:10,paddingTop:0}}> CDCL Building, 28B, Sector 28, chandigarh</Text>
                </View>


                <Divider style={{marginHorizontal:15}}/>


                <View style={{margin:10}}>
                      <Text style={{fontSize:17,padding:10,color:'black'}}>
                            Saved Addresses
                    </Text>
              {/* -----------Flatlist1---------- */}
                    <FlatList data ={saved}
                              renderItem={(element)=>{
                              return(
                                    <>
                                    <View style={{padding:10}}>
                                      <View style={{marginHorizontal:25,flexDirection:'row'}}>
                                        <Image source={require('../assets/images/845022.png')} style={{height:20,width:20,marginRight:25}}/>
                                        <Text style={{color:'black'}}>{element.item.title}</Text>
                                      </View> 
                                      <View style={{marginHorizontal:18,flexDirection:'row' }}>

                                        <Text style={{marginRight:12}}>{element.item.distance}</Text>
                                        <Text>{element.item.address}</Text>
                                      </View>
                                    </View>      
                                  <Divider style={{marginHorizontal:15}}/>
                                </>  )
                    }}/>

            </View>

            <View>
                  <Text style={{fontSize:17,padding:10,color:'black'}}>
                      Nearby locations
                  </Text>

                  {/* ---------Flatlist2----------- */}
                  <FlatList data ={saved}
                            renderItem={(element)=>{
                            return(
                              <>
                              <View style={{padding:10}}>
                              <View style={{marginHorizontal:25,flexDirection:'row'}}>
                                  <Image source={require('../assets/images/placeholder.png')} style={{height:20,width:20,marginRight:25}}/>
                                  <Text style={{color:'black'}}>{element.item.title}</Text>
                              </View> 
                                <View style={{marginHorizontal:18,flexDirection:'row' }}>
                                <Text style={{marginRight:12}}>{element.item.distance}</Text>
                                <Text>{element.item.address}</Text>
                              </View>
                            </View>
                            <Divider style={{marginHorizontal:15}}/>
                            </> )
                  }}/>
              </View>



            <View>
                    <Text style={{fontSize:17,padding:10,color:'black'}}>
                        Recent locations
                      </Text>
                    <FlatList data ={saved}
                              renderItem={(element)=>{
                              return(
                                      <>
                                      <View style={{padding:10}}>
                                          <View style={{marginHorizontal:25,flexDirection:'row'}}>
                                            <Image source={require('../assets/images/placeholder.png')} style={{height:20,width:20,marginRight:25}}/>
                                            <Text style={{color:'black'}}>{element.item.title}</Text>
                                          </View> 
                                          <View style={{marginHorizontal:18,flexDirection:'row' }}>
                                            <Text style={{marginRight:12}}>{element.item.distance}</Text>
                                            <Text>{element.item.address}</Text>
                                          </View>
                                        </View>
                                      <Divider style={{marginHorizontal:15}}/>
                                      </>)
                        }}/>
            </View>


            </ScrollView>
            </View>

            </View>
            </View>

            </ActionSheet>
   </>
  )
}


export default Statusbar

