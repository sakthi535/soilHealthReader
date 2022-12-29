import React from 'react'
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";

const Dashboard = () => {
  return (

    <View style={[styles.container, { flexDirection: "column" }, { backgroundColor: "#FFFFFF" }, { textAlign: 'center' }]}>
      <View style={[{ flex: 1 }, { textAlign: "center" }]}>
        <Text style={styles.header}>
          Soil Health Reader
        </Text>
      </View>



      <View style={[{ flex: 4 }, { textAlign: 'center' }, { padding: 25 }]}>

        <Text style={{ padding: 20 }}>
          <Image
            source={require('./dashboard.png')}
          />
          {'     '}
          <Text style={styles.headline}>
            Quick Dashboard
          </Text>
        </Text>


        <View style={[{ flex: 1 }, { flexDirection: "row" }, { justifyContent: "space-evenly" }]}>

          <View style={styles.tile}>
            <Text style={[{ color: "1C1243" }, { fontSize: 24 }, { fontWeight: "bold" }, { textAlign: 'center' }]}>
              Connect Device
            </Text>

            <Text style={[{ color: "#979797" }, { fontSize: 20 }, { fontWeight: "500" }, { textAlign: 'center' }, { paddingTop: 18 }]}>
              Status
            </Text>

            <Text style={[{ color: "#42A34B" }, { fontSize: 20 }, { fontWeight: "700" }, { paddingTop: 10 }, { textAlign: 'center' }]}>
              Connected
            </Text>
          </View>

          <View style={[styles.tile]}>
            <Text style={[{ color: "1C1243" }, { fontSize: 24 }, { fontWeight: "bold" }, { textAlign: 'center' }]}>
              Start Testing
            </Text>
          </View>
        </View>

        <View style={[{ flex: 1 }, { flexDirection: "row" }, { justifyContent: "space-evenly" }]}>

          <View style={styles.tile}>
            <Text style={[{ color: "1C1243" }, { fontSize: 24 }, { fontWeight: "bold" }, { textAlign: 'center' }]}>
              View Previous Results
            </Text>
          </View>

          <View style={[styles.tile]}>
            <Text style={[{ color: "1C1243" }, { fontSize: 24 }, { fontWeight: "bold" }, { textAlign: 'center' }]}>
              Set device profile
            </Text>
          </View>

        </View>

      </View>

      <View style={styles.navbar}>
        <Text style={[{ textAlign: 'center' }, { fontSize: 34 }, { fontWeight: "bold" }, { padding: 12 }]}>
          Navbar
        </Text>

      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    // paddingTop: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  body: {
    width: '100%',
    flex: 5,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
    textAlign: 'center',
    justifyContent: "center",
    alignItems: "center",

  },
  header: {
    color: "#20462D",
    fontWeight: "600",
    fontSize: 34,
    textAlign: 'center',
    paddingTop: 40,
  },
  content: {
    padding: 20,
    fontSize: 18,
    textAlign: 'center',
  },
  block: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: "#74BE8E",
    // flex: 1,

  },
  navbar: {
    flex: 1,
    // backgroundColor: "#DADADA",
  },
  tile: {
    // width: "156px",
    // margin: 10,
    backgroundColor: "#DCEFE3",
    height: "90%",
    width: "40%",
    borderRadius: 16,
    justifyContent: 'center',
    // flex:1,
  },
  headline: {
    color: "#1C1243",
    fontWeight: "700",
    fontSize: 24,

  }
});


export default Dashboard;