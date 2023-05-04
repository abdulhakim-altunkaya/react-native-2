import React from 'react';
import { Text, View, TouchableOpacity,
  StyleSheet, Button} from 'react-native';


function InitialScreen({navigation}) {
  const changeRoute = () => {
    navigation.navigate("Home");
  }
  const changeRoute2 = () => {
    navigation.navigate("List5");
  }
  return (
    <View>
        <Text style={styles.text}>
            InitialScreen 2 dude - props destructured
        </Text>
        <Button 
          title="GO TO HOMEPAGE"
          onPress={()=> {changeRoute()}}
        />
        <Button 
          title="GO TO LIST PAGE"
          onPress={()=> {changeRoute2()}}
        />

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