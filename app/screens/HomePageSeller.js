import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";

function HomePageSeller(props) {
  return (
    // topbar
    //settings icon
    // title
    // logout icon
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={{ marginLeft: 20 }}>
          <Image source={require("../assets/settings.png")} />
        </View>
        <View>
          <Text style={{ color: "#fff", marginLeft: 20 }}>Homepage</Text>
        </View>
        <View>
          <Image source={require("../assets/logout.png")} />
        </View>
      </View>
    </View>
    // search compo
    // search icon
    // categories compo
    // title
    // each category
    // icon
    // title
    // products
    // title
    // see all icon
    // each product compo
    // image
    // desc(name, price)
    // brands
    // title
    // see all icon
    // each brand compo
    // image
    // desc(name)
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "#1B2646",
    padding: 15,
  },
});
export default HomePageSeller;
