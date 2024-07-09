import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faCircleInfo, faGear, faComments, faCalendar } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';

const Calender = () => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const navigation = useNavigation();

  const onDayPress = day => {
    setSelectedStartDate(day.dateString);
  };

  const handleHomeClick = () => {
    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedStartDate]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
      />
      <View>
        <Text>SELECTED DATE: {selectedStartDate}</Text>
      </View>
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
          <FontAwesomeIcon icon={faComments} style={styles.icon} size={32} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Calender')} >
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
    marginTop: 100,
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

export default Calender;