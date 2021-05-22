import * as React from 'react';
import { memo } from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

const DetailsScreen = ({ route }) => {
  // Passing link in navigation and getting it using params
  const link = route.params.path;

  // using webview for showing the details

  return (
    <SafeAreaView style={{flex:1}}>
      <WebView source={{ uri: link }} />
    </SafeAreaView>
  )

};

export default memo(DetailsScreen);
