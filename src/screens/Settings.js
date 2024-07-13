import React, { useContext , useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Switch, Modal, Alert } from 'react-native';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import profileImage from './taswira.jpg';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from './UserContext';

const Settings = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(true);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const [text, setText] = useState('Press to Switch');
  const [modalVisible, setModalVisible] = useState(false);

  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

  const toggleSwitch = () => {
    if (isEnabled) {
      setText('Praktische informatik');
    } else {
      setText('');
    }
    setIsEnabled(previousState => !previousState);
  };

  const handleHomeClick = () => {
    navigation.navigate('Main');
  };

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const openProfilePicture = () => {
    setModalVisible(true);
  };

  const editProfilePicture = () => {
    // Implement functionality to edit the profile picture
    Alert.alert('Edit Profile Picture', 'Implement functionality to edit the profile picture');
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

      <TouchableOpacity onPress={openProfilePicture} style={styles.profileContainer}>
        <Image source={profileImage} style={styles.profilePicture} />
        <Text style={styles.name}>{user ? user.username : 'Loading...'}</Text>
        <Text style={styles.subtitle}>{text}</Text>
      </TouchableOpacity>

     
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <Image source={profileImage} style={styles.modalProfilePicture} />
          <View style={styles.modalOptions}>
            <TouchableOpacity onPress={editProfilePicture} style={styles.modalButton}>
              <Text>Edit Profile Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <View style={styles.section}>
        <Text style={styles.sectionText}>Studiengang anzeigen</Text>
        <Switch
          thumbColor={isEnabled ? 'orange' : 'grey'}
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={styles.switch}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>Enable Notifications</Text>
        <Switch
          thumbColor={isEnabled2 ? 'orange' : 'grey'}
          onValueChange={toggleSwitch2}
          value={isEnabled2}
          style={styles.switch}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>Enable Dark Theme</Text>
        <Switch
          thumbColor={isEnabled3 ? 'orange' : 'grey'}
          onValueChange={toggleSwitch3}
          value={isEnabled3}
          style={styles.switch}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>Allow Automatic Updates</Text>
        <Switch
          thumbColor={isEnabled4 ? 'orange' : 'grey'}
          onValueChange={toggleSwitch4}
          value={isEnabled4}
          style={styles.switch}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionText}>Enable Biometric Authentication</Text>
        <Switch
          thumbColor={isEnabled1 ? 'orange' : 'grey'}
          onValueChange={toggleSwitch1}
          value={isEnabled1}
          style={styles.switch}
        />
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
  );
};

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
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: 'gray',
    marginTop: 10,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionText: {
    fontSize: 18,
    marginLeft: 10,
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }],
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modalProfilePicture: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 20,
  },
  modalOptions: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalButton: {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
});

export default Settings;
