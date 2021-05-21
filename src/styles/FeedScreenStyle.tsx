import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get("window")

export default StyleSheet.create({
    renderStyle: {
        width: width,
        flex: 1,
        padding: 16,
        backgroundColor: "#f8f8ff",
        elevation: 8,
        marginTop: 6,
        marginBottom: 6

    },
    textStyle: {
        fontSize: 16,
        fontWeight: "bold"
    },
    lineStyle: {
        borderBottomColor: "black",
        borderBottomWidth: 2,
        marginBottom: 8
    },
    wrappingContainer:{
        flex:1
    }

})