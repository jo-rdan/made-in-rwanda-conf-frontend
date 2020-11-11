import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import SetupCompany from './app/screens/setupcompany';
import Login from './app/screens/login';
import DashBoard from './app/screens/dashboard';
export default function App() {
  return (
    <PaperProvider>
      {/* <SetupCompany /> */}
      <DashBoard />
      {/* <Login /> */}
      </PaperProvider>
    // <View style={styles.container}>
    //   <Text>Hello World! Welcome to Africa XYZ</Text>
    //   <StatusBar style="auto" />
    // </View>
  );
}


