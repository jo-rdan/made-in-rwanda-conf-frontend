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
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Redirect from "./app/screens/Redirect";

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {/* <View style={styles.container}>
            <RegistrationScreen />
          </View> */}
          {/* <Stack.Screen
            name="Register"
            component={RegistrationScreen}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          /> */}
          {/* <Stack.Screen
            name="Checkout"
            component={Checkout}
            options={{ headerShown: false }}
          /> */}
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
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
