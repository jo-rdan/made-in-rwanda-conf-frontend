import React from 'react';
import { Image, View,  StyleSheet, Text } from 'react-native';

import { TextInput } from 'react-native-paper';

function RegistrationScreen(props) {
    const [text, setText] = React.useState('');
    const [focus, setFocus] = React.useState(false)
    
    return (
        <View style={styles.background}>
            <Image source={require('../assets/logo.png')}/>
            <View style={styles.registerForm}>
                <Text style={styles.title}>Register</Text>
                <View style={styles.sideFields}>
                    <View style={styles.countryCode}>
                        <Text>+250</Text>
                    </View>
                    <View style={{alignSelf: 'flex-end'}}>
                        <TextInput
                            // label={ focus ? "" : "Phone"}
                            placeholder="Phone"
                            value={text}
                            onChangeText={text => setText(text)}
                            onChange={() => setFocus(true)}
                            style={{ width: 200, height: 40, fontSize: 10,}}
                            />
                    </View>
                </View>
            </View>
        </View>
    );

}
const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1B2646',
        width: 411,
        height: 398,
        alignItems: "center",
        paddingTop: 89
    },
    registerForm: {
        width: 352,
        height: 470,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderRadius: 10,
        position: 'absolute',
        top:200,
        left: 22
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: 'center',
        paddingTop: 20
    },
    countryCode: {
        width: 73,
        padding: 10,
        marginLeft: 30,
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#E5E5E5',
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        borderLeftWidth: 1,
        borderLeftColor: '#E5E5E5',
        borderRightWidth: 1,
        borderRightColor: '#E5E5E5',
        borderRadius: 5
    },
    sideFields: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})
   


export default RegistrationScreen;