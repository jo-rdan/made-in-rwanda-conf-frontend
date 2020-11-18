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
import { TextInput, Badge } from "react-native-paper";
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
  const [categories, setCategories] = React.useState();
  const [selectedCategory, setSelectedCategory] = React.useState();
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

    const products = await axios.get("http://192.168.1.186:8000/api/products", {
      headers: { Authorization: `Bearer ${token}` },
    });
    // setProducts(products);
    return products.data;
  };
  useEffect(() => {
    const fetchData = async () => {
      let token = await SecureStore.getItemAsync("Authorization");
      const allProducts = await getProductsData();
      setProductsData(allProducts);
      const categories = await axios.get(
        "http://192.168.1.186:8000/api/categories",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setCategories(categories.data);
    };
    fetchData();
  }, []);

  const handleBadge = async (product) => {
    const token = await SecureStore.getItemAsync("Authorization");
    console.log("adddd", product.id, token);
    const addToCart = await axios.post(
      `http://192.168.1.186:8000/api/products/${product.id}/addtocart`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    //console.log("adddd", addToCart);
    //navigation.navigate("Cart");
  };
  const handleAddToCart = async () => {
    navigation.navigate("Cart");
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
        <View style={styles.categoriesCompo}>
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
        <View style={styles.productsCompo}>
          <View>
            {/* title */}
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",
                padding: 10,
              }}
            >
              Available products
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
                          source={require("../assets/products/product1.png")}
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
