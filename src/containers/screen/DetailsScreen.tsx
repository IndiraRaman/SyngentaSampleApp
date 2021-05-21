import * as React from 'react';
import {memo} from 'react';
import {WebView} from 'react-native-webview';

const DetailsScreen = ({route}) => {
// Passing link in navigation and getting it using params
  const link = route.params.path;

  return <WebView source={{uri: link}} />;
};

export default memo(DetailsScreen);
