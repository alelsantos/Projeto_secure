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
                        <TextInput
                            placeholder="Ex: John Miller" placeholderTextColor={'blue'} />
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.buttonDefault}>
                        <TextInput
                            placeholder="Ex: 123 456 789" placeholderTextColor={'blue'}
                        >
                        </TextInput>
                    </TouchableOpacity>


                    
                    <TouchableOpacity style={styles.buttonDefault}>
                        <TextInput
                            placeholder="Ex: 123 456 789" placeholderTextColor={'blue'}
                        >
                        </TextInput>
                    </TouchableOpacity>


                    <TouchableOpacity style={styles.buttonDefault}>
                        <TextInput
                            placeholder="Ex: +1 (000) 000 0000" placeholderTextColor={'blue'}
                        >
                        </TextInput>
                    </TouchableOpacity>

                    <Input id="date" type="date">
                    
                    </Input>
                   
                   
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

    },


    buttonDefault: {
        Margin: 50,
        borderWidth: 1,
        borderColor: 'rgba(0, 0, 0, 1)',
        borderRadius: 70,
        color: '#20232a',
        textAlign: 'center'

    }
});