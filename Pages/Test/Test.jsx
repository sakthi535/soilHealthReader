import React from 'react'
import { Text, View, Button, StyleSheet, Alert } from 'react-native';


export const Test = () => {
  return (
    <View style={[styles.center, { top: 50 }]}>
      <Text style={styles.innerText}>Soil Health Reader{'\n'}</Text>
      <Text style={styles.testext}>Start Testing{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
      <Text numberOfLines={3} style={styles.bigtext}>Soil nutrient levels with fertilizer recommendation fro crops will be genararted in a while{'\n'}{'\n'}</Text>
      <Button
        onPress={() => Alert.alert('Testing started')}
        title="Start Testing"
        color="green" />
    </View>
  )
}



const styles = StyleSheet.create({
  center: {
    alignItems: 'center'
  },
  innerText: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 40
  },
  testext: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20
  },
  bigtext:
  {
    alignContent: 'center',
    color: 'green',
    fontWeight: 'bold',
    fontSize: 25
  }
});


const Greeting = (props) => {
  return (
    <View style={styles.center}>
      <Text> {props.name}</Text>
    </View>
  );
}
