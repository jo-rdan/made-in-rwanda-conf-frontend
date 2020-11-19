import React, { useEffect } from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
} from "react-native";
import { TextInput, Badge, ActivityIndicator } from "react-native-paper";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { logout } from "../helpers/logout";

function HomePageSeller({ navigation }) {
  const [screenHeight, setScreenHeight] = React.useState(0);
  const { height } = Dimensions.get("window");
  let [badgeCount, setBadgeCount] = React.useState(0);
  const [productsData, setProductsData] = React.useState([]);
  const [selectedProduct, setSelectedProduct] = React.useState([]);
  const [product, setProduct] = React.useState();
  const [categories, setCategories] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState();
  const [animate, setAnimate] = React.useState(true);
  let icons = [
    require("../assets/icons/art.png"),
    require("../assets/icons/beauty.png"),
    require("../assets/icons/food.png"),
    require("../assets/icons/clothing.png"),
    require("../assets/icons/tech.png"),
    require("../assets/icons/drinks.png"),
  ];

  const getProductsData = async () => {
    let token = await SecureStore.getItemAsync("Authorization");

    const products = await axios.get(
      "https://pacific-citadel-62849.herokuapp.com/api/products",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    // setProducts(products);
    return products.data;
  };
  useEffect(() => {
    const fetchData = async () => {
      // setAnimate(true);
      let token = await SecureStore.getItemAsync("Authorization");
      // console.log("animate???", animate);
      const categories = await axios.get(
        "https://pacific-citadel-62849.herokuapp.com/api/categories",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const allProducts = await getProductsData();
      setProductsData(allProducts);
      const cart = await axios.get(
        `https://pacific-citadel-62849.herokuapp.com/api/mycart`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // console.log("thugs-----", cart.data);
      // setTimeout(() => {
      setBadgeCount(cart.data.message ? 0 : cart.data.products.length);
      // }, 1000);
      setCategories(categories.data);
    };
    setTimeout(() => setAnimate(false), 2500);
    fetchData();
  }, [badgeCount]);

  const handleBadge = async (product) => {
    try {
      // setAnimate(true);
      const token = await SecureStore.getItemAsync("Authorization");
      const addToCart = await axios.post(
        `https://pacific-citadel-62849.herokuapp.com/api/products/${product.id}/addtocart`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTimeout(() => setAnimate(false), 2500);
    } catch (error) {
      console.log("errr", error.response.data);
    }
  };

  return (
    // topbar
    //settings icon
    // title
    // logout icon
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Text style={{ color: "#fff", marginLeft: 20 }}>Homepage</Text>
        </View>
        <View style={styles.iconsNav}>
          <TouchableNativeFeedback
            onPress={() =>
              navigation.navigate("Cart", { product: selectedProduct })
            }
            underlayColor="#000"
          >
            <Image
              source={require("../assets/icons/cart.png")}
              style={{ position: "absolute", left: 5 }}
            />
          </TouchableNativeFeedback>
          <Badge size={13} visible={badgeCount > 0}>
            {badgeCount}
          </Badge>
          <TouchableHighlight onPress={() => logout(navigation)}>
            <Image source={require("../assets/logout.png")} />
          </TouchableHighlight>
        </View>
      </View>
      <ScrollView>
        <View style={styles.searchCompo}>
          <View style={styles.searchField}>
            <TextInput
              placeholder="Search products"
              // value={userData.fname}
              // onChangeText={(fname) => setUserData({ ...userData, fname })}
              style={{ width: "100%", height: 40, fontSize: 10 }}
            />
          </View>
          <View style={styles.searchIcon}>
            <Image source={require("../assets/search.png")} />
          </View>
        </View>
        {/* <View> */}
        <ActivityIndicator animating={animate} style="large" color="#FF0F00" />
        {/* </View> */}
        <View
          style={[
            styles.categoriesCompo,
            {
              display:
                categories.length === 0 && productsData.length === 0
                  ? "none"
                  : "flex",
            },
          ]}
        >
          <View>
            {/* title */}
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              Categories
            </Text>
          </View>
          <View style={styles.categories}>
            {categories &&
              categories.map((category, index) => {
                return (
                  <View key={category.id}>
                    {/* icons */}
                    <TouchableHighlight>
                      <Image source={icons[index]} />
                    </TouchableHighlight>
                    {/* texts */}
                    <Text style={{ fontSize: 12, textAlign: "center" }}>
                      {category.name}
                    </Text>
                  </View>
                );
              })}
          </View>
        </View>
        <View
          style={[
            styles.productsCompo,
            {
              display:
                categories.length === 0 && productsData.length === 0
                  ? "none"
                  : "flex",
            },
          ]}
        >
          <View>
            {/* title */}
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              {productsData.length === 0
                ? "No products available"
                : "Available products"}
            </Text>
          </View>
          <View style={styles.products}>
            {productsData &&
              productsData.map((product) => {
                return (
                  <View style={styles.eachProduct} key={product.id}>
                    {/* single product  */}
                    <View>
                      {/* image */}
                      <TouchableHighlight
                        onPress={() =>
                          navigation.navigate("ProductDetail", {
                            productId: product.id,
                          })
                        }
                      >
                        <Image
                          style={{
                            width: 150,
                            height: 150,
                            // resizeMode: "center",
                          }}
                          source={{
                            uri:
                              product.image !== null
                                ? product.image
                                : "https://res.cloudinary.com/focus-faith-family/image/upload/v1605697794/vnsj0swzk1therydnapr.jpg",
                          }}
                        />
                      </TouchableHighlight>
                    </View>
                    <View>
                      {/* details */}
                      <View>
                        {/* name */}
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "baseline",
                          }}
                        >
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "bold",
                            }}
                          >
                            {product.name}
                          </Text>
                          <TouchableHighlight
                            onPress={() => handleBadge(product)}
                            underlayColor="white"
                          >
                            <Image
                              source={require("../assets/icons/add.png")}
                              style={{ width: 19, height: 18, marginLeft: 40 }}
                            />
                          </TouchableHighlight>
                        </View>
                        {/* price */}
                        <Text>{product.price}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
          </View>
        </View>
        <View style={styles.brandsCompo}>
          <View>
            {/* title */}
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              Top brands
            </Text>
          </View>
          <View style={styles.brands}>
            <View>
              {/* each brand  */}
              <View>
                {/* image */}
                <View>
                  <Image source={require("../assets/brands/brand1.png")} />
                </View>
              </View>
              <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Moshions Sweater
                  </Text>
                </View>
              </View>
            </View>
            <View>
              {/* each brand  */}
              <View>
                {/* image */}
                <View>
                  <Image source={require("../assets/brands/brand2.png")} />
                </View>
              </View>
              <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                    }}
                  >
                    Mara Phones Rwanda
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  brands: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 6,
    paddingBottom: 6,
  },
  brandsCompo: {
    paddingBottom: 10,
  },
  categories: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // overflow: "scroll",
  },
  categoriesCompo: {
    width: 360,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  eachProduct: {
    elevation: 3,
  },
  iconsNav: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "baseline",
    paddingTop: 6,
    paddingBottom: 6,
  },
  searchField: {
    width: "100%",
  },
  searchIcon: {
    position: "absolute",
    right: 20,
  },
  searchCompo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#1B2646",
    padding: 15,
  },
});
export default HomePageSeller;
