// All styles related to FeedScreen has been kept at one place
import { StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export default StyleSheet.create({
  renderStyle: {  
    flex: 1,
    width:width,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
    paddingTop: 15,
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
    width:width,
  },
  imageView: {
    marginRight:20,
    marginLeft:10,
    alignSelf: "center",
    position:"relative"   
  },
  textOneView: {
    padding:20,
    textAlign:"left"
  },
  textView: {
    marginLeft: 10,
    flex: 1,
    marginBottom: 10,
    alignSelf: "center"
  },
  containerStyle: {
    flex:1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 10,
    paddingLeft: 10,
  },
  imageStyle:{
    height: 120,
    width: 120,
  },
});
