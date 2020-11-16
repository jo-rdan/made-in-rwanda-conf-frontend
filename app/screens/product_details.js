import Axios from "axios";
import * as SecureStore from "expo-secure-store";
import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  TouchableHighlight,
} from "react-native";
import axios from "axios";

import { Button } from "react-native-paper";
export default function ProductDetail(props) {
  const [productsDetails, setProductsDetails] = React.useState([]);

  const getToken = async () => {
    const token = await SecureStore.getItemAsync("Authorization");

    // const getProductsDetails = async () => {
    //   const products = await axios.get(
    //     "http://192.168.1.186:8000/api/products/1",
    //     {
    //       headers: { Authorization: `Bearer ${token}` },
    //     }
    //   );
    //   // setProducts(products);
    //   return products.data;
    // };
    // useEffect(() => {
    //   const fetchData = async () => {
    //     const pro_item = await getProductsDetails();
    //     console.log("----->", pro_item);
    //     setProductsData(pro_item);
    //   };
    //   fetchData();
    // }, []);
    //console.log("-------------", token);
    // const product = await Axios.get(
    //   "http://192.168.1.186:8000/api/products/1",
    //   {
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   }
    // );
    // console.log(product.data);
    // try {

    // } catch (error) {
    //   console.log("------------", error.response);
    // }
  };

  useEffect(() => {
    const getProductsDetails = async () => {
      const token = await SecureStore.getItemAsync("Authorization");
      //console.log("props", props.route.params.productId);
      const products = await axios.get(
        `http://192.168.1.186:8000/api/products/${props.route.params.productId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setProductsDetails(products.data);
      console.log("hshhsahv", productsDetails);
      //return products.data;
    };
    getProductsDetails();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={styles.container}>
        <View style={styles.topBar}>
          <View style={{ flexDirection: "row", alignItems: "baseline" }}>
            <Image source={require("../assets/settings.png")} />
            <Text style={{ color: "#fff" }}>Product Details</Text>
          </View>
          <TouchableHighlight onPress={() => logout(navigation)}>
            <Image source={require("../assets/logout.png")} />
          </TouchableHighlight>
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
            Product Name: {productsDetails.name}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>
            Product Price: {productsDetails.price}
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
              <Text>productsDetails.company.name</Text>
            </View>
          </View>
          <Text>productsDetails.company.description</Text>
        </View>
      </View>
    </SafeAreaView>
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
