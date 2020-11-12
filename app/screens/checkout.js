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
import { State, TouchableNativeFeedback } from "react-native-gesture-handler";
export default function Checkout() {
  const [total, setTotal] = React.useState();
  state = {
    total: 45000,
  };
  const momoPay = () => {
    alert("Payment is working");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Image source={require("../assets/settings.png")} />
            <Text style={{ color: "#fff" }}>Checkout</Text>
          </View>
          <View>
            <Image source={require("../assets/logout.png")} />
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={{ fontWeight: "bold", fontSize: 12 }}>
          You can pay with
        </Text>
      </View>
      <View>
        <TouchableNativeFeedback onPress={momoPay}>
          <View style={styles.momoimage}>
            <View style={styles.sometext}>
              <Image
                source={require("../assets/momo.png")}
                style={{ width: 150, height: 80 }}
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
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                MTN Mobile Money
              </Text>
              <Text>Pay with Mobile Money</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
      <View style={styles.body}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Total :{this.state.total}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1B2646",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: 52,
    left: 0,
    top: 0,
    justifyContent: "center",
  },
  body: {
    color: "#fff",
    marginTop: 40,
    left: 30,
    marginBottom: 40,
  },
  image: {
    marginBottom: 40,
    left: 10,
    width: "90%",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1B2646",
    padding: 5,
  },

  sometext: {
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
  momoimage: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
