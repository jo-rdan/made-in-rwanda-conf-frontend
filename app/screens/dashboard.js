import React from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { TextInput, Button } from "react-native-paper";

export default function DashBoard() {
  return (
    <View style={styles.headcontainer}>
      <Button icon="home" style={{ color: "#fff" }}>
        <Text style={styles.header}>DashBoard</Text>
      </Button>
    </View>
  );
}
const styles = StyleSheet.create({
  headcontainer: {
    backgroundColor: "#1B2646",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: 411,
    height: 52,
    left: 0,
    top: 0,
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    left: 10,
    top: 0,
    //textTransform: "uppercase",
    fontSize: 26,
  },
});
