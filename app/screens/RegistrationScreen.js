import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";

import {
  TextInput,
  Button,
  Paragraph,
  Dialog,
  Portal,
  RadioButton,
} from "react-native-paper";

function RegistrationScreen(props) {
  const [text, setText] = React.useState("");
  const [userData, setUserData] = React.useState({
    fname: "",
    lname: "",
    phone: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "",
  });
  const [focus, setFocus] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState("6+ ");

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  const handlePhone = (phone) => {
    setUserData({ ...userData, phone });
  };
  const handleSubmit = () => {
    console.log(userData);
  };
  return (
    <View style={styles.background}>
      <Image source={require("../assets/logo.png")} />
      <View style={styles.registerForm}>
        <Text style={styles.title}>Register</Text>
        <View style={styles.sideFields}>
          <View style={styles.countryCode}>
            <Text>+250</Text>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <TextInput
              // label={ focus ? "" : "Phone"}
              placeholder="Phone"
              value={userData.phone}
              onChangeText={(phone) => handlePhone(phone)}
              style={{ width: 200, height: 40, fontSize: 10 }}
            />
          </View>
        </View>
        <View style={styles.fields}>
          <TextInput
            placeholder="First name"
            value={userData.fname}
            onChangeText={(fname) => setUserData({ ...userData, fname })}
            style={{ width: "100%", height: 40, fontSize: 10 }}
          />
        </View>
        <View style={styles.fields}>
          <TextInput
            placeholder="Last name"
            onChangeText={(lname) => setUserData({ ...userData, lname })}
            style={{ width: "100%", height: 40, fontSize: 10 }}
          />
        </View>
        <View style={styles.fields}>
          <TextInput
            placeholder="Email"
            value={userData.email}
            onChangeText={(email) => setUserData({ ...userData, email })}
            style={{ width: "100%", height: 40, fontSize: 10 }}
          />
        </View>
        <View style={styles.fields}>
          <TextInput
            placeholder="Password"
            onChangeText={(password) => setUserData({ ...userData, password })}
            style={{ width: "100%", height: 40, fontSize: 10 }}
          />
        </View>
        <View style={styles.fields}>
          <TextInput
            placeholder="Confirm Password"
            onChangeText={(password_confirmation) =>
              setUserData({ ...userData, password_confirmation })
            }
            style={{ width: "100%", height: 40, fontSize: 10 }}
          />
        </View>
        <View style={styles.fields}>
          <Text
            style={{
              backgroundColor: "#E5E5E5",
              color: "#696666",
              padding: 12,
              fontSize: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#696666",
            }}
            onPress={() => setVisible(true)}
          >
            I am a...
          </Text>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Choose an option</Dialog.Title>
              <Dialog.Content>
                <View>
                  <Text>Seller</Text>
                  <RadioButton
                    value="seller"
                    status={checked === "seller" ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked("seller");
                      setUserData({ ...userData, role: "seller" });
                      setVisible(false);
                    }}
                  />
                </View>
                <View>
                  <Text>Guest</Text>
                  <RadioButton
                    value="guest"
                    status={checked === "guest" ? "checked" : "unchecked"}
                    onPress={(value) => {
                      setChecked("guest");
                      setUserData({ ...userData, role: "guest" });
                      setVisible(false);
                    }}
                  />
                </View>
              </Dialog.Content>
            </Dialog>
          </Portal>
        </View>
        <View style={[styles.fields, styles.buttons]}>
          <Button
            mode="contained"
            onPress={handleSubmit}
            color="#FF0F00"
            style={{ borderRadius: 50, width: "80%" }}
          >
            Create account
          </Button>
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
  buttons: {
    alignItems: "center",
  },
  fields: {
    width: "85%",
    marginTop: 17,
    marginLeft: 30,
    marginRight: "auto",
  },
  registerForm: {
    width: 352,
    height: 530,
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
    top: 150,
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

export default RegistrationScreen;
