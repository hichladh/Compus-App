import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import Login from './Login' ;
import profileImage from './taswira.jpg'; 
import { RadioButton } from 'react-native-paper';




const Settings = () => {
    const navigation = useNavigation();
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [showHomeContent, setShowHomeContent] = useState(false);


    const handleHomeClick = () => {
        navigation.navigate('Main');
        setShowFilterOptions(false);
        setShowHomeContent(true); // Set showHomeContent to true when home icon is clicked
    };



    const handleLogout = () => {
        
        navigation.navigate('Login'); // Navigate to Login page on logout
    };



    return (

        <View style={styles.container}>
            <View style={styles.headerBackground}></View>
        <View style={styles.header}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Profile</Text>
            </View>
            <TouchableOpacity onPress={handleLogout}>
                <Text style={styles.logout}>Logout</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.profileContainer}>
                <Image
                    source={profileImage} // Use the imported local image
                    style={styles.profilePicture}
                />
            

            <Text style={styles.name}>Maria Smith</Text>
             <Text style={styles.subtitle}>Praktische Informatik</Text>
           
            </View>



        <View style={styles.footer}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <FontAwesomeIcon icon={faGear} style={styles.icon} size={32} color={'orange'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                <FontAwesomeIcon icon={faCircleInfo} style={styles.icon} size={32} />
            </TouchableOpacity>

            <TouchableOpacity onPress={handleHomeClick}>
                <FontAwesomeIcon icon={faHouse} style={styles.icon} size={32} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                <FontAwesomeIcon icon={faComments} style={styles.icon} size={32} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Calender')}>
                <FontAwesomeIcon icon={faCalendar} style={styles.icon} size={32} />
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({


    container: {
        flex: 1,
    },

    headerBackground: {
        height: '30%',
        backgroundColor: 'orange',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },

    header: {
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderBottomColor: '#e7e7e7',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginLeft: 50,
        color: 'white',
    },
    logout: {
        fontSize: 16,
        color: 'white',
        
    },

    profileContainer: {
        alignItems: 'center',
        marginTop: 30,
    },

    profilePicture: {
        width: 150, // Increase the width of the image
        height: 150, // Increase the height of the image
        borderRadius: 75, // Make the image circular (half of the width/height)
        position: 'absolute',
        marginBottom: 10, 
    },

    name: {
         marginTop: 150,
         fontSize: 28, // Increased font size
         fontWeight: 'bold', // Bold font weight
         color: '#333', // Darker color
    },

    subtitle: {
        fontSize: 18,
        color: 'gray',
        marginTop: 10, // Space between the name and subtitle
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    sectionText: {
        fontSize: 18,
        marginRight: 10,
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#f8f8f8',
        borderTopWidth: 1,
        borderTopColor: '#e7e7e7',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    icon: {
        marginHorizontal: 15,
    },
});
export default Settings