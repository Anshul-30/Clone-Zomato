import React, { useState } from 'react'
import { Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native'
import styles from '../styles/style'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import saved from './Address'
import images from '../constants/imagepath'
import navigationStrings from '../navigation/navigationStrings'
import colors from '../styles/colors'
import actionsheet from '../styles/actionsheetStyle'



function showAlert() {
  Alert.alert(

    "Microphones Permission is not enabled"
  )
}



function Statusbar({ navigation }) {
  const [add, setAdd] = useState('CDCL Building, 28B, Sector 28, chandigarh')
  const [action, setAction] = useState(true)

  function Show() {
    SheetManager.show("Action")
  }
  function act() {
    if (!action)
      setAction(false)
    else
      setAction(true)
  }

  return (
    <>
      <View >

        {/* ------------ Location------------- */}
        <View >
          <View style={styles.container}>
            <TouchableOpacity onPress={Show}  >
              <Image style={styles.location} source={images.location} />
            </TouchableOpacity>
            <Text style={styles.locationtxt}>Location </Text>
            <Image source={images.down_arrow} style={{ height: 15, width: 15, marginTop: 10 }} />
          </View>

          <Text style={{ marginLeft: 33, color: 'black' }}>{add}</Text>


          <TouchableOpacity onPress={() => navigation.navigate(navigationStrings.PROFILE)}>
            <View style={{ justifyContent: 'flex-end' }}>
              <Image style={styles.location1} source={images.wine} />
            </View>
          </TouchableOpacity>
        </View>


        {/* -------------Input box ----------- */}


        <View style={styles.search}  >
          <Image source={images.search_image} style={styles.searchicon} />
          <TextInput placeholder='Search Restaurant and dish' style={styles.searchtxt1} />
          <Divider orientation='vertical' style={{ margin: 7 }}></Divider>
          <TouchableOpacity onPress={showAlert}>
            <Image source={images.mike} style={[styles.mike]} />
          </TouchableOpacity>
        </View>



      </View>



      {/* ---------------------------ActionSheet-------------------------------*/}

      <ActionSheet id="Action" >


        <View style={actionsheet.container} >
          <View style={{ height: '200%' }}>
            {/* ----------Header---------- */}
            <TouchableOpacity >
              <Text style={actionsheet.maintext}>Select a location</Text>
            </TouchableOpacity>


            <View style={styles.search}>
              <Image source={images.search_image} style={styles.searchicon} />
              <TextInput placeholder='Search Restaurant and dish' style={styles.searchtxt1} />
            </View>

            {/* -----------ScrollView start-------------- */}

            <View style={{ paddingBottom: 200 }}>
              <ScrollView>

                <View style={{ marginHorizontal: 20 }}>
                  <Text style={actionsheet.text}> Use current location</Text>
                  <Text style={actionsheet.loc}> {add}</Text>
                </View>


                <Divider style={{ marginHorizontal: 15 }} />


                <View style={{ margin: 10 }}>
                  <Text style={actionsheet.text1}>
                    Saved Addresses
                  </Text>
                  {/* -----------Flatlist1---------- */}
                  <FlatList data={saved}
                    renderItem={(element) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => [setAdd(element.item.address)]} >

                            <View style={{ padding: 10 }}>

                              <View style={actionsheet.loc1}>
                                <Image source={images.home} style={actionsheet.img} />
                                <Text style={{ color: colors.black }}>{element.item.title}</Text>
                              </View>

                              <View style={actionsheet.dis}>
                                <Text style={actionsheet.distext}>{element.item.distance}</Text>
                                <Text style={{ color: colors.grey }}>{element.item.address}</Text>
                              </View>

                            </View>
                            <Divider style={{ marginHorizontal: 15 }} /></TouchableOpacity>
                        </>)
                    }} />

                </View>

                <View style={{ margin: 10 }}>
                  <Text style={actionsheet.text1}>
                    Nearby locations
                  </Text>

                  {/* ---------Flatlist2----------- */}
                  <FlatList data={saved}
                    renderItem={(element) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => [setAdd(element.item.address)]}>

                            <View style={{ padding: 10 }}>

                              <View style={actionsheet.loc1}>
                                <Image source={images.location} style={actionsheet.img} />
                                <Text style={{ color: colors.black }}>{element.item.title}</Text>
                              </View>

                              <View style={actionsheet.dis}>
                                <Text style={actionsheet.distext}>{element.item.distance}</Text>
                                <Text style={{ color: colors.grey }}>{element.item.address}</Text>
                              </View>

                            </View>

                            <Divider style={{ marginHorizontal: 15 }} /></TouchableOpacity>
                        </>)
                    }} />
                </View>



                <View style={{ margin: 10 }}>
                  <Text style={actionsheet.text1}>
                    Recent locations
                  </Text>
                  <FlatList data={saved}
                    renderItem={(element) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => setAdd(element.item.address)} >

                            <View style={{ padding: 10 }}>

                              <View style={actionsheet.loc1}>
                                <Image source={images.location} style={actionsheet.img} />
                                <Text style={{ color: colors.black }}>{element.item.title}</Text>
                              </View>

                              <View style={actionsheet.dis}>
                                <Text style={actionsheet.distext}>{element.item.distance}</Text>
                                <Text>{element.item.address}</Text>
                              </View>

                            </View>
                            
                            <Divider style={{ marginHorizontal: 15 }} /></TouchableOpacity>
                        </>)
                    }} />
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

