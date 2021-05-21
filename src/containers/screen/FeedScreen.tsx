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

const FeedScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

//Getting data from redux store using useSelector
  const FeedData: any = useSelector(state => state?.feed?.feed);

  const data = FeedData?.rss?.channel?.item;

  useEffect(() => {
    // dispatching action
    dispatch(fetchFeedAsync.request());
  }, []);

  const wait = (timeout: number) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };

  // Refresh on pull
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  // useNavigation hook for navigating to different screen
  const navigation = useNavigation();

  // FlatList render item
  const _renderItem = ({item}) => {
    return (
      <View style={styles.renderStyle}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('DetailsScreen', {path: item.link});
          }}>
          <View>
            <Text style={styles.textStyle}>{item.title}</Text>

            <Image
              source={item.enclosure._url}
              style={{
                height: 15,
                width: 15,
              }}
            />
            <View style={styles.lineStyle} />
            <Text style={styles.textOneStyle}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
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
