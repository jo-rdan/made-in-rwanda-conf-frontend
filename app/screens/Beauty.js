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
import { TouchableOpacity } from "react-native-gesture-handler";
import ImageModal from 'react-native-image-modal';
function Beauty(props) {
  const [screenHeight, setScreenHeight] = React.useState(0);
  const { height } = Dimensions.get("window");
  let [badgeCount, setBadgeCount] = React.useState(0);
  const [productsData, setProductsData] = React.useState([]);

  const getProductsData = async () => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9wYWNpZmljLWNpdGFkZWwtNjI4NDkuaGVyb2t1YXBwLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTYwNTI4MTU1OSwiZXhwIjoxNjA1Mjg1MTU5LCJuYmYiOjE2MDUyODE1NTksImp0aSI6Im1oY1FQaXRjaFMwczNyQUkiLCJzdWIiOjEsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.PVghHKIZ2KyJxQDci2p6mVpsb8PFELR6aGmNx6F0_H4";

    const products = await axios.get(
      "https://pacific-citadel-62849.herokuapp.com/api/products",
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    setProducts(products);
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
          <Text style={{ color: "#fff", marginLeft: 20 }}>Beauty</Text>
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
              <Text style={{ fontSize: 12, textAlign: "center" }} 
              //onClick={Technology}
              >Tech</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/beauty.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" ,color:'rgb(255,0,0)'}}>Beauty</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/clothing.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}
              // onClick={Fashion}
              >Fashion</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/art.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}
              // onClick={Art}
              >Art</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/drinks.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}
              //  onClick={Drinks}
              >Drinks</Text>
            </View>
            <View>
              {/* icons */}
              <Image source={require("../assets/icons/food.png")} />
              {/* texts */}
              <Text style={{ fontSize: 12, textAlign: "center" }}
               //onClick={home}
              >Food</Text>
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
                color:"#1B2646",
              }}
            >
             Cosmetics
            </Text>
          </View>
          <View style={styles.products}>
            {/* {productsData &&
              productsData.map((product) => {
                console.log("donneeeeee", product);
              })} */}
              <View>
                {/* image */}
                <View>
                
                  <ImageModal
                  resizeMode='contain'
                  source={require("../assets/Cosmetics/Lotion.png")} 
                  //  style={styles.pics}
                  />
                
                </View>
                <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text
                    style={{
                      fontSize: 15,
                    
                    }}
                  >
                 Coffee Cinnamon Soap  
                  </Text>
                  <Text 
                   style={{
                      fontSize: 15,
                      //onClick={}
                    }}>
                    30,000 Rwf

                  </Text>
                </View>
              </View>
              </View>
              <View>
                {/* image */}
                <View>
                  <Image source={require("../assets/Cosmetics/Vase.png")} />
                </View>
                <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text
                    style={{
                      fontSize: 15,
                    
                      alignContent:"center"
                    }}
                  >
                   Ihoho Lotion  {"\n"}10,000 Rwf
                  </Text>
                </View>
              </View>
              </View>

              
          </View>
        </View>
        <View style={styles.brandsCompo}>
          <View>
            {/* title */}
            <Text
              style={{
                fontSize: 15,
          fontWeight:"bold",
                padding: 10,
                color:"#1B2646",
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
                  <Image source={require("../assets/Cosmetics/bara.png")} 
                   
                  />
                </View>
              </View>
              <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text
                    style={{
                      fontSize: 15,
                     
                    }}
                  >
                    Hand Wash 
                  </Text>
                </View>
              </View>
            </View>
            <View>
              {/* each brand  */}
              <View>
                {/* image */}
                <View>
                  <Image source={require("../assets/Cosmetics/lotion1.png")} />
                </View>
              </View>
              <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text
                    style={{
                      fontSize: 15,
                     
                      alignContent:"center"
                    }}
                  >
                   Hair Product

                  </Text>
                </View>
              </View>
            </View>
            
          </View>
          <View style={styles.brands}>
            <View>
              {/* each brand  */}
              <View>
                {/* image */}
                <View>
                  <Image source={require("../assets/Cosmetics/sante.png")} 
                   
                  />
                </View>
              </View>
              <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text
                    style={{
                      fontSize: 15,
                     
                    }}
                  >
                   Sulfo Rwanda
                  </Text>
                </View>
              </View>
            </View>
            <View>
              {/* each brand  */}
              <View>
                {/* image */}
                <View>
                  <Image source={require("../assets/Cosmetics/soap.png")} />
                </View>
              </View>
              <View>
                {/* details */}
                <View>
                  {/* name */}
                  <Text
                    style={{
                      fontSize: 15,
                     
                      alignContent:"center"
                    }}
                  >
                   Body Wash

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
export default Beauty;