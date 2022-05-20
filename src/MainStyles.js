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
            color: 'black',
            backgroundColor: '#ccc',
            margin: 16,
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 10,
        },
        addBtn: {
            borderRadius: 10,
            justifyContent: 'center',
            backgroundColor: '#fea400',
            marginLeft: 15,
            marginRight: 15,
            height: 40,
            marginBottom: 20,


        },
        textAdd: {
            color: '#fff',
            fontSize: 20,
            textAlign: 'center',
        },
    }

);