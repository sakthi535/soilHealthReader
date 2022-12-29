import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";

function _on_press(){
  alert("You pressed a button");
}

const Home = () => {
  return (

    <View style={[styles.container, {flexDirection:"column"}, {backgroundColor:"#74BE8E"}, {textAlign:'center'}]}>
      <View style = {[{flex:2}, {textAlign:"center"}]}>
        <Text style={styles.header}>
          Vasthak Pvt. Ltd
        </Text>
      </View>

      <View style = {[{flex:2}, {textAlign:'center'}]}>
        <Text style={styles.content}>
        Measure your soil  nutrient values with our soil health reader. Just connect our mobile app to the health reader using bluetooth.   
        </Text>
      </View>

      <View style = {[styles.body]}>
        <Text style = {[{textAlign: 'center'}, {fontSize: 34}, {fontWeight: "bold"}, {padding:12}]}>
          Soil Health Reader
        </Text>

        <TouchableHighlight onPress={_on_press}>
          <View style={[styles.block]} >

              <Image style={[styles.tinyLogo, {textAlign:'center'}]}
                source={{
                  uri: '../assets/images/ph-meter.png',
                }}
              />
          </View>
        </TouchableHighlight >

        <Text style = {[{textAlign: 'center'}, {fontSize: 20}, {fontWeight: "medium"}, {paddingTop: 15}]}>
        Click above to start pairing with soil health reader and start testing soil    
        </Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    paddingTop: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  body:{
    width: '100%',
    flex: 5,
    backgroundColor: "#DADADA",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center",

  },
  header:{
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
    textAlign: 'center',
    padding: 40,
  },
  content :{
    padding:20,
    fontSize: 18, 
    textAlign: 'center',
  },
  block:{
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#74BE8E",
    // flex: 1,
    
  }
});

export default Home;