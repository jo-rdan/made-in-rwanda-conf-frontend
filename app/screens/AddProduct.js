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
import * as ImagePicker from 'expo-image-picker';
import { Provider as PaperProvider } from "react-native-paper";
import axios from "axios";

function AddProduct() {

  const [userproduct, setUserProduct] = React.useState({
    PName: "",
    PPrice: "",

    PPhoto: "",
    categories: "",
  });
  const [visible, setVisible] = React.useState(false);
  const [checked, setChecked] = React.useState("6+ ");

  const [errorMessage, setErrorMessage] = React.useState({
    message: "",
    show: false,
  });
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);



  const handleSubmit = async () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTg2OjgwMDBcL2FwaVwvbG9naW4iLCJpYXQiOjE2MDUyNTg1MTcsImV4cCI6MTYwNTI2MjExNywibmJmIjoxNjA1MjU4NTE3LCJqdGkiOiJYQ2I0WTdYMWVvQlFxajVOIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.A2UaX2heYClo2yB0Y52Gw2Hhs8C5UZBTF8gyhgJMdu4'
    try {
      const {
        PName,
        PPrice,
        PPhoto,
        categories,
      } = userproduct;
      const results = await axios.post(
        "http://192.168.1.186:8000/api/companies",
        {
          name: PName,
          price: PPrice,
          image: PPhoto,
          categories: categories,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log('data', results);

      if (results.status === 201) return navigation.navigate("Product");
    } catch (error) {
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
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
<PaperProvider>
      <View style={styles.container}>
        <Text style={styles.header}>Add Product</Text>
      </View>
      <View>

        {image && <Image source={{ uri: image }}
          style={{ width: 140, height: 120, alignItems: 'center', marginHorizontal: '31%', marginVertical: '4%' }} />}
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
          style={{ fontSize: 14, height: 47, backgroundColor: 'white', }}
        />
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
          I am in {userproduct.categories ? userproduct.categories : "..."}{" "}Industry
        </Text>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Company category</Dialog.Title>
            <Dialog.Content>
              <View>
                <Text>Tech</Text>
                <RadioButton
                  value="Tech"
                  status={checked === "Tech" ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked("Tech");
                    setUserProduct({ ...userproduct, categories: "Tech" });
                    hideDialog();
                  }}
                />
              </View>
              <View>
                <Text>Beauty</Text>
                <RadioButton
                  value="Beauty"
                  status={checked === "Beauty" ? "checked" : "unchecked"}
                  onPress={(value) => {
                    setChecked("Beauty");
                    setUserProduct({ ...userproduct, categories: "Beauty" });
                    hideDialog();
                  }}
                />
              </View>
              <View>
                <Text>Clothing</Text>
                <RadioButton
                  value="Clothing"
                  status={checked === "Clothing" ? "checked" : "unchecked"}
                  onPress={(value) => {
                    setChecked("Clothing");
                    setUserProduct({ ...userproduct, categories: "Clothing" });
                    hideDialog();
                  }}
                />
              </View>
              <View>
                <Text>Art</Text>
                <RadioButton
                  value="Art"
                  status={checked === "Art" ? "checked" : "unchecked"}
                  onPress={(value) => {
                    setChecked("Art");
                    setUserProduct({ ...userproduct, categories: "Art" });
                    hideDialog();
                  }}
                />
              </View>
              <View>
                <Text>Food</Text>
                <RadioButton
                  value="Food"
                  status={checked === "Food" ? "checked" : "unchecked"}
                  onPress={(value) => {
                    setChecked("Food");
                    setUserProduct({ ...userproduct, categories: "Food" });
                    hideDialog();
                  }}
                />
              </View>
              
            </Dialog.Content>
          </Dialog>
        </Portal>

      </View>




      <View style={styles.field}>
        <TextInput
          placeholder="Price"
          placeholderTextColor="#63707e"
          value={userproduct.PPrice}
          onChangeText={(PPrice) => setUserProduct({ ...userproduct, PPrice })}
          style={{ fontSize: 14, height: 47, backgroundColor: 'white', color: 'black' }}
        />
      </View>

      <View style={styles.btn}>
        <Button
          mode="contained"
          style={{ borderRadius: 55 }}
          color="#FF0F00"
          onPress={handleSubmit}
          // onPress={() => alert("Okay Ready to go")}

          disabled={
            userproduct.PName &&
            userproduct.categories&&
              userproduct.PPrice

              ? false
              : true
          }
        >Upload</Button>
      </View>
      </PaperProvider>



  );

}
const styles = StyleSheet.create({
  container: {

    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: '100%',
    height: 65,
    left: 0,
    top: -3.6,
    justifyContent: 'center',
  },
  header: {
    color: '#fff',
    paddingRight: 48,
    backgroundColor: '#1B2646',
    marginTop: -4,
    height: '80%',
    textTransform: 'uppercase',
    paddingTop: 10,
    paddingRight: 12,
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "center",
  },
  button: {
    backgroundColor: '#f4f3f3',
    padding: 20,
    borderRadius: 5,
    marginLeft: '8%',
    marginRight: '5%',
    marginTop: "10%",
    width: "85%",

  },
  buttonText: {
    fontSize: 18,
    color: '#1B2646',
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
    marginRight: '20%',
    marginLeft: '20%',
    width: '65%',
    height: '90%',
  },
});
export default AddProduct;