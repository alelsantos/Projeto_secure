import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Welcome from "../pages/Welcome";
import SignIn from "../pages/SignIn";
import InsureDate from '../pages/InsureDate';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen style={styles.menu}
                name="Login with"
                component={Welcome}

            />
            <Stack.Screen
                name="SignIn"
                component={SignIn}
 
            />

<Stack.Screen
                name="InsureDate"
                component={InsureDate}
 
            />
        </Stack.Navigator>
    )
};

const styles = StyleSheet.create({

    container: {

    },




    
    
})