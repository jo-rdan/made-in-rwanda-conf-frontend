import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

import {
  TextInput,
  Button,
} from "react-native-paper";

function Login(props) {
  const [text, setText] = React.useState("");
  const [userData, setUserData] = React.useState({
    phoneNumber: "",
    password: "",
  });
  const [focus, setFocus] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);
  return (
    <View style={styles.background}>
      <Image source={require("../assets/logo.png")} />
      <View style={styles.registerForm}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.sideFields}>
          <View style={styles.countryCode}>
            <Text>+250</Text>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <TextInput
              placeholder="Phone"
              value={text}
              onChangeText={(text) => setText(text)}
              onChange={() => setFocus(true)}
              style={{ width: 200, height: 40, fontSize: 10 }}
            />
          </View>
        </View>
        <View style={styles.fields}>
          <TextInput
            placeholder="Password"
            style={{ width: "100%", height: 40, fontSize: 10 }}
          />
        </View>
        <View style={[styles.fields]}>
          <Button
            mode="contained"
            onPress = {()=> alert("Login is working")}
            color="#FF0F00"
            style={{ borderRadius: 50 }}
          >
            Login
          </Button>
          <Button
            style={{borderRadius: 40}}
            color= "#ff0f00"
            onPress = {()=> alert("New Account")}
            >Create an Account</Button>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#1B2646",
    width: 411,
    height: "100%",
    alignItems: "center",
    paddingTop: 89,
  },
  fields: {
    width: "85%",
    marginTop: 17,
    marginLeft: 30,
    marginRight: "auto",
  },
  registerForm: {
    width: 352,
    height: 480,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 10,
    position: "absolute",
    top: 200,
    left: 22,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 20,
  },
  countryCode: {
    width: 73,
    padding: 10,
    marginLeft: 10,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    borderLeftWidth: 1,
    borderLeftColor: "#E5E5E5",
    borderRightWidth: 1,
    borderRightColor: "#E5E5E5",
    borderRadius: 5,
  },
  sideFields: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default Login;

