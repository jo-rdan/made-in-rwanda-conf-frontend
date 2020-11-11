import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import SetupCompany from './app/screens/setupcompany';
import Login from './app/screens/login';
export default function App() {
  return (
    <PaperProvider>
      {/* <SetupCompany /> */}
      <Login />
      </PaperProvider>
    // <View style={styles.container}>
    //   <Text>Hello World! Welcome to Africa XYZ</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}


