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
    <View>
      <View style={styles.headcontainer}>
        <View style={{ top: 25, left: "5%" }}>
          <Image
            source={require("../assets/iconhome.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
        <Text style={styles.header}>DashBoard</Text>
        {/* <Button icon="home" style={{ color: "#fff" }}>
        test
      </Button> */}
      </View>
      <View style={styles.sideFields}>
        <View style={{ alignSelf: "flex-start", top: 20, width: "90%" }}>
          <TextInput
            placeholder="Search products or brands"
            style={{
              width: "90%",
              height: 40,
              fontSize: 16,
              backgroundColor: "#fff",
            }}
          />
        </View>
        <View style={styles.search}>
          <Button onPress={() => alert("DashBoard")}>
            <Image source={require("../assets/iconsearch.png")} />
          </Button>
        </View>
      </View>
      <View style={{ top: "10%", left: "5%" }}>
        <Image
          source={require("../assets/test.png")}
          style={{ width: 200, height: 300 }}
        />
      </View>
      <View style={{ alignSelf: "flex-end" }}>
        <Button onPress={() => alert("DashBoard")}>
          <Image
            source={require("../assets/add.png")}
            style={{ width: 50, height: 50 }}
          />
        </Button>
      </View>
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
    left: "15%",
    top: 0,
    marginBottom: 20,
    //textTransform: "uppercase",
    fontSize: 26,
  },
  search: {
    // borderTopWidth: 1,
    // borderTopColor: "#E5E5E5",
    // borderBottomWidth: 1,
    // borderBottomColor: "#E5E5E5",
    // borderLeftWidth: 1,
    // borderLeftColor: "#E5E5E5",
    // borderRightWidth: 1,
    // borderRightColor: "#E5E5E5",
    // borderRadius: 5,
    top: 20,
    right: 3,
    left: "5%",
  },
  sideFields: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
