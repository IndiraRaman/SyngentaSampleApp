import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, Image, ScrollView, Dimensions, SafeAreaView } from 'react-native'

import { useDispatch } from 'react-redux'
import { fetchFeedAsync } from 'src/actions/feedAction'
import { FeedDetails, Item } from 'src/models/FeedModal'
import useSelector from "../../utils/useSelector"

const { height, width } = Dimensions.get("window")

const Welcome = () => {
    const dispatch = useDispatch()


    const FeedData: FeedDetails = useSelector(
        (state) => state?.feed?.feed
    )

    const data = FeedData?.rss?.channel?.item
    
    console.log("FeedData", FeedData)
    console.log("FeedData1", data)

    useEffect(() => {
        dispatch(fetchFeedAsync.request())
    }, [])


    const navigation = useNavigation()

    const _renderItem = ({item}) => {
        return (
            <View style={{  width: width, flex: 1, padding:16, backgroundColor:"#f8f8ff", elevation:8, marginTop:6, marginBottom:6   }}>
                <TouchableOpacity onPress={() => { navigation.navigate("DetailsScreen",{path: item.link}) }}>
                    <View >
                        <Text style={{ fontSize: 16, fontWeight: "bold" }}>{item.title}</Text>
                        
                        <Image source={item.enclosure._url} style={{height: 15, width:15, }}/> 
                        <View style={{borderBottomColor:"black", borderBottomWidth:2, marginBottom:8}}/>
                        <Text style={{ fontSize: 18, fontWeight: "500" }}>{item.description}</Text>
                        
                    </View>
                    </TouchableOpacity>
               

            </View>
        )
    }



    return (
        <ScrollView style={{ flex: 1 }}>
            <SafeAreaView >
                <FlatList
                    data={data}
                    renderItem={(item) => _renderItem(item)}
                    keyExtractor={(index) => index.toString()}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

export default Welcome;




