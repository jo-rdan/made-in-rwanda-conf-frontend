import React from "react";
import {
  Image,
  Text,
  View,
  StyleSheet,
  Platform,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import { TextInput } from "react-native-paper";

function HomePageSeller(props) {
  const [screenHeight, setScreenHeight] = React.useState(0);
  const { height } = Dimensions.get("window");
  const onContentSizeChange = (contentWidth, contentHeight) => {
    const newContent = contentHeight + 100;
    // Save the content height in state
    setScreenHeight(newContent);
    console.log(
      "height",
      height,
      "content",
      newContent,
      "screen",
      screenHeight
    );
  };
  return (
    // topbar
    //settings icon
    // title
    // logout icon
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={{ flexDirection: "row", alignItems: "baseline" }}>
          <Image source={require("../assets/settings.png")} />
          <Text style={{ color: "#fff", marginLeft: 20 }}>Homepage</Text>
        </View>
        <View>
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
            <View style={styles.eachProduct}>
              {/* single product  */}
              <View>
                {/* image */}
                <Image source={require("../assets/products/product1.png")} />
              </View>
              <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text>Uzuri Sandals</Text>
                  {/* price */}
                  <Text>15,000 Rwf</Text>
                </View>
              </View>
            </View>
            <View>
              {/* single product  */}
              <View>
                {/* image */}
                <Image source={require("../assets/products/product2.png")} />
              </View>
              <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text>Hand Basket</Text>
                  {/* price */}
                  <Text>2,000 Rwf</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.brands}>
          <View>
            {/* title */}
            <Text>Top brands</Text>
          </View>
          <View>
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
                  <Text>Moshions Sweater</Text>
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
                  <Text>Mara Phones Rwanda</Text>
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
    // backgroundColor: "#000",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    elevation: 3,
  },
  products: {
    flexDirection: "row",
    justifyContent: "space-around",
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
