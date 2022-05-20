import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import ToDo from "./src/ToDo";
import mainStyles from "./src/MainStyles";


function App() {

    const [text, setText] = useState("");
    const [task, setTasks] = useState([]);

    const deliveryAdd = () => {
        !setTasks([...task, text])
        setText("");
    };

    const taskList = ({ item }) => <ToDo newtask={item} />;


    return (
        <SafeAreaView style={mainStyles.mainContainer}>
            <View style={mainStyles.titleArea}>
                <Text style={mainStyles.titleText}> Yapılacaklar </Text>
                <Text style={mainStyles.titleCounter}> 0 </Text>
            </View>
            <View style={mainStyles.inputArea}>
                <TextInput
                    style={mainStyles.Input}
                    placeholder="Görev Yaz!"
                    value={text}
                    onChangeText={setText}

                />
            </View>
            <View>
                <TouchableOpacity style={mainStyles.addBtn} onPress={deliveryAdd}>
                    <Text style={mainStyles.textAdd}>+ Görevi Ekle</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={task}
                renderItem={taskList}
                keyExtractor={(item) => item + Date.now() + Math.random()}
            />
        </SafeAreaView>
    );
}

export default App;