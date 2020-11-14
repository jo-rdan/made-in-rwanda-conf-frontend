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
} from "react-native";
import { TextInput, Badge } from "react-native-paper";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

function HomePageSeller(props) {
  const [screenHeight, setScreenHeight] = React.useState(0);
  const { height } = Dimensions.get("window");
  let [badgeCount, setBadgeCount] = React.useState(0);
  const [productsData, setProductsData] = React.useState([]);

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
      const allProducts = await getProductsData();
      console.log("----->", allProducts);
      setProductsData(allProducts);
    };
    fetchData();
  }, []);

  // let badgeCount = 0;
  const handleBadge = () => {
    setBadgeCount(badgeCount + 1);
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
          <Image
            source={require("../assets/icons/cart.png")}
            style={{ position: "absolute", left: 5 }}
          />
          <Badge size={13} visible={badgeCount > 0}>
            {badgeCount}
          </Badge>
          <Image source={require("../assets/logout.png")} />
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
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/tech.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}>Tech</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/beauty.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}>Beauty</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/clothing.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}>Fashion</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/art.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}>Art</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/drinks.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}>Drinks</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/food.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}>Food</Text>
            </View>
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
                console.log("donneeeeee", product);
                return (
                  <View style={styles.eachProduct} key={product.id}>
                    {/* single product  */}
                    <View>
                      {/* image */}
                      <Image
                        source={require("../assets/products/product1.png")}
                      />
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
                            onPress={handleBadge}
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
