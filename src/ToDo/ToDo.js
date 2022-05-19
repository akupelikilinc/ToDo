import React from 'react';
import { View, Text } from "react-native";
import styles from "./ToDo.styles";

const ToDo = ({ newtask }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textAdded}>{newtask}</Text>
        </View>
    );
}


export default ToDo;