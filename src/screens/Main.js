import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput , TouchableOpacity, Image  } from 'react-native'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';



const Main =() => {
  const navigation = useNavigation();
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showHomeContent, setShowHomeContent] = useState(false);


  const handleHomeClick = () => {
    setShowFilterOptions(false);
    setShowHomeContent(true); // Set showHomeContent to true when home icon is clicked
  };

  const handleFilterClick = () => {
    setShowFilterOptions(true);
    setShowHomeContent(false); // Set showHomeContent to false when filter icon is clicked
  };

  return (
    <View style={styles.container}>
      {showFilterOptions ? (
        <View style={styles.filterHeader}>
        <TouchableOpacity style={[styles.filterOptionContainer, styles.activeOption]}>
          <Text style={[styles.filterOption, styles.activeOptionText]}>Articles</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOptionContainer}>
          <Text style={styles.filterOption}>Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOptionContainer}>
          <Text style={styles.filterOption}>Events</Text>
        </TouchableOpacity>
      </View>

              ) : showHomeContent ? ( // Condition for showing original header when showHomeContent is true
                <View>
                  <View style={styles.header}>
                    <FontAwesomeIcon style={styles.icon} icon={faCalendarPlus} size={24} />
                    <Text style={styles.title}>Content</Text>
                    <TouchableOpacity onPress={() => setShowFilterOptions(true)}>
                      <Text style={styles.filter}>Filter</Text>
                    </TouchableOpacity>
                  </View>
                  <TextInput
                    style={styles.searchBar}
                    placeholder="Search..."
                  />
                </View>


      ) :  (
        <View>
          <View style={styles.header}>
            <FontAwesomeIcon style={styles.icon} icon={faCalendarPlus} size={24} />
            <Text style={styles.title}>Content</Text>
            <TouchableOpacity onPress={handleFilterClick}>
              <Text style={styles.filter}>Filter</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.searchBar}
            placeholder="Search..."
          />








          
        </View>
      )}
     
     <View style={styles.content}>
     <Text style={styles.sectionTitle}>University Life Article</Text>
     <Image
                source={{ uri: 'https://example.com/praktikum-image.jpg' }} 
                style={styles.image}
              />


        <Text style={styles.paragraph} > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla consequat libero
                est, in rutrum mi auctor vitae. Phasellus pretium, sem in scelerisque viverra, odio
                nisl interdum lorem.</Text>


      </View>

      <View style={styles.footer}>

<TouchableOpacity onPress={() => navigation.navigate('Settings')} >
  <FontAwesomeIcon icon={faGear} style={styles.icon} size={32} />
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Info')} >
  <FontAwesomeIcon icon={faCircleInfo} style={styles.icon} size={32} />
</TouchableOpacity>


<TouchableOpacity onPress={handleHomeClick}>
  <FontAwesomeIcon icon={faHouse} style={styles.icon} size={32} color={'orange'} />
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Comments')} >
  <FontAwesomeIcon icon={faComments} style={styles.icon} size={32} />
</TouchableOpacity>

<TouchableOpacity onPress={() => navigation.navigate('Calender')} >
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
    flex: 1, // Ensure the title takes available space to center itself
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

  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
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