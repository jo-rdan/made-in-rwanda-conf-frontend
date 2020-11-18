import React, { useEffect } from "react";
import { View, Text, Image, StatusBar, Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

function CartScreen(props) {
  const [quantity, setQuantity] = React.useState(1);
  const [unitTotal, setUnitTotal] = React.useState(15000);
  const [grandTotal, setGrandTotal] = React.useState(null);
  const [productPrice, setProductPrice] = React.useState(15000);
  const [animate, setAnimate] = React.useState(false);
  const [products, setProducts] = React.useState(null);
  // const [total, setTotal] = React.useState();
  // const [productIds, setProductIds] = React.useState([]);
  let total = 0;
  let productIds = [];
  let numberOfItems = [];
  useEffect(() => {
    // console.log("pppp", props);
    // console.log(props.route.params.product);
    // setProducts(props.route.params.product);
    const fetchData = async () => {
      let token = await SecureStore.getItemAsync("Authorization");
      const productsToCart = await axios.get(
        "https://pacific-citadel-62849.herokuapp.com/api/mycart",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const chest = await axios.get(
        "https://pacific-citadel-62849.herokuapp.com/api/checkout",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // setTotal(chest.data.total);
      setProducts(productsToCart.data.products);
      // const allProducts = await getProductsData();
      // setProductsData(allProducts);
    };

    fetchData();
  }, []);

  const handleTotal = (product) => {
    total += product.price;
    setGrandTotal(total);
    console.log("00000", total);
  };

  const handleCheckout = async () => {
    // const checkout = await
    try {
      let token = await SecureStore.getItemAsync("Authorization");
      console.log("product ids", productIds);

      const checkout = await axios.post(
        `https://pacific-citadel-62849.herokuapp.com/api/checkout`,
        {
          id: productIds,
          numberOfItems,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("porrrrr", numberOfItems, checkout);
      props.navigation.navigate("Checkout");
    } catch (error) {
      console.log("error");
    }
  };
  return (
    <View style={styles.container}>
      {/* top bar */}
      <View style={styles.topBar}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ color: "#fff", marginLeft: 20 }}>Cart</Text>
        </View>
        <View style={styles.iconsNav}>
          <Image source={require("../assets/logout.png")} />
        </View>
      </View>
      <View style={styles.productTable}>
        <View style={styles.productsHeader}>
          <Text style={styles.headerText}>Product(s)</Text>
          <Text style={styles.headerText}>Unit price</Text>
        </View>
        {products &&
          products.map((product) => {
            const items = 1;
            // setProductIds([...productIds, product.id]);
            productIds.push(product.id.toString());
            numberOfItems.push(items.toString());
            total += product.price;
            return (
              <View style={styles.productsBody}>
                {/* {() => handleTotal(product)} */}
                <Text>{product.name}</Text>
                <Text>{product.price} Rwf</Text>
              </View>
            );
          })}
      </View>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          paddingTop: 40,
          paddingLeft: 10,
        }}
      >
        Total: {total} Rwf
      </Text>
      <View style={styles.actions}>
        <View style={{ width: "40%" }}>
          {/* Checkout button */}
          <Button
            mode="contained"
            color="#FF0F00"
            style={styles.checkout}
            onPress={handleCheckout}
          >
            Checkout
          </Button>
        </View>

        {/* <View>
          <Button
            mode="contained"
            color="#FF0F00"
            style={styles.checkout}
            onPress={RemoveCheckout}
          >
            cancel order
          </Button>
        </View> */}

        <View>
          {/* Keep buying */}
          <Text
            style={{ fontSize: 14, color: "#ff0f00" }}
            onPress={() => props.navigation.navigate("Home")}
          >
            Keep shopping
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  actions: {
    paddingTop: 30,
    alignItems: "center",
  },
  checkout: {
    borderRadius: 50,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productsBody: {
    flexDirection: "row",
    width: "95%",
    paddingLeft: 10,

    padding: 5,
    justifyContent: "space-between",
  },
  productsHeader: {
    flexDirection: "row",
    width: "95%",
    padding: 15,
    justifyContent: "space-between",
  },
  productTable: { justifyContent: "space-around" },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1B2646",
    padding: 15,
  },
});

export default CartScreen;
