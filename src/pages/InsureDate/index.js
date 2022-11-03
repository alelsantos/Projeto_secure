import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Input, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';

export default function InsureDate() {
    return (
        <View style={styles.container}>
            <Animatable.View animation="fadeInLeft" delay={500} style={styles.container.Header}>
                {/*-Authentication Default*/}
                <View id="default" style={styles.Defaultbutton}>
                    <TouchableOpacity style={styles.buttonDefault}>
                        <Text>po</Text>
                        <TextInput
                            placeholder="Ex: John Miller" placeholderTextColor={'blue'} />
                    </TouchableOpacity>


   
                    
                </View>
               

            </Animatable.View>



            <TouchableOpacity
                    style={styles.Loginbutton}
                    onPress={() => navigation.navigate('InsureDate')}>
                    <Text style={styles.buttonLogin}>SEND</Text>
                </TouchableOpacity>


                  
            

        </View>
    );
}


const styles = StyleSheet.create({


    container: {
        maxWidth: 350,
        maxheight: 50,
        marginTop: 202,
        borderColor: '  #D9D9D9'


    },

    buttonSocial: {
        Margin: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#20232a',
        textAlign: 'center',
        flexDirection: 'row',
        paddingBottom: 14

    },

    buttonDefault: {
        Margin: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#20232a',
        textAlign: 'center',
        marginTop: 3,
        marginBottom: 10,
        lineHeight: 13,
        marginLeft: 20,
        flexDirection: 'row',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        paddingBottom: 14

    },

    buttonSocial: {

        backgroundColor: '#D9D9D9',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#Gray85',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 10,
        flexDirection: 'row',
        paddingBottom: 14,
        marginLeft: 20



    },


    buttonLogin: {

        backgroundColor: '#0074FC',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 20,
        color: '#20232a',
        textAlign: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        fontSize: 20,
        marginTop: 10,
        marginLeft: 200,
        marginBottom: 4,
        strokeWidth: 123
    },

    Redefinebutton: {
        textAlign: 'center',
        color: '#0074FC'
    },

    containerForm: {
        color: '#000000'
    },

    buttonOr: {

        textAlign: 'center',
        lineHeight: 40,
        lineSize: 23,
        color: '#000000'
    },
    buttonAccount: {
        textAlign: 'center',
        color: '#0074FC',
        marginTop: 10
    }

})
