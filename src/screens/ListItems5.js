import React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

function ListItems5() {
    const tasks = [
        {task: "udemy react native", number: "1"},
        {task: "udemy flashloan", number: "2"},
        {task: "chat prediction bnb", number: "3"},
        {task: "chat immunefi", number: "4"},
        {task: "proxy contract", number: "5"},
        {task: "deutsch course", number: "6"},
        {task: "deutsch sentences", number: "7"},
        {task: "net ninja react native", number: "8"},
        {task: "ehu university", number: "9"},
    ]

    return (
        <View>
            <FlatList 
                keyExtractor={(eachtask) => eachtask.number}
                data={tasks}
                renderItem={(element) => {
                    return(
                        <Text>Task {element.item.number}: {element.item.task}</Text>
                    )
                }}
            />

        </View>
    )
}

export default ListItems5