import React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

function ListItems4() {
    const tasks = [
        {task: "udemy react native"},
        {task: "udemy flashloan"},
        {task: "chat prediction bnb"},
        {task: "chat immunefi"},
        {task: "proxy contract"},
        {task: "deutsch course"},
        {task: "deutsch sentences"},
        {task: "net ninja react native"},
        {task: "ehu university"},
    ]

    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={tasks}
                keyExtractor={(eachtask)=> eachtask.task}
                renderItem={({item}) => {
                    return <Text style={styles.tasks}>:  {item.task} </Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:25,
    },

    tasks: {
        fontSize: 22,
        marginVertical: 45,
    }
})

export default ListItems4

/*
                renderItem={({item}) => {
                    return <Text>:  {item.task} </Text>
                }}
                renderItem={({item}) => (
                    <Text>:  {item.task} </Text>
                )}
                renderItem={(element) => {
                    return <Text>{element.index}:  {element.item.task} </Text>
                }}

*/