import React, { useEffect } from "react";
import {
  Image,
  ScrollView,
  Text,
  StyleSheet,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { TextInput, Button } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

export default function DashBoard({ navigation }) {
  const [company, setCompany] = React.useState(false);

  useEffect(() => {
    const getData = async () => {
      const token = await SecureStore.getItemAsync("Authorization");
      const companies = await axios.get(
        "http://192.168.1.186:8000/api/mycompanies",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(companies.data);
      setCompany(companies.data);
    };
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.headcontainer}>
        <View style={{ top: 25, left: "5%" }}>
          <Image
            source={require("../assets/iconhome.png")}
            style={{ width: 20, height: 20 }}
          />
        </View>
        <Text style={styles.header}>DashBoard</Text>
        {/* <Button icon="home" style={{ color: "#fff" }}>
        test
      </Button> */}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Button onPress={() => navigation.navigate("Company")} color="#FF0F00">
          <Image
            source={require("../assets/add.png")}
            style={{ width: 50, height: 50 }}
          />{" "}
          Add company
        </Button>
        <Button onPress={() => navigation.navigate("Product")} color="#FF0F00">
          <Image
            source={require("../assets/add.png")}
            style={{ width: 50, height: 50 }}
          />{" "}
          Add product
        </Button>
      </View>

      {/* <View style={{ alignSelf: "flex-end" }}>
       
      </View> */}
      {/* <View style={styles.sideFields}>
        <View style={styles.searchCompo}>
          <View style={styles.searchField}>
            <TextInput
              placeholder="Search products"
              style={{ width: "100%", height: 40, fontSize: 10 }}
            />
          </View>
          <View style={styles.searchIcon}>
            <Image source={require("../assets/iconsearch.png")} />
          </View>
        </View>
      </View> */}

      <ScrollView contentContainerStyle={styles.products}>
        {company &&
          company.map((comp) => {
            return (
              <View style={styles.eachProduct} key={comp.id}>
                {/* single product  */}
                <View>
                  {/* image */}
                  <Image source={require("../assets/products/product1.png")} />
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
                        {comp.name}
                      </Text>
                    </View>
                    {/* price */}
                    <Text>{comp.address}</Text>
                  </View>
                </View>
              </View>
            );
          })}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  headcontainer: {
    backgroundColor: "#1B2646",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: 411,
    height: 52,
    left: 0,
    top: 0,
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    left: "15%",
    top: 0,
    marginBottom: 20,
    //textTransform: "uppercase",
    fontSize: 26,
  },
  searchField: {
    width: "100%",
  },
  searchCompo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },

  sideFields: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    left: "5%",
    backgroundColor: "#fff",
  },
  products: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "baseline",
    paddingTop: 40,
    paddingBottom: 6,
  },
  eachProduct: {
    elevation: 3,
  },
});
