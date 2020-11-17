import { StatusBar } from "expo-status-bar";

import React from "react";
import { Button } from "react-native-paper";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

export default function HomePage({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#162447", height: "100%" }}>
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/africa.png")}
            style={{
              width: 260,
              height: 40,
              marginTop: 120,
              marginLeft: 50,
              marginRight: 50,
            }}
          />
        </View>

        <View>
          <Text style={styles.welcome}>Welcome </Text>
          <Text style={styles.Reg}>
            Register to be part of
            {"\n"} Made in Rwanda{"\n"}Conference
          </Text>
        </View>
        <View style={styles.btn}>
          <Button
            mode="contained"
            style={{ borderRadius: 55 }}
            color="white"
            onPress={() => navigation.navigate("Login")}
          >
            Register
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#162447",

    alignItems: "center",
  },
  welcome: {
    fontSize: 52,
    textAlign: "center",
    marginTop: 65,
    color: "white",
    paddingStart: 20,
    paddingEnd: 20,
    textDecorationLine: "underline",
  },
  Reg: {
    color: "white",
    fontSize: 20,
    marginBottom: 40,
    marginTop: 16,
    textAlign: "center",
    textTransform: "capitalize",
  },
  // screenContainer: {
  //   flex: 1,
  //   justifyContent: "center",
  //   padding: 13,
  //   marginTop:-80,
  // },
  btn: {
    padding: 10,
    marginTop: 40,
    textTransform: "capitalize",
    marginRight: 50,
    marginLeft: 50,
    width: "56%",
    height: "60%",
    fontSize: 17,
  },
  // appButtonText: {
  //   fontSize: 18,
  //   color: "black",
  // fontWeight:"bold",
  //   alignSelf: "center",
  //   textTransform: "uppercase",
  // },
  // appButtonContainer: {
  //   elevation: 8,
  //   backgroundColor: "white",
  //   borderRadius: 20,
  //   paddingVertical: 12,
  //   paddingHorizontal: 76,
  //   marginStart:20,
  //   marginEnd:20,
  // },
});
