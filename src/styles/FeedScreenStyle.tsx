// All styles related to FeedScreen has been kept at one place
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  renderStyle: {
    height: width * 280 / 375,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 6,
    backgroundColor: '#fffff0',
    elevation: 8,
    marginTop: 8,
    marginBottom: 8,
  },
  textStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000080',
    textAlign: "left",
    alignSelf: "flex-start",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  textOneStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#454545',

  },
  lineStyle: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 1
  },
  wrappingContainer: {
    flex: 1,
    margin: 10

  },
  imageView: {
    marginRight: 10,
    alignSelf: "baseline",
    marginTop: 10
  },
  textOneView: {
    paddingRight: 10,
    paddingLeft: 10
  },
  textView: {
    marginLeft: 10,
    flex: 1,
    marginBottom: 10,
    alignSelf: "center"
  },
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 10,
    height: width * 220 / 375
  },
  imageStyle:{
    height: 140,
    width: 120,
  },
});
