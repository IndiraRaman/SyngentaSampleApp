import * as React from 'react';
import {memo} from 'react';
import {WebView} from 'react-native-webview';

const DetailsScreen = ({route}) => {
  // Getting link from params
  const link = route.params.path;
  return <WebView source={{uri: link}} />;
};

export default memo(DetailsScreen);
