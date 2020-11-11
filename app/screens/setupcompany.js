import React from 'react';
import { Image, ScrollView, Text, StyleSheet, View, Platform, StatusBar } from 'react-native';
import { Button } from 'react-native-paper';
export default function SetupCompany() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Set up your Company</Text>
        </View>
        <View style={styles.body}>
          <Text style={{fontWeight: "bold"}}>No Activity yet</Text>
          <Text>Looks like you have not set up your company yet</Text>
        </View>
        <View  style={styles.image}>
          <Image
            source={require('../assets/rec.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
        <View style={styles.btn}>
          <Button
            mode = "contained"
            style={{borderRadius: 40}}
            color= "#ff0f00"
            onPress = {()=> alert("Okay Ready to go")}
          >Set up your company</Button>
          <Button
            style={{borderRadius: 40}}
            color= "#ff0f00"
            onPress = {()=> alert("Skipped")}
          >Skip</Button>
        </View>
      </ScrollView>
    );
  }


  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1B2646',
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      width: 411,
      height: 52,
      left: 0,
      top: 0,
      justifyContent: 'center',
    },
    header: {
      color: '#fff',
      left: 40,
      top: 0,
      textTransform: 'uppercase',
    },
    body: {
      color: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 40,
    },
    image: {
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 40,
    },
    btn: {
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });