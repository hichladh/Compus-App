import React, { Component, useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = ({ navigation }) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const handleLogin = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            if (response.ok) {
                // If response status is OK (200), login successful
                console.log('Login successful');
                navigation.navigate('Main');
            } else {
                // If response status is not OK, login failed
                console.log('Login failed');
                
            }
        } catch (error) {
            // If an error occurs during the request
            console.error('Login error:', error);
           
        }
    };


    return (
        <View>

            <View style={styles.container}>


                <TouchableOpacity onPress={() => navigation.navigate('SignUp')} style={styles.sign}>
                <Text style={styles.sign}>SIGN UP</Text>
                </TouchableOpacity>

                <Text style={styles.welcomeText}>LOG IN</Text>

                <View style={styles.input}>
                    <TextInput
                        placeholder='Email'
                        style={styles.place}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput
                        placeholder='Password'
                        secureTextEntry={secureTextEntry}
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        style={styles.place} />
                    <TouchableOpacity onPress={toggleSecureEntry} style={styles.eyeIcon}>
                        <FontAwesomeIcon
                            icon={secureTextEntry ? faEyeSlash : faEye}
                            size={30}
                            color='grey' />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
                    <Text style={styles.log}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ResetPswd')} >
                    <Text style={styles.forg}>Forgot your password?</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
   
    welcomeText: {
        fontWeight: 'bold',
        fontSize: 27,
        paddingTop: 18,
        color: 'black',
    },
    nrmlText: {
        fontSize: 17,
        paddingBottom: 30,
    },

    log: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
    },

    forg: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 19,
    },

    input: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginTop: 15,
        flexDirection: 'row'
    },
    place: {
        fontSize: 16,
    },
    eyeIcon: {
        marginLeft: 230, 
        marginTop: 8,
    },
    loginButton: {
        backgroundColor: 'orange',
        padding: 10,
        alignItems: 'center',
        borderRadius: 25,
        width: '100%',
        marginTop: 35,
        height: '15%',

    },

    sign: {
        alignSelf: 'flex-end', // Aligns to the right 
        marginRight: 10, 
        color: 'orange',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15,
    },

});

export default Login;
