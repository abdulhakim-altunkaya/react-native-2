import React from 'react';
import { Text, View, TouchableOpacity,
  StyleSheet, Button} from 'react-native';


function InitialScreen(props) {
  const routeHome = () => {
    props.navigation.navigate("Home");
  }
  return (
    <View>
        <Text style={styles.text}>
            InitialScreen
        </Text>
        <Button 
          title="GO TO HOMEPAGE"
          onPress={()=> props.navigation.navigate("Home")}
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