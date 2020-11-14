import * as React from "react";
import { Image, View, ScrollView, StyleSheet, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import { TextInput, Button, Card, Title } from "react-native-paper";

const Login = ({ navigation }) => {
  const [phone, setPhone] = React.useState();
  const [password, setPassword] = React.useState();
  loginFunc = async () => {
    const results = await fetch(
      "https://pacific-citadel-62849.herokuapp.com/api/login",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone: `250${phone}`, password: password }),
      }
    );
    let data = await results.json();
    console.log(data.access_token);
    await SecureStore.setItemAsync("Authorization", data.access_token);
    let tok = await SecureStore.getItemAsync("Authorization");
    console.log(
      "results",
      data,
      "----",
      await SecureStore.isAvailableAsync(),
      "999999999",
      tok
    );
    return navigation.navigate("Home");
    // let data = await results.json();
    // await SecureStore.setItemAsync("Authorization", results.access_token);
    // console.log(
    //   "results",
    //   data,
    //   "----",
    //   await SecureStore.isAvailableAsync(),
    //   "999999999",
    //   await SecureStore.getItemAsync("Authorization")
    // );
    //await SecureStore.setItemAsync("Authorization", results.access_token);
  };
  return (
    <View style={styles.background}>
      <Image source={require("../assets/logo.png")} style={{ top: "16%" }} />
      <View style={styles.registerForm}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.sideFields}>
          <View style={styles.countryCode}>
            <Text>+250</Text>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <TextInput
              placeholder="Phone"
              value={phone}
              onChangeText={(phone) => setPhone(phone)}
              style={{ width: 200, height: 40, fontSize: 16 }}
            />
          </View>
        </View>
        <View style={styles.fields}>
          <TextInput
            secureTextEntry={true}
            placeholder="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
            style={{ width: "100%", height: 40, fontSize: 16 }}
          />
        </View>
        <View style={styles.fields}>
          <Button
            mode="contained"
            onPress={loginFunc}
            color="#FF0F00"
            style={{ borderRadius: 50 }}
          >
            Login
          </Button>
          <Button
            style={{ borderRadius: 40 }}
            color="#ff0f00"
            onPress={() => navigation.navigate("Register")}
          >
            Create an Account
          </Button>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#1B2646",
    width: "100%",
    height: "100%",
    alignItems: "center",
    paddingTop: "10%",
  },
  fields: {
    width: "85%",
    marginTop: 17,
    marginLeft: 30,
    marginRight: "auto",
  },
  registerForm: {
    width: "90%",
    height: 280,
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
    top: "40%",
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
