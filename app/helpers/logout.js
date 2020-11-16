import * as SecureStore from "expo-secure-store";

export const logout = async (navigation) => {
  await SecureStore.deleteItemAsync("Authorization");
  navigation.navigate("Login");
};
