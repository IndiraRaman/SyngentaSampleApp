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
import { useDispatch } from 'react-redux';
import { fetchFeedAsync } from 'src/actions/feedAction';
import useSelector from '../../utils/useSelector';
import styles from '../../styles/FeedScreenStyle';
import { memo } from 'react';
import { FeedDetails } from 'src/models/FeedModal';

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
    
  }, []);
  
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
                  // In Image url getting 404 response so for now using a placeholder image.
                  //source={{uri: item.children[4].attributes.url}}
                  style={styles.imageStyle}
                />
              </View>

              <View style={styles.textView}>
                {/* This text is used for showing title */}
                <Text style={styles.textStyle} key ={item}>{item.children[0].value}</Text>
              </View>
            </View>

            <View style={styles.textOneView}>
              {/* This text is used for showing description */}
              <Text style={styles.textOneStyle} key ={item}>{item.children[1].value}</Text>
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
        <FlatList
          data={Feed}
          renderItem={item => _renderItem(item)}
          keyExtractor={item => {return item.children[0].value}}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default memo(FeedScreen);
