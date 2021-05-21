import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { View, Text, Button, TouchableOpacity, FlatList, Image, ScrollView, Dimensions, SafeAreaView } from 'react-native'

import { useDispatch } from 'react-redux'
import { fetchFeedAsync } from 'src/actions/feedAction'
import { FeedDetails, Item } from 'src/models/FeedModal'
import useSelector from "../../utils/useSelector"
import styles from "../../styles/FeedScreenStyle"


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
            <View style={styles.renderStyle}>
                <TouchableOpacity onPress={() => { navigation.navigate("DetailsScreen",{path: item.link}) }}>
                    <View >
                        <Text style={styles.textStyle}>{item.title}</Text>
                        
                        <Image source={item.enclosure._url} style={{height: 15, width:15, }}/> 
                        <View style={styles.lineStyle}/>
                        <Text style={styles.textOneStyle}>{item.description}</Text>
                        
                    </View>
                    </TouchableOpacity>
               

            </View>
        )
    }



    return (
        <ScrollView style={styles.wrappingContainer}>
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




