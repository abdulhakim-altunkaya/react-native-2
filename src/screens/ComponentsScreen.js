import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function ComponentsScreen() {
  const myName = "Abdulhakim";

  return (
    <View>
      <Text style={styles.text1}>
        Getting Started with React Native
      </Text>
      <Text style={styles.text2}>
        My Name is {myName}     
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text1: {
    fontSize: 45,
  },
  text2: {
    fontSize: 20,
  },
})

export default ComponentsScreen;