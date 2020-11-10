import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native';
import RegistrationScreen from './app/screens/RegistrationScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <RegistrationScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
