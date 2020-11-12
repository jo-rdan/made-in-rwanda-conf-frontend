import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePageSeller from "./app/screens/HomePageSeller";

export default function App() {
  return (
    <View style={styles.container}>
      <HomePageSeller />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});
