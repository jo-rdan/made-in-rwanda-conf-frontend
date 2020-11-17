import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
//import { Provider } from "react-native-paper";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import SetupCompany from "./app/screens/setupcompany";
import Login from "./app/screens/login";
import Checkout from "./app/screens/checkout";
import ProductDetail from "./app/screens/product_details";
import HomePage from "./app/screens/HomePage";
// import AddProduct from './app/screens/AddProduct';
import AddCompany from "./app/screens/AddCompany";

import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Redirect from "./app/screens/Redirect";
import DashBoard from "./app/screens/dashboard";
import AddProduct from "./app/screens/AddProduct";
import CartScreen from "./app/screens/CartScreen";
import HomePageSeller from "./app/screens/HomePageSeller";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={HomePage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomePageSeller}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={DashBoard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Checkout"
          component={Checkout}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CompanySetup"
          component={SetupCompany}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
            name="Cart"
            component={CartScreen}
            options={{ headerShown: false }}
          /> */}
        {/* <Stack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          />  */}
        {/* <Stack.Screen
            name="Redirect"
            component={Redirect}
            options={{ headerShown: false }}
          /> */}
        <Stack.Screen
          name="Company"
          component={AddCompany}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Product"
          component={AddProduct}
          options={{ headerShown: false }}
        />

        {/*           
           <Stack.Screen
          name="Homepage"
          component={HomePage}
          options={{headerShown:false}}
          />  */}
      </Stack.Navigator>
    </NavigationContainer>
    // </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
