import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {memo} from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from '../../styles/WelcomeStyle';

const Welcome = () => {
  const navigation = useNavigation();

  const slides = [
    {
      key: 1,
      text: 'Home',
      description: 'Welcome to Home',
      image: require('../../../assets/images/color.png'),
    },
    {
      key: 2,
      text: 'Feeds',
      description: 'Welcome to Feed',
      image: require('../../../assets/images/colorOne.png'),
    },
    {
      key: 3,
      text: 'Details',
      description: 'Welcome to Details',
      image: require('../../../assets/images/colorTwo.png'),
    },
  ];

  const RenderNextView = () => {
    return (
      <View>
        <Text style={styles.textStyle}>Next</Text>
      </View>
    );
  };

  const RenderPrevView = () => {
    return (
      <View>
        <Text style={styles.textStyle}>Back</Text>
      </View>
    );
  };
  return (
    <AppIntroSlider
      renderItem={({item}) => {
        return (
          <>
            <SafeAreaView style={styles.skipButton}>
              <TouchableOpacity
                onPress={() => navigation.navigate('FeedScreen')}>
                <Text style={styles.textStyle}>Skip</Text>
              </TouchableOpacity>
            </SafeAreaView>
            <View style={styles.imageContainer}>
              <Image source={item.image} />
            </View>
            <View style={styles.descriptionStyle}>
              <Text style={styles.textOneStyle}>{item.text}</Text>
            </View>
            <View style={styles.descriptionStyle}>
              <Text style={styles.textOneStyle}>{item.description}</Text>
            </View>
          </>
        );
      }}
      data={slides}
      renderNextButton={RenderNextView}
      bottomButton={false}
      showPrevButton={true}
      showDoneButton={false}
      renderPrevButton={RenderPrevView}
    />
  );
};

export default memo(Welcome);
