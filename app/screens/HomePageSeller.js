import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import { TextInput } from "react-native-paper";

function HomePageSeller(props) {
  return (
    // topbar
    //settings icon
    // title
    // logout icon
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={{ flexDirection: "row" }}>
          <Image source={require("../assets/settings.png")} />
          <Text style={{ color: "#fff", marginLeft: 20 }}>Homepage</Text>
        </View>
        <View>
          <Image source={require("../assets/logout.png")} />
        </View>
      </View>
      <View style={styles.searchCompo}>
        <View>
          <TextInput
            placeholder="Search products"
            // value={userData.fname}
            // onChangeText={(fname) => setUserData({ ...userData, fname })}
            // style={{ width: "100%", height: 40, fontSize: 10 }}
          />
        </View>
        <View style={styles.searchIcon}>
          <Image source={require("../assets/search.png")} />
        </View>
      </View>
      <View style={styles.categories}>
        <View>{/* title */}</View>
        <View>
          <View>
            {/* icons */}
            {/* texts */}
          </View>
        </View>
      </View>
    </View>
    // search compo
    // textfields
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
    justifyContent: "space-between",
    backgroundColor: "#1B2646",
    padding: 15,
  },
});
export default HomePageSeller;
