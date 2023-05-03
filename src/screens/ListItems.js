import React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

function ListItems() {
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
    <View> 
        <FlatList
            data={tasks}
            keyExtractor={(element) => element.index} //I can use the index number of big element object.
            renderItem={(element) => (
            <Text style={styles.tasks}> {element.item.task} and number: {element.index} </Text>
            )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    tasks: {
        fontSize: 22,
        marginVertical: 50,
    }
})

export default ListItems