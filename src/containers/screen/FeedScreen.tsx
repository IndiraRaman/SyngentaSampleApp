import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  RefreshControl,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView} from 'react-native';
import ProgressDialog from "react-native-progress-dialog";
import { useDispatch } from 'react-redux';
import { fetchFeedAsync, setFeedProgress } from 'src/actions/feedAction';
import useSelector from '../../utils/useSelector';
import styles from '../../styles/FeedScreenStyle';
import { memo } from 'react';
import { Children, FeedDetails } from 'src/models/FeedModal';


const FeedScreen = () => {

  // using usestate hook for changing the value of progress
  const [refreshing, setRefreshing] = useState(false);
  
  // using useDispatch hook for dispatching action
  const dispatch = useDispatch();

  //Getting data from redux store using useSelector
  const Feed: FeedDetails = useSelector(state => state?.FeedState?.feed) as FeedDetails;
  
  useEffect(() => {
    // dispatching action
    dispatch(fetchFeedAsync.request());
    //setIsLoading(false)
    
      dispatch(setFeedProgress(true))
    
  }, []);

  // using splice to get desired data from FeedData and passing this data in my flatlist

  const FeedData: Children = Feed?.children?.[0].children?.splice(6,40)  as Children;
  
  // Refresh on pull
  const onFeedRefresh = useCallback(() => {
    // dispatching an action whenever feed is refreshed
    dispatch(fetchFeedAsync.request())
  }, []);

  // useNavigation hook for navigating to different screen
  const navigation = useNavigation();

  // FlatList render item
  const _renderItem = (({ item }) => {

 {/* using touchableOpacity so that on click navigate to
         DetailsScreen and passing link to show webview */}
    return (     
      <View style={styles.renderStyle}>      
        <TouchableOpacity
          onPress={() => {
            // passing link to DetailsScreen on navigation
            navigation.navigate('DetailsScreen', { path: item.children[2].value });
          }}>
          <View>
            <View style={styles.containerStyle}>
              <View style={styles.imageView}>
                <Image
                  // In uri passing the image url
                  source={require("../../../assets/images/placeholder.png")}
                  //source={{uri: item.children[4].attributes.url}}
                  style={styles.imageStyle}
                />
              </View>

              <View style={styles.textView}>
                {/* This text is used for showing title */}
                <Text style={styles.textStyle}>{item.children[0].value}</Text>
              </View>
            </View>

            <View style={styles.textOneView}>
              {/* This text is used for showing description */}
              <Text style={styles.textOneStyle}>{item.children[1].value}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <ScrollView
      // Refreshing Feed
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onFeedRefresh} />
      }
      style={styles.wrappingContainer}>
      <SafeAreaView>
       <ProgressDialog visible={Feed?.progress === true ? true:false}
       loaderColor = "black"/>
        <FlatList
          data={FeedData}
          renderItem={item => _renderItem(item)}
          keyExtractor={index => index.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default memo(FeedScreen);
