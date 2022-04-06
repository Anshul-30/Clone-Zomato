import React, {  useState } from 'react'
import { Text, TextInput, View, Image, TouchableOpacity, Alert } from 'react-native'
import styles from '../styles/style'
import { Divider } from 'react-native-elements/dist/divider/Divider'
import ActionSheet, { SheetManager } from 'react-native-actions-sheet'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import saved from './Address'
import images from '../constants/imagepath'
import navigationStrings from '../navigation/navigationStrings'
import colors from '../styles/colors'




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


        <View style={{ left: 0, right: 0, height: '75%', borderTopLeftRadius: 45, borderTopRightRadius: 45 }} >
          <View style={{ height: '200%' }}>
            {/* ----------Header---------- */}
            <TouchableOpacity >
              <Text style={{ margin: 10, fontSize: 20, color: 'black' }}>Select a location</Text>
            </TouchableOpacity>


            <View style={styles.search}>
              <Image source={images.search_image} style={styles.searchicon} />
              <TextInput placeholder='Search Restaurant and dish' style={styles.searchtxt1} />
            </View>

            {/* -----------ScrollView start-------------- */}

            <View style={{ paddingBottom: 200 }}>
              <ScrollView>

                <View style={{ marginHorizontal: 20 }}>
                  <Text style={{ color: 'red', padding: 10, paddingBottom: 2 }}> Use current location</Text>
                  <Text style={{ color: 'grey', padding: 10, paddingTop: 0 }}> {add}</Text>
                </View>


                <Divider style={{ marginHorizontal: 15 }} />


                <View style={{ margin: 10 }}>
                  <Text style={{ fontSize: 17, padding: 10, color: 'black' }}>
                    Saved Addresses
                  </Text>
                  {/* -----------Flatlist1---------- */}
                  <FlatList data={saved}
                    renderItem={(element) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => [setAdd(element.item.address)]} >
                            <View style={{ padding: 10 }}>
                              <View style={{ marginHorizontal: 25, flexDirection: 'row' }}>
                                <Image source={images.home} style={{ height: 20, width: 20, marginRight: 25 }} />
                                <Text style={{ color: colors.black }}>{element.item.title}</Text>
                              </View>
                              <View style={{ marginHorizontal: 18, flexDirection: 'row' }}>

                                <Text style={{ marginRight: 12, color: 'grey' }}>{element.item.distance}</Text>
                                <Text style={{ color: colors.grey }}>{element.item.address}</Text>
                              </View>
                            </View>
                            <Divider style={{ marginHorizontal: 15 }} /></TouchableOpacity>
                        </>)
                    }} />

                </View>

                <View>
                  <Text style={{ fontSize: 17, padding: 10, color: 'black' }}>
                    Nearby locations
                  </Text>

                  {/* ---------Flatlist2----------- */}
                  <FlatList data={saved}
                    renderItem={(element) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => [setAdd(element.item.address)]}>

                            <View style={{ padding: 10 }}>
                              <View style={{ marginHorizontal: 25, flexDirection: 'row' }}>
                                <Image source={images.location} style={{ height: 20, width: 20, marginRight: 25 }} />
                                <Text style={{ color: colors.black }}>{element.item.title}</Text>
                              </View>
                              <View style={{ marginHorizontal: 18, flexDirection: 'row' }}>
                                <Text style={{ marginRight: 12, color: 'grey' }}>{element.item.distance}</Text>
                                <Text style={{ color: colors.grey }}>{element.item.address}</Text>
                              </View>
                            </View>
                            <Divider style={{ marginHorizontal: 15 }} /></TouchableOpacity>
                        </>)
                    }} />
                </View>



                <View>
                  <Text style={{ fontSize: 17, padding: 10, color: 'black' }}>
                    Recent locations
                  </Text>
                  <FlatList data={saved}
                    renderItem={(element) => {
                      return (
                        <>
                          <TouchableOpacity onPress={() => setAdd(element.item.address)} >

                            <View style={{ padding: 10 }}>
                              <View style={{ marginHorizontal: 25, flexDirection: 'row' }}>
                                <Image source={images.location} style={{ height: 20, width: 20, marginRight: 25 }} />
                                <Text style={{ color: colors.black }}>{element.item.title}</Text>
                              </View>
                              <View style={{ marginHorizontal: 18, flexDirection: 'row' }}>
                                <Text style={{ marginRight: 12, color: 'grey' }}>{element.item.distance}</Text>
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

