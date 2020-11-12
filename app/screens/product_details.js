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
import { Button } from "react-native-paper";
export default function ProductDetail() {
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Image source={require("../assets/settings.png")} />
            <Text style={{ color: "#fff" }}>Product Details</Text>
          </View>
          <View>
            <Image source={require("../assets/logout.png")} />
          </View>
        </View>
      </View>

      <View style={styles.image}>
        <Image
          source={require("../assets/details.png")}
          style={{ width: "100%", height: 200 }}
        />
      </View>
      <View style={{ marginTop: 20 }}>
        <View style={styles.btn}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Product Name:
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
            Product Price:
          </Text>
        </View>
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Product Description
          </Text>
          <Text>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs.
          </Text>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
          }}
        />
        <View style={{ marginTop: 20, marginBottom: 20 }}>
          <Text style={{ fontWeight: "bold", fontSize: 13 }}>
            About the company
          </Text>
          <View style={styles.about}>
            <View style={styles.logo}>
              <Image
                source={require("../assets/vwlogo.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View
              style={{
                alignSelf: "flex-end",
                alignItems: "center",
                justifyContent: "center",
                bottom: 25,
              }}
            >
              <Text>VolksWagen Rwanda</Text>
            </View>
          </View>
          <Text>
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B2646",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    padding: 10,
    height: 52,
    left: 0,
    top: 0,
    justifyContent: "center",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1B2646",
    padding: 5,
  },
  image: {
    width: "100%",
  },
  logo: {
    padding: 10,
    marginLeft: 0,
    marginTop: 20,
  },
  about: {
    alignSelf: "flex-start",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
