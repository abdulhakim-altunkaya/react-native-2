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
    ]
  return (
    <View>
        <FlatList
            data={tasks}
            keyExtractor={(element) => element.task} //I can use the task itself as a key
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
    }
})

export default ListItems