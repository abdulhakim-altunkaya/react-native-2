import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

function ComponentsScreen() {
  return (
    <View>
        <Text>This is a component</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    component: {
        display: "block",
        
    },
})

export default ComponentsScreen;