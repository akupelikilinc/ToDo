import React, { useState } from "react";
import { View, SafeAreaView, Text, TextInput, TouchableOpacity, FlatList } from "react-native";
import ToDo from "./src/ToDo";
import mainStyles from "./src/MainStyles";


function App() {

    const [text, setText] = useState("");
    const [task, setTasks] = useState([]);

    const deliveryAdd = () => {
        setTasks([...task, text])
        setText("");
    };



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
                    onChangeText={(value) => { setText(value) }}

                />
            </View>
            <View>
                <TouchableOpacity style={mainStyles.textAddArea} onPress={deliveryAdd}>
                    <Text style={mainStyles.textAdd}>+ Görevi Ekle</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={task}
                renderItem={({ item }) => <ToDo newtask={item} />}
                keyExtractor={(item) => item + Date.now() + Math.random()}
            />
        </SafeAreaView>
    );
}

export default App;