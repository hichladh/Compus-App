import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import uniImage from './taswira2.jpg';
import workImage from './taswira3.jpg';
import eventImage from './taswira4.jpg';

const Main = () => {
  const navigation = useNavigation();
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showHomeContent, setShowHomeContent] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Articles'); // State to track active filter

  const scrollViewRef = useRef(null);

  const handleHomeClick = () => {
    setShowFilterOptions(false);
    setShowHomeContent(true);
    setActiveFilter('Articles'); // Set active filter to Articles when home icon is clicked
  };

  const handleFilterClick = () => {
    setShowFilterOptions(true);
    setShowHomeContent(false);
  };

  const scrollToPosition = (position) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: position, animated: true });
    }
  };

  const handleFilterOptionClick = (filter) => {
    setActiveFilter(filter);

    // Scroll to respective section based on filter clicked
    switch (filter) {
      case 'Articles':
        scrollToPosition(0); // Scroll to Articles section
        break;
      case 'Jobs':
        scrollToPosition(400); // Scroll to Jobs section (adjust offset as per your layout)
        break;
      case 'Events':
        scrollToPosition(800); // Scroll to Events section (adjust offset as per your layout)
        break;
      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      {showFilterOptions ? (
        <View style={styles.filterHeader}>
          <TouchableOpacity
            style={[styles.filterOptionContainer, activeFilter === 'Articles' && styles.activeOption]}
            onPress={() => handleFilterOptionClick('Articles')}
          >
            <Text style={[styles.filterOption, activeFilter === 'Articles' && styles.activeOptionText]}>Articles</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterOptionContainer, activeFilter === 'Jobs' && styles.activeOption]}
            onPress={() => handleFilterOptionClick('Jobs')}
          >
            <Text style={[styles.filterOption, activeFilter === 'Jobs' && styles.activeOptionText]}>Jobs</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterOptionContainer, activeFilter === 'Events' && styles.activeOption]}
            onPress={() => handleFilterOptionClick('Events')}
          >
            <Text style={[styles.filterOption, activeFilter === 'Events' && styles.activeOptionText]}>Events</Text>
          </TouchableOpacity>
        </View>
      ) : showHomeContent ? (
        <View>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('Calender')}>
              <FontAwesomeIcon style={styles.icon} icon={faCalendarPlus} size={24} />
            </TouchableOpacity>
            <Text style={styles.title}>Content</Text>
            <TouchableOpacity onPress={() => setShowFilterOptions(true)}>
              <Text style={styles.filter}>Filter</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.searchBar} placeholder="Search..." />
        </View>
      ) : (
        <View>
          <View style={styles.header}>
            <FontAwesomeIcon style={styles.icon} icon={faCalendarPlus} size={24} />
            <Text style={styles.title}>Content</Text>
            <TouchableOpacity onPress={handleFilterClick}>
              <Text style={styles.filter}>Filter</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.searchBar} placeholder="Search..." />
        </View>
      )}

      <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Das Leben an der Uni: Mehr als nur Vorlesungen</Text>
          <Image source={uniImage} style={styles.image} />
          <Text style={styles.paragraph}>
            Das Uni-Leben bietet weit mehr als nur Vorlesungen und Prüfungen. Es ist eine Zeit voller neuer
            Freundschaften, spannender Erfahrungen und persönlicher Entwicklung. Neben dem Lernen gibt es zahlreiche
            Möglichkeiten, sich in Hochschulgruppen zu engagieren, Sport zu treiben und an vielfältigen Veranstaltungen
            teilzunehmen. Diese Erlebnisse bereichern die Studienzeit und machen sie unvergesslich.
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>University Life Article</Text>
          <Image source={uniImage} style={styles.image} />
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat libero est, in rutrum mi auctor vitae.
            Phasellus pretium, sem in scelerisque viverra, odio nisl interdum lorem.
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Sommerfest für Studierende</Text>
          <Image source={eventImage} style={styles.image} />
          <Text style={styles.paragraph}>
            Nächste Woche findet an unserer Uni ein großes Sommerfest für alle Studierenden statt. Es wird Live-Musik,
            verschiedene Essensstände und spannende Aktivitäten wie Spiele und Wettbewerbe geben. Das Fest bietet eine
            tolle Gelegenheit, neue Leute kennenzulernen und gemeinsam eine unvergessliche Zeit zu erleben. Verpasst nicht
            die Chance, dabei zu sein und das Beste aus eurem Uni-Leben zu machen!
          </Text>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Deine Chance auf Praxisnahe Erfahrungen während des Studiums</Text>
          <Image source={workImage} style={styles.image} />
          <Text style={styles.paragraph}>
            Als Werkstudent hast du die einzigartige Gelegenheit, wertvolle praktische Erfahrungen zu sammeln und dein
            theoretisches Wissen aus dem Studium direkt in der Praxis anzuwenden. In einer Werkstudentenstelle arbeitest
            du flexibel neben deinem Studium und unterstützt Unternehmen in verschiedenen Projekten und Aufgabenbereichen.
            Dies ermöglicht es dir, Einblicke in die Arbeitswelt zu gewinnen, wertvolle Kontakte zu knüpfen und deine
            Karrierechancen zu verbessern. Darüber hinaus profitierst du von einer fairen Vergütung, die dir finanzielle
            Unabhängigkeit während des Studiums bietet.
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <FontAwesomeIcon icon={faGear} style={styles.icon} size={32} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Info')}>
          <FontAwesomeIcon icon={faCircleInfo} style={styles.icon} size={32} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleHomeClick}>
          <FontAwesomeIcon icon={faHouse} style={[styles.icon, showHomeContent && { color: 'orange' }]} size={32} />
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
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 22,
    marginTop: 10,
  },
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e7',
  },
  filterOptionContainer: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  activeOption: {
    borderBottomWidth: 2,
    borderBottomColor: '#007BFF',
  },
  activeOptionText: {
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  filter: {
    color: 'orange',
    fontSize: 16,
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 10,
  },
  scrollViewContent: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  content: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#e7e7e7',
  },
  icon: {
    marginHorizontal: 15,
  },
});

export default Main;
