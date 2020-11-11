import React,{useEffect,useState}from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';


export default function AddCompany() {
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
        <Text style={styles.header}>Add Company</Text>
      </View>
      <View>
        {/* <Image
          source={require('../assets/photoLogo.png')}
          style={{
            width: '25%', height: 57, marginTop: 26,
            marginLeft: 135, marginRight: 50,
          }}
       
        /> */}
        {image && <Image source={{ uri: image }} style={{ width:140, height: 120, alignItems:'center',marginHorizontal:'31%', marginVertical:'4%'}} />}
      <TouchableOpacity onPress={pickImage} style={styles.button}>
        <Text style={styles.buttonText}>Add Product</Text>
      </TouchableOpacity>
      </View>

      <View style={styles.fields}>
    
        <TextInput
        
          placeholder="Company Name"
          placeholderTextColor = "#63707e"
         
          value={userData.productName}
          onChange={(text) => setUserData({ ...userData, productName: text })}
          style={{ fontSize: 14,height:47,backgroundColor:'white',}}
        />
      </View> 
       <View style={styles.field}>
        <TextInput
          placeholder="Company Address"
          placeholderTextColor = "#63707e"
          fontcolor="red"
          value={userData.productPrice}
          onChange={(text) => setUserData({ ...userData, productPrice: text })}
          style={{ fontSize: 14,height:47,backgroundColor:'white',color:'black'}}
        />
      </View>
      <View style={styles.field}>
        <TextInput
          placeholder="Company Description"
          placeholderTextColor = "#63707e"
          value={userData.productPrice}
          onChange={(text) => setUserData({ ...userData, productPrice: text })}
          style={{ fontSize: 14,height:47,backgroundColor:'white',color:'black'}}
        />
      </View>
      <View style={styles.btn}>
          <Button
            mode = "contained"
            style={{borderRadius: 55}}
            color="#FF0F00"
       
            onPress = {()=> alert("Okay Ready to go")}
          >Set up Your Company</Button></View>
    </ScrollView> 



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
    marginTop:-4,
    height:'80%',
    textTransform: 'uppercase',
paddingTop:10,
paddingRight:12,
    fontSize: 20,
    textTransform: "capitalize",
    textAlign: "center",
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
  //   marginLeft:'34%',
  //   fontSize:18,
  //   marginTop: 10,
  // },
  fields: {
    width: "85%",
    marginTop:10,
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
    marginTop:75,
  
    textTransform: "capitalize",
    marginRight: '20%',
    marginLeft: '20%',
    width: '65%',
    height: '90%',
  },
});