import React, { useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker'
import { TextInput, Button } from 'react-native-paper';

function AddProduct() {
  const [sellerData, setsellerData] = React.useState({
    PName: "",
    PPrice: "",
    PPhoto: "",
    categories: "",
  });

  const [errorMessage, setErrorMessage] = React.useState({
    message: "",
    show: false,
  });

  const handleSubmit = async () => {
    const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xOTIuMTY4LjEuMTg2OjgwMDBcL2FwaVwvbG9naW4iLCJpYXQiOjE2MDUyNTg1MTcsImV4cCI6MTYwNTI2MjExNywibmJmIjoxNjA1MjU4NTE3LCJqdGkiOiJYQ2I0WTdYMWVvQlFxajVOIiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.A2UaX2heYClo2yB0Y52Gw2Hhs8C5UZBTF8gyhgJMdu4'
    try {
      const {
        PName,
        PPrice,
        PPhoto,
        categories,
      } = userData;
      const results = await axios.get(
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
      if (results.status === 201) return navigation.navigate("Company");
    } catch (error) {
      setErrorMessage({ message: error.response.data.error, show: true });
      setTimeout(() => {
        setErrorMessage({ ...errorMessage, show: false });
      }, 3000);
    }
  };

  

  // image upload
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

    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.header}>HomePage</Text>
      </View>
      <View>



        {image && <Image source={{ uri: image }} style={{ width: 140, height: 120, alignItems: 'center', marginHorizontal: '31%', marginVertical: '4%' }}
          value={sellerData.PPhoto}
        //
        />}
        <TouchableOpacity onPress={pickImage} style={styles.button}>
          <Text style={styles.buttonText}>Add Product</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.fields}>

        <TextInput
          placeholder="Product Name"
          placeholderTextColor="#63707e"

          value={sellerData.PName}
          onChangeText={(PName) => setsellerData({ ...sellerData, PName })}
          style={{ fontSize: 14, height: 47, backgroundColor: 'white' }}
        />
      </View>

      {/* category */}
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
          Category{sellerData.categories ? sellerData.categories : "..."}
        </Text>
        {/* <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Choose a category</Dialog.Title>
            <Dialog.Content>
              <View> */}
                {/* pop ups*/}
                {/* <Text>Tech</Text>
                <RadioButton
                  value="Tech"
                  status={checked === "Tech" ? "checked" : "unchecked"}
                  onPress={() => {
                    setChecked("Tech");
                    setsellerData({ ...sellerData, categories: "Tech" });
                    hideDialog();
                  }}
                />
              </View>
              <View>
                <Text>Cosmetics</Text>
                <RadioButton
                  value="Cosmetics"
                  status={checked === "Cosmetics" ? "checked" : "unchecked"}
                  onPress={(value) => {
                    setChecked("Cosmetics");
                    setsellerData({ ...sellerData, categories: "Cosmetics" });
                    hideDialog();
                  }}
                />
              </View> */}
              {/* <View>
                <Text>Clothing</Text>
                <RadioButton
                  value="Clothing"
                  status={checked === "Clothing" ? "checked" : "unchecked"}
                  onPress={(value) => {
                    setChecked("Clothing");
                    setsellerData({ ...sellerData, categories: "Clothing" });
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
                    setsellerData({ ...sellerData, categories: "Art" });
                    hideDialog();
                  }}
                />
              </View> */}
              {/* <View>
                <Text>Drinks</Text>
                <RadioButton
                  value="Drinks"
                  status={checked === "Drinks" ? "checked" : "unchecked"}
                  onPress={(value) => {
                    setChecked("Drinks");
                    setsellerData({ ...sellerData, categories: "Drinks" });
                    hideDialog();
                  }}
                />
              </View> */}
              {/* <View>
                <Text>Food</Text>
                <RadioButton
                  value="Food"
                  status={checked === "Food" ? "checked" : "unchecked"}
                  onPress={(value) => {
                    setChecked("Food");
                    setsellerData({ ...sellerData, categories: "Food" });
                    hideDialog();
                  }}
                />
              </View> */}

{/* 
            </Dialog.Content>
          </Dialog>
        </Portal> */}
      </View>

      <View style={styles.field}>
        <TextInput
          placeholder="Price"
          placeholderTextColor="#63707e"
          value={sellerData.PPrice}
          onChangeText={(PPrice) => setsellerData({ ...sellerData, PPrice })}
          style={{ fontSize: 14, height: 47, backgroundColor: 'white', color: 'black' }}
        />
      </View>
      <View style={styles.btn}>
        <Button
          mode="contained"

          style={{ borderRadius: 40, height: '20%', paddingTop: 5, paddingBottom: 10, width: '88%', }}
          color="#FF0F00"
          // onPress={() => alert("Okay Ready to go")}
          onPress={handleSubmit}
          disabled={
            sellerData.PName &&
              sellerData.categories &&
              sellerData.PPrice &&
              sellerData.PPhoto
              ? false
              : true
          }
        >Upload</Button></View>
    </ScrollView>


  );

}
const styles = StyleSheet.create({
  container: {

    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    width: '100%',
    height: 52,
    left: 0,
    top: -3.6,
    justifyContent: 'center',
  },

  button: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 5,
    // marginLeft: '33%',
    marginTop: 30,
  },
  buttonText: {
    fontSize: 18,
    color: '#1B2646',
  },
  // addproduct: {
  //   marginLeft: '39%',
  //   fontSize: 18,
  //   marginTop: 20,
  // },
  fields: {
    width: "85%",
    marginTop: 20,
    marginLeft: 30,
    marginRight: "auto",

  },
  field: {
    width: "85%",
    marginTop: 20,
    marginLeft: 30,
    marginRight: "auto",
  },
  screenContainer: {
    flex: 1,
    justifyContent: "center",

    marginTop: 0,
  },
  header: {
    color: '#fff',
    paddingRight: 48,
    backgroundColor: '#1B2646',
    marginTop: -4,
    height: '100%',
    textTransform: 'uppercase',
    paddingTop: 10,
    paddingRight: 12,
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "center",
  },
  btn: {
    fontSize: 21,
    marginTop: 70,
    textTransform: "capitalize",
    marginRight: '20%',
    marginLeft: '20%',
    width: '70%',
    height: '45%',
  },
});
export default AddProduct()