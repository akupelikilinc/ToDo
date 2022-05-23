import React from 'react';
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./ToDo.styles";

const removeTask = () => {


    // const lastTask = [...task];
    // lastTask.splice(index, 1);
    // setTasks(lastTask);
};


const ToDo = ({ newtask }) => {

    return (
        <View>
            <TouchableOpacity style={styles.textBtn} /*onPress={removeTask}*/>
                <Text style={styles.textAdded}>{newtask}</Text>
            </TouchableOpacity>

        </View>

    );
}





export default ToDo;