import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity, Modal, Button } from 'react-native';
import { faHouse, faCircleInfo, faGear, faComments, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useNavigation } from '@react-navigation/native';

const Comments = () => {
    const navigation = useNavigation();
    const [showFilterOptions, setShowFilterOptions] = useState(false);
    const [showHomeContent, setShowHomeContent] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedNotification, setSelectedNotification] = useState(null);

    const handleHomeClick = () => {
        navigation.navigate('Main');
        setShowFilterOptions(false);
        setShowHomeContent(true);
    };

    const notifications = [
        { id: '1', title: 'Notification 1', description: 'This is the first notification', details: 'More details about notification 1' },
        { id: '2', title: 'Notification 2', description: 'This is the second notification', details: 'More details about notification 2' },
        { id: '3', title: 'Notification 3', description: 'This is the third notification', details: 'More details about notification 3' },
    ];

    const handleNotificationPress = (notification) => {
        setSelectedNotification(notification);
        setModalVisible(true);
    };

    const chats = [
        { id: '1', name: 'Mario Müller', lastMessage: 'Hey man, how are you?' },
        { id: '2', name: 'Alice lacroix', lastMessage: 'Are you coming to play football?' },
        { id: '3', name: 'PK1-Gruppe', lastMessage: 'Let’s meet tomorrow at the university' },
    ];

    const handleChatPress = (chat) => {
        navigation.navigate('Chat', { chatId: chat.id, chatName: chat.name });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Messages</Text>
            </View>

            <FlatList
                data={chats}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleChatPress(item)} style={styles.chatItem}>
                        <Text style={styles.chatName}>{item.name}</Text>
                        <Text style={styles.chatLastMessage}>{item.lastMessage}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.chatList}
            />

            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContainer}>
                        {selectedNotification && (
                            <>
                                <Text style={styles.modalTitle}>{selectedNotification.title}</Text>
                                <Text style={styles.modalDescription}>{selectedNotification.description}</Text>
                                <Text style={styles.modalDetails}>{selectedNotification.details}</Text>
                            </>
                        )}
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>

            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                    <FontAwesomeIcon icon={faGear} style={styles.icon} size={32} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Info')}>
                    <FontAwesomeIcon icon={faCircleInfo} style={styles.icon} size={32} />
                </TouchableOpacity>

                <TouchableOpacity onPress={handleHomeClick}>
                    <FontAwesomeIcon icon={faHouse} style={styles.icon} size={32} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Comments')}>
                    <FontAwesomeIcon icon={faComments} style={styles.icon} size={32} color={'orange'} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
                    <FontAwesomeIcon icon={faCalendar} style={styles.icon} size={32} />
                </TouchableOpacity>
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
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#e7e7e7',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
    },
    chatList: {
        padding: 10,
    },
    chatItem: {
        backgroundColor: '#f9f9f9',
        padding: 15,
        marginVertical: 8,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#e7e7e7',
    },
    chatName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    chatLastMessage: {
        fontSize: 14,
        color: '#666',
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
    modalBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: 300,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        marginBottom: 10,
    },
    modalDescription: {
        fontSize: 18,
        color: '#333',
        marginBottom: 10,
    },
    modalDetails: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
});

export default Comments;
