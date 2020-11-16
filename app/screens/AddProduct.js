import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import {
  TextInput,
  Button,
  Dialog,
  Portal,
  RadioButton,
} from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import * as ImagePicker from "expo-image-picker";
import { Provider as PaperProvider } from "react-native-paper";
import axios from "axios";

function AddProduct({ navigation }) {
  const [userproduct, setUserProduct] = React.useState({
    PName: "",
    PPrice: "",

    PPhoto: "",
    categoryId: "",
    companyId: "",
  });
  const [companyDialog, setCompanyDialog] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState("6+ ");
  const [companiesData, setCompaniesData] = React.useState();
  const [categoriesData, setCategoriesData] = React.useState();

  const [errorMessage, setErrorMessage] = React.useState({
    message: "",
    show: false,
  });
  const showDialog = () => setVisible(true);
  const showCompanyDialog = () => setCompanyDialog(true);
  const hideDialog = () => setVisible(false);
  const hideCompanyDialog = () => setCompanyDialog(false);

  const handleSubmit = async () => {
    const token = await SecureStore.getItemAsync("Authorization");
    try {
      const { PName, PPrice, PPhoto, categoryId, companyId } = userproduct;
      console.log("datooooooa", userproduct);
      const results = await axios.post(
        "http://192.168.1.186:8000/api/company/addproduct",
        {
          name: PName,
          price: PPrice,
          image: PPhoto,
          categoryId,
          companyId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("datooooooa", results);
      // console.log("datooooooa", results);

      if (results.status === 200) return navigation.navigate("Dashboard");
    } catch (error) {
      console.log("data", error.response);
      setErrorMessage({ message: error.response.data.error, show: true });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, show: false });
      }, 3000);
    }
  };

  //Image upload
  const [image, setImage] = React.useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
    const fetchCompanies = async () => {
      const companies = await axios.get(
        "http://192.168.1.186:8000/api/companies",
        {
          headers: {
            Authorization: `Bearer ${await SecureStore.getItemAsync(
              "Authorization"
            )}`,
          },
        }
      );
      //console.log("======", companies);
      setCompaniesData(companies.data.companies);
    };
    const fetchCategories = async () => {
      const categories = await axios.get(
        "http://192.168.1.186:8000/api/categories",
        {
          headers: {
            Authorization: `Bearer ${await SecureStore.getItemAsync(
              "Authorization"
            )}`,
          },
        }
      );
      console.log("======", categories.data);
      setCategoriesData(categories.data);
    };

    fetchCompanies();
    fetchCategories();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView>
      <PaperProvider>
        <View style={styles.container}>
          <Text style={styles.header}>Add Product</Text>
        </View>
        <View>
          {image && (
            <Image
              source={{ uri: image }}
              style={{
                width: 140,
                height: 120,
                alignItems: "center",
                marginHorizontal: "31%",
                marginVertical: "4%",
              }}
            />
          )}
          <TouchableOpacity onPress={pickImage} style={styles.button}>
            <Text style={styles.buttonText}>Add Product</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.fields}>
          <TextInput
            placeholder="Product Name"
            placeholderTextColor="#63707e"
            value={userproduct.PName}
            onChangeText={(PName) => setUserProduct({ ...userproduct, PName })}
            style={{ fontSize: 14, height: 47, backgroundColor: "white" }}
          />
        </View>

        <View style={styles.fields}>
          <Text
            style={{
              backgroundColor: "#E5E5E5",
              color: "#696666",
              padding: 12,
              fontSize: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#696666",
            }}
            onPress={showCompanyDialog}
          >
            Select Company
          </Text>
          <Portal>
            <Dialog visible={companyDialog} onDismiss={hideCompanyDialog}>
              <Dialog.Title>Company name</Dialog.Title>
              {companiesData &&
                companiesData.map((company) => {
                  return (
                    <Dialog.Content>
                      <View>
                        <Text>{company.name}</Text>
                        <RadioButton
                          value={company.name}
                          status={
                            checked === company.name ? "checked" : "unchecked"
                          }
                          onPress={() => {
                            setChecked(company.name);
                            setUserProduct({
                              ...userproduct,
                              companyId: company.id,
                            });
                            hideCompanyDialog();
                          }}
                        />
                      </View>
                    </Dialog.Content>
                  );
                })}
            </Dialog>
          </Portal>
        </View>

        {/* categories */}

        <View style={styles.fields}>
          <Text
            style={{
              backgroundColor: "#E5E5E5",
              color: "#696666",
              padding: 12,
              fontSize: 10,
              borderBottomWidth: 1,
              borderBottomColor: "#696666",
            }}
            onPress={showDialog}
          >
            Select category
          </Text>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog}>
              <Dialog.Title>Company category</Dialog.Title>
              {categoriesData &&
                categoriesData.map((category) => {
                  return (
                    <Dialog.Content>
                      <View>
                        <Text>{category.name}</Text>
                        <RadioButton
                          value={category.name}
                          status={
                            checked === category.name ? "checked" : "unchecked"
                          }
                          onPress={() => {
                            setChecked(category.name);
                            setUserProduct({
                              ...userproduct,
                              categoryId: category.id,
                            });
                            hideDialog();
                          }}
                        />
                      </View>
                    </Dialog.Content>
                  );
                })}
            </Dialog>
          </Portal>
        </View>

        <View style={styles.field}>
          <TextInput
            placeholder="Price"
            placeholderTextColor="#63707e"
            value={userproduct.PPrice}
            onChangeText={(PPrice) =>
              setUserProduct({ ...userproduct, PPrice })
            }
            style={{
              fontSize: 14,
              height: 47,
              backgroundColor: "white",
              color: "black",
            }}
          />
        </View>

        <View style={styles.btn}>
          <Button
            mode="contained"
            style={{ borderRadius: 55 }}
            color="#FF0F00"
            onPress={handleSubmit}
            // onPress={() => alert("Okay Ready to go")}
          >
            Upload
          </Button>
        </View>
      </PaperProvider>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: "100%",
    height: 65,
    left: 0,
    top: -3.6,
    justifyContent: "center",
  },
  header: {
    color: "#fff",
    paddingRight: 48,
    backgroundColor: "#1B2646",
    marginTop: -4,
    height: "80%",
    textTransform: "uppercase",
    paddingTop: 10,
    paddingRight: 12,
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#f4f3f3",
    padding: 20,
    borderRadius: 5,
    marginLeft: "8%",
    marginRight: "5%",
    marginTop: "10%",
    width: "85%",
  },
  buttonText: {
    fontSize: 18,
    color: "#1B2646",
    padding: 10,
    paddingStart: 80,
  },

  // addproduct: {
  //   marginLeft:'34%',
  //   fontSize:18,
  //   marginTop: 10,
  // },
  fields: {
    width: "85%",
    marginTop: 10,
    marginLeft: 30,
    marginRight: "auto",
  },
  field: {
    width: "85%",
    marginTop: 10,
    marginLeft: 30,
    marginRight: "auto",
  },

  // header: {
  //   color: 'black',
  //   position: 'relative',

  //   // backgroundColor: '#1B2646',
  //   marginTop: -90,
  //   textTransform: 'uppercase',
  //   paddingTop: 55,
  //   paddingBottom: 5,
  //   height: '100%',

  //   fontSize: 20,
  //   textTransform: "capitalize",
  //   textAlign: "center",
  // },
  btn: {
    fontSize: 21,
    marginTop: 75,

    textTransform: "capitalize",
    marginRight: "20%",
    marginLeft: "20%",
    width: "65%",
    height: "90%",
  },
});
export default AddProduct;
