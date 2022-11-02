import React from 'react-native';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button, TextInput } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CurrentRenderContext, NavigationContainer } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            {/*-Authentication Default*/}
            <View id="default" style={styles.Defaultbutton}>
                <TouchableOpacity style={styles.buttonDefault}>
                    <TextInput
                        placeholder="Email" placeholderTextColor={'blue'} />
                </TouchableOpacity>


                <TouchableOpacity style={styles.buttonDefault}>
                    <TextInput
                        placeholder="Password" placeholderTextColor={'blue'}

                    />
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    style={styles.Loginbutton}
                    onPress={() => navigation.navigate('InsureDate')}>
                    <Text style={styles.buttonLogin}>LOGIN</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style={styles.buttonRedefine}
                onPress={() => navigation.navigate('SignIn')}>
                <Text>Redefine Password</Text>
            </TouchableOpacity>



            <View id="apple" style={styles.containerForm}>
                <TouchableOpacity
                    TextInput style={styles.buttonApple} id="idApple">
                    <Image source={require('../../assets/iconApple.png')}
                        placeholder="Email or user" placeholderTextColor={'blue'} />
                </TouchableOpacity>
            </View>

            {/*-Authentication Facebook*/}
            <View id="face" style={styles.containerForm}>
                <TouchableOpacity style={styles.buttonFace}>
                    <TextInput id="idFace"
                        placeholder="Email or user" placeholderTextColor={'blue'}
                    />
                </TouchableOpacity>
            </View>

            {/*-Authentication Google*/}
            <View id="google" style={styles.containerForm}>
                <TouchableOpacity style={styles.button}>
                    <TextInput id="idGoogle"
                        placeholder="Email or user" placeholderTextColor={'blue'}
                    />
                </TouchableOpacity>
            </View>

            {/*-Authentication Twitter*/}
            <View id="twitter" style={styles.containerForm}>
                <TouchableOpacity style={styles.button}>
                    <TextInput id="idTwitter"
                        placeholder="Email or user" placeholderTextColor={'blue'}
                    />
                </TouchableOpacity>
            </View>





            <View>
                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Logging with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Logging with Google</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Logging with Facebook</Text>
                </TouchableOpacity>


                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Logging with Twitter</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button3}
                    onPress={() => navigation.navigate('SignIn')}>
                    <Text style={styles.button}>Create an account</Text>
                </TouchableOpacity>
            </View>

        </View >

    );
}

const styles = StyleSheet.create({


    container: {
        borderRadius: 20,
    },

    buttonApple: {
        height: 52,
        width: 273,
        left: 59,
        top: 435,

    },

    buttonDefault: {
        Margin: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#20232a',
        textAlign: 'center'

    },

    buttonLogin: {
        position: "absolute",
       // width: "136px",
        height: "52",
        left: "calc(50% - 136px/2)",
        top: "291px",
        backgroundColor: 'rgba(0, 116, 252, 0.3)', 
        borderRadius: "20px"
}

})
