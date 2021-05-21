import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {View, Text} from 'react-native'
import {WebView} from "react-native-webview"
 

const DetailsScreen = ({route})=>{

    const link = route.params.path
    console.log("link---", link)
    const navigation = useNavigation()
    return(
        <View>
            <WebView source={{uri: link}}/>
           
        </View>
    )
}

export default DetailsScreen;