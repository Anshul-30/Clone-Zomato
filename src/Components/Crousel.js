import React from 'react'
import images from '../constants/imagepath'
import AppIntroSlider from 'react-native-app-intro-slider'
import PHOTOS from './PHOTOS'
import { Image, Text, View } from 'react-native'
import styles from '../styles/style'
import { FlatList } from 'react-native-gesture-handler'


const Data = [
    {
        id: '1',
        url: images.burger,
        // imageArray: [{
        //     key: '6',
        //     img: images.play
        // },
        // {
        //     key: '7',
        //     img: images.play
        // },
        // {
        //     key: '8',
        //     img: images.play
        // },
        // ]
    },
    {
        id: '2',
        url: images.burger,
        // imageArray: [{
        //     key: '6',
        //     img: images.play
        // },
        // {
        //     key: '7',
        //     img: images.about
        // },
        // {
        //     key: '8',
        //     img: images.fav
        // },
        // ]
    }
]


export default function AppIntro_Slider() {
    const RenderItem = ({ item }) => {
        return (
            <>
                <View style={{ backgroundColor: 'red' }}>
                    <Text >{item.id}</Text>
                    <Image source={item.url} style={{height:250}}/>
                </View>
            </>
        )

    }
    return (
        <>
            <AppIntroSlider
                data={Data}
                renderItem={RenderItem}
            />
        </>
    )
}