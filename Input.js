import React, { useState } from 'react'
import { View, TextInput, Button, Text, SafeAreaView } from 'react-native'



export default function Input({ navigation }) {
    const [text, setText] = useState('')
    const [show, setShow] = useState(false)
    const [email,setEmail] = useState('jh')


    const handleTextInput = (event) => {
        setText(() => event);
    }

    const handleText = () => {
        
        console.log(text)
        if (text.length < 10 || text.length > 10 ) {
            setShow(true)
            console.log(text)
        }
        
        else {
            setShow(false)
            navigation.navigate('GO',{name:text, mail:email})

        }
    
    }


    return (
        <SafeAreaView>
            <View>
                <TextInput placeholder="enter"  keyboardType="numeric" onChangeText={(event) => handleTextInput(event)} />
               <TextInput placeholder='Enter Email' onChangeText={(event)=> setEmail(event)} />
                <Button title="submit" onPress={handleText} />
                {show ?<View>
                    <Text>Enter correct Phone Number</Text>
                    <Text>Enter email</Text></View>
                    : null

                }
            </View></SafeAreaView>
    )
}
