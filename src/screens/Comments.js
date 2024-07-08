import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Comments = () => {
    const navigation = useNavigation();
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [showHomeContent, setShowHomeContent] = useState(false);


    const handleHomeClick = () => {
        navigation.navigate('Main');
        setShowFilterOptions(false);
        setShowHomeContent(true); // Set showHomeContent to true when home icon is clicked
    };
    return (
        <View style={styles.footer}>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')} >
                <FontAwesomeIcon icon={faGear} style={styles.icon} size={32} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Info')} >
                <FontAwesomeIcon icon={faCircleInfo} style={styles.icon} size={32} />
            </TouchableOpacity>


            <TouchableOpacity onPress={handleHomeClick}>
                <FontAwesomeIcon icon={faHouse} style={styles.icon} size={32} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Comments')} >
                <FontAwesomeIcon icon={faComments} style={styles.icon} size={32} color={'orange'} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Calender')} >
                <FontAwesomeIcon icon={faCalendar} style={styles.icon} size={32} />
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
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
})
export default Comments