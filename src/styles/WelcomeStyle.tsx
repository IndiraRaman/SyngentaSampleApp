import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color:"#247DF7"
  },
  textOneStyle: {
    fontSize: 25,
    fontWeight: '500',
    color: '#F77524',
  },
  descriptionStyle: {
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'absolute',
    zIndex: 11,
    alignSelf: 'center',
    top: '16%',
  },
  skipButton: {
    position: 'absolute',
    zIndex: 9999,
    top: 20,
    right: 20,
  },
});
