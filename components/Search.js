import React from 'react'
import { Text ,View} from 'react-native'
import React,{createRef} from 'react'
import ActionSheet,{SheetManager} from 'react-native-actions-sheet'
import Statusbar from './Statusbar'





const actionsheet =[
    {
        menu:'sec 5'
    },
    {
        menu:'sec 7'
    }
]
const actionsheetref = createRef();

export default function Search() {
  return (
 <>
 
   <View>
       
       <ActionSheet>

       </ActionSheet>
   </View>

 </>
  )
}
