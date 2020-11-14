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
  let total = 0;
  useEffect(() => {
    // console.log("pppp", props);
    // console.log(props.route.params.product);
    // setProducts(props.route.params.product);
    const fetchData = async () => {
      let token = await SecureStore.getItemAsync("Authorization");
      const productsToCart = await axios.get(
        "http://192.168.1.186:8000/api/mycart",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
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
      const checkout = await axios.post(
        `http://192.168.1.186:8000/api/checkout`,
        {
          "id[]": 2,
          "numberOfItems[]": 1,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("porrrrr", checkout);
      // props.navigation.navigate("Checkout", { total })
    } catch (error) {
      console.log(error.response);
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
      {/* added products */}
      <View style={styles.productTable}>
        {/* header */}
        <View style={styles.productsHeader}>
          {/* products header details here (product(s), unit price, quantity, total) */}
          <Text style={styles.headerText}>Product(s)</Text>
          <Text style={styles.headerText}>Unit price</Text>
          {/* <Text style={styles.headerText}>Quantity</Text>
          <Text style={styles.headerText}>Total</Text> */}
        </View>
        {/* body */}
        {/* products on cart body */}
        {/* <Text>Uzuri Sandals</Text>
          <Text>15,000 Rwf</Text>
        <Text style={{ left: 10 }}>{unitTotal} Rwf</Text> */}
        {products &&
          products.map((product) => {
            total += product.price;
            return (
              <View style={styles.productsBody}>
                {() => handleTotal(product)}
                <Text>{product.name}</Text>
                <Text>{product.price}</Text>
                {/* <TextInput
                  placeholder="Quantity"
                  value={quantity}
                  onChangeText={async (qty) => {
                    setQuantity(parseInt(qty));
                    setUnitTotal(quantity * product.price);
                  }}
                  style={{ width: "10%", height: 23, fontSize: 10, left: 10 }}
                /> */}
                {/* <Text style={{ left: 10 }}>{unitTotal} Rwf</Text> */}
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
        <View style={{ width: "80%" }}>
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
