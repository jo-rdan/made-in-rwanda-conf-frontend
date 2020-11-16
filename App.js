import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { Provider } from "react-native-paper";
import RegistrationScreen from "./app/screens/RegistrationScreen";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Redirect from "./app/screens/Redirect";
import HomePageSeller from "./app/screens/HomePageSeller";
import TechnologyPage from "./app/screens/TechnologyPage";
import DrinksPage from "./app/screens/DrinksPage";

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
            name="TechnologyPage"
            component={TechnologyPage}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="DrinksPage"
            component={DrinksPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Redirect"
            component={Redirect}
            options={{ headerShown: false }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
  },
});
