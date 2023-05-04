import React from 'react';
import { Text, View, TouchableOpacity,
  StyleSheet, Button} from 'react-native';


function InitialScreen() {
  return (
    <View>
        <Text style={styles.text}>
            InitialScreen
        </Text>
        <Button 
          title="GO TO HOMEPAGE"
          onPress={()=>{console.log("hey");}}
        />
        <TouchableOpacity
          onPress={() => {console.log("hey touchy");}}
        >
          <Text>
            Go To List Demo
          </Text>
        </TouchableOpacity>

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