import { StyleSheet } from "react-native";

export default StyleSheet.create(

    {
        mainContainer: {
            flex: 1,
            backgroundColor: "#102027",
        },
        titleArea: {
            flexDirection: 'row',
            justifyContent: "space-between",
        },
        titleText: {
            color: "#fea400",
            fontSize: 40,
            fontWeight: "bold",
            marginLeft: 20,
            marginTop: 20,
        },
        titleCounter: {
            color: "#fea400",
            fontSize: 40,
            fontWeight: "bold",
            marginTop: 20,
            marginRight: 20,
        },
        inputArea: {

        },
        Input: {
            color: '#fff',
            backgroundColor: '#3b7d58',
            margin: 16,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
        },
        textAddArea: {
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: 'blue',
            marginLeft: 15,
            marginRight: 15,
            height: 40

        },
        textAdd: {
            color: '#ccc',
            fontSize: 20,
            textAlign: 'center',
        },
    }

);