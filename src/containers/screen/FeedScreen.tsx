import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  RefreshControl,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {useDispatch} from 'react-redux';
import {fetchFeedAsync} from 'src/actions/feedAction';
import useSelector from '../../utils/useSelector';
import styles from '../../styles/FeedScreenStyle';
import {memo} from 'react';
import { FeedDetails } from 'src/models/FeedModal';

const FeedScreen = () => {

  // using usestate hook for changing the value of progress
  const [refreshing, setRefreshing] = useState(false);

  // using useDispatch hook for dispatching action
  const dispatch = useDispatch();

  

  useEffect(() => {
    // dispatching action
    dispatch(fetchFeedAsync.request());
  }, []);

  //Getting data from redux store using useSelector
  const FeedData: any = useSelector(state => state?.feed?.feed);


// using splice to get desired data from FeedData and passing this data in my flatlist
 const data = FeedData?.children[0]?.children.splice(6,40)
  
// setting timeout after which FeedData refresh progress will be false
  const timeOut = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  // Refresh on pull
  const onFeedRefresh = useCallback(() => {
    // dispatching an action whenever feed is refreshed
    dispatch(fetchFeedAsync.request())
    // During refresh setting progress ture and after 2000 ms setting it false
    setRefreshing(true);
    timeOut(2000).then(() => setRefreshing(false));
  }, []);

  // useNavigation hook for navigating to different screen
  const navigation = useNavigation();

  // FlatList render item
  const _renderItem = (({item}) => {
    
    return (
      <View style={styles.renderStyle}>
        {/* using touchableOpacity so that on click navigate to
         DetailsScreen and passing link to show webview */}
        <TouchableOpacity
          onPress={() => {
            // passing link to DetailsScreen on navigation
            navigation.navigate('DetailsScreen', {path: item.children[2].value});
          }}>
            <View>
          <View style={styles.containerStyle}>
           
            <View style={styles.imageView}>
            <Image
            // In uri passing the image url
              source={{uri: item.children[4].url}}
              style={styles.imageStyle}
            />
            </View>

             <View style={styles.textView}>
               {/* This text is used for showing title */}
            <Text style={styles.textStyle}>{item.children[0].value}</Text>
            </View>
            
            </View>

            <View style={styles.lineStyle} />

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
        <FlatList
          data={data}
          renderItem={item => _renderItem(item)}
          keyExtractor={index => index.toString()}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default memo(FeedScreen);
