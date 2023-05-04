import React from 'react';
import { Text, View, StyleSheet, FlatList} from 'react-native';


function InitialScreen() {
  return (
    <View>
        <Text style={styles.text}>
            InitialScreen
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 22,
        marginVertical: 50,
        fontWeight: "bold",
    },
})

export default InitialScreen