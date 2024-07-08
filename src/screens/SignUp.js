import React, { Component, useEffect, useState } from 'react'
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import CheckBox from '@react-native-community/checkbox';

const Login = ({ navigation }) => {

    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSelected, setSelection] = useState(false);


    const toggleSecureEntry = () => {
        setSecureTextEntry(!secureTextEntry);
    };

    const handleSignUp = async () => {

    };


    return (
        <View>

            <View style={styles.container}>


                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.sign}>
                    <Text style={styles.sign}>LOG IN</Text>
                </TouchableOpacity>

                <Text style={styles.welcomeText}>SIGN UP</Text>

                <View style={styles.input}>
                    <TextInput
                        placeholder='Name'
                        style={styles.place}
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                </View>

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
                
                <TouchableOpacity onPress={handleSignUp} style={styles.loginButton}>
                    <Text style={styles.log}>Sign Up</Text>
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
        marginBottom: 15,
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
        height: '12%',
        marginBottom: 10,

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
