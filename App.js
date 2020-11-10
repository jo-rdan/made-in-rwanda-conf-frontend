import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-native-paper";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import { Provider as PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <RegistrationScreen />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
