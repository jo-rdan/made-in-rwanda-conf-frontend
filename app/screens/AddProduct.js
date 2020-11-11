import React,{useState, useEffect} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TextInput, Button } from 'react-native-paper';




export default function AddProduct() {
  
  // const [selectedImage, setSelectedImage] = React.useState(null);

  // let openImagePickerAsync = async () => {
  //   let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

  //   if (permissionResult.granted === false) {
  //     alert("Permission to access camera roll is required!");
  //     return;
  //   }

  //   let pickerResult = await ImagePicker.launchImageLibraryAsync();

  //   if (pickerResult.cancelled === true) {
  //     return;
  //   }

  //   setSelectedImage({ localUri: pickerResult.uri });
  // };
  // if (selectedImage !== null) {
  //   return (
  //     <View style={styles.container}>
  //       <Image
  //         source={{ uri: selectedImage.localUri }}
  //         style={styles.thumbnail}
  //       />
  //     </View>
  //   );
  // }


  const [image, setImage] = useState(null);

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
      {/* <Image
        source={require('../assets/add.png')}
        style={{
          width: 53, height: 57, marginTop: 50,
          marginLeft: 160, marginRight: 50,
        }}
    
      /> */}
      {image && <Image source={{ uri: image }} style={{ width:140, height: 120, alignItems:'center',marginHorizontal:'31%', marginVertical:'4%'}} />}
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
    </View>


    <View style={styles.fields}>

      <TextInput
        placeholder="Product Name"
        placeholderTextColor="#63707e"

        // value={userData.productName}
        // onChange={(text) => setUserData({ ...userData, productName: text })}
        style={{ fontSize: 14, height: 47, backgroundColor: 'white' }}
      />
    </View>
    <View style={styles.field}>
      <TextInput
        placeholder="Price"
        placeholderTextColor="#63707e"
        // value={userData.productPrice}
        // onChange={(text) => setUserData({ ...userData, productPrice: text })}
        style={{ fontSize: 14, height: 47, backgroundColor: 'white', color: 'black' }}
      />
    </View>
    <View style={styles.btn}>
      <Button
        mode="contained"

        style={{ borderRadius: 40, height: '20%', paddingTop: 5, paddingBottom: 10, width: '88%', }}
        color="#FF0F00"
        onPress={() => alert("Okay Ready to go")}
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
    marginLeft: '33%',
    marginTop: 1,
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