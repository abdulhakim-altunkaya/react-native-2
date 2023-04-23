import React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';

function ListItems() {
    const tasks = [
        {task: "udemy react native", key: "1"},
        {task: "udemy flashloan", key: "2"},
        {task: "chat prediction bnb", key: "3"},
        {task: "chat immunefi", key: "4"},
        {task: "proxy contract", key: "5"},
        {task: "deutsch course", key: "6"},
        {task: "deutsch sentences", key: "7"},
        {task: "net ninja react native", key: "7"},
    ]
  return (
    <View>
        <FlatList
            data={tasks}
            //keyExtractor={(element) => element.task} //If I have a property called "key", then no need of keyExtractor
            //And also, I can destructure element from (element) to ({elemenet})
            renderItem={({element}) => (
            <Text style={styles.tasks}> {element.task} and number: {element.key} </Text>
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