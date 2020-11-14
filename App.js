import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-native-paper";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import HomePage from './app/screens/HomePage';
// import AddProduct from './app/screens/AddProduct';
import AddCompany from './app/screens/AddCompany';

import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Redirect from "./app/screens/Redirect";
import AddProduct from "./app/screens/AddProduct";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
         
         
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
          {/* <Stack.Screen
            name="Company"
            component={AddCompany}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
          name="Product"
          component={AddProduct}
          options={{headerShown:false}}
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
    backgroundColor: "#fff",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
