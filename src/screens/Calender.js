import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput, Button, FlatList } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faCircleInfo, faGear, faComments, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Calender = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [eventTitle, setEventTitle] = useState('');
  const [events, setEvents] = useState({});
  const navigation = useNavigation();

  const onDayPress = day => {
    setSelectedStartDate(day.dateString);
    setModalVisible(true);
  };

  const addEvent = () => {
    if (!eventTitle) return;

    setEvents(prevEvents => {
      const updatedEvents = { ...prevEvents };
      if (!updatedEvents[selectedStartDate]) {
        updatedEvents[selectedStartDate] = [];
      }
      updatedEvents[selectedStartDate].push({ title: eventTitle });
      return updatedEvents;
    });

    setEventTitle('');
    setModalVisible(false);
  };

  const renderEvent = ({ item }) => (
    <View style={styles.eventItem}>
      <Text>{item.title}</Text>
    </View>
  );

  const handleHomeClick = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedStartDate]: { selected: true, marked: true, selectedColor: 'blue' },
          ...Object.keys(events).reduce((acc, date) => {
            acc[date] = { marked: true };
            return acc;
          }, {})
        }}
      />
      <View>
        <Text>SELECTED DATE: {selectedStartDate}</Text>
      </View>
      <FlatList
        data={Object.keys(events).flatMap(date => events[date].map(event => ({ date, title: event.title })))}
        renderItem={renderEvent}
        keyExtractor={(item, index) => `${item.date}-${index}`}
        contentContainerStyle={styles.eventList}
      />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            placeholder="Event Title"
            value={eventTitle}
            onChangeText={setEventTitle}
            style={styles.input}
          />
          <View style={styles.buttonContainer}>
            <Button style={styles.button} title="Cancel" color="red" onPress={() => setModalVisible(false)} />
            <Button style={styles.button} title="Add Event" onPress={addEvent} />
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
          <FontAwesomeIcon icon={faComments} style={styles.icon} size={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calender')}>
          <FontAwesomeIcon icon={faCalendar} style={styles.icon} size={32} color={'orange'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    padding: 10,
  },
  calendar: {
    borderWidth: 1,
    borderColor: '#e7e7e7',
    borderRadius: 5,
    marginBottom: 20,
  },
  modalView: {
    flex: 1,
    justifyContent: 'center', // Center the modal vertically
    alignItems: 'center', // Center the modal horizontally
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'orange', // Make modal text orange
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  buttonOpen: {
    backgroundColor: 'orange', // Make open button orange
  },
  buttonClose: {
    backgroundColor: 'orange', // Make close button orange
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: 'orange', // Make add button orange
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelButton: {
    backgroundColor: 'orange', // Make cancel button orange
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
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
  eventList: {
    marginTop: 20,
    maxHeight: 200, // Adjust this height as needed
  },
  eventItem: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: 'orange', // Add orange border to event items
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10,
  },
});

export default Calender;
