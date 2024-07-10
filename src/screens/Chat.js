import React, { Component, useState } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';


const Chat = ({ route }) => {
    const { chatId, chatName } = route.params;
    const navigation = useNavigation();

    const handleBackPress = () => {
        navigation.goBack();
    };

    return (

        <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
            <FontAwesomeIcon size={24} color={'#333'} icon={faArrowLeftLong} />  
            </TouchableOpacity>
            <Text style={styles.headerText}>Chat with {chatName}</Text>
        </View>
        <View style={styles.chatContainer}>
            
            <Text>Chat messages for {chatName} will appear here.</Text>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
    },
    backButton: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    chatContainer: {
        flex: 1,
        padding: 20,
    },
});

export default Chat