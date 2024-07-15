import React, { useState, useRef, useEffect  } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView,Modal, Button } from 'react-native';
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
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';



const Main = () => {
  const navigation = useNavigation();
  const [showFilterOptions, setShowFilterOptions] = useState(false);
  const [showHomeContent, setShowHomeContent] = useState(false);
  const [activeFilter, setActiveFilter] = useState('Articles'); 
  const [showForm, setShowForm] = useState(false);
  const scrollViewRef = useRef(null);
  const [modalVisible, setModalVisible] = useState(false); 
  const [postType, setPostType] = useState('Articles');
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState(''); 
  const [description, setDescription] = useState(''); 
  const [content, setContent] = useState(''); 







      const BlogType = {
        ARTICLE: 'ARTICLE',
        JOB: 'JOB',
        EVENT: 'EVENT',
      };


      useFocusEffect(
        React.useCallback(() => {
          const fetchBlogs = async () => {
            try {
              const response = await axios.get('http://10.0.2.2:8080/api/blogs/getAllBlogs'); 
              setPosts(response.data); 
            } catch (error) {
              console.error('Error fetching blogs:', error);
            }
          };
    
          fetchBlogs(); 
    
          return () => {
           
          };
        }, [])
      );






  useEffect(() => {
    const fetchBlogs = async () => {
      try {
       
        const response = await axios.get('http://10.0.2.2:8080/api/blogs/getAllBlogs'); 
        console.log('Fetched posts:', response.data); 
        setPosts(response.data); 
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);




  const handleHomeClick = () => {
    setShowFilterOptions(false);
    setShowHomeContent(true);
    setActiveFilter('Articles'); 
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
    switch (filter) {
      case 'Articles':
        scrollToPosition(0); 
        break;
      case 'Jobs':
        scrollToPosition(400); 
        break;
      case 'Events':
        scrollToPosition(800); 
        break;
      default:
        break;
    }
  };

  const handleCalendarIconClick = () => { 
    setModalVisible(true);
  };

  const handlePostTypeChange = (value) => {
    setPostType(value);
  };

  const handlePostTypeSelect = (type) => {
    setPostType(type);
  };


 

  const handleUpload = () => {
    
    console.log('Upload button clicked');
    
  };

  const handlePost2 = async () => {


  const typeMap = {
    '1': 'ARTICLE',
    '2': 'JOB',
    '3': 'EVENT'
  };

  
  const newPost = {
    type: typeMap[postType], 
    title,
    description,
    content,
  };
  
    try {
      const response = await axios.post('http://10.0.2.2:8080/api/blogs/createBlog', newPost); 
      setPosts([...posts, response.data]); 
      setModalVisible(false); 
      setTitle(''); 
      setDescription('');
      setContent('');
    } catch (error) {
      console.error('Error posting blog:', error);
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
            <TouchableOpacity onPress={handleCalendarIconClick}>
              <FontAwesomeIcon style={styles.icon} icon={faCalendar} size={24} />
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
            <FontAwesomeIcon style={styles.icon} icon={faCalendar} size={24} />
            <Text style={styles.title}>Content</Text>
            <TouchableOpacity onPress={handleFilterClick}>
              <Text style={styles.filter}>Filter</Text>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.searchBar} placeholder="Search..." />
        </View>
      )}

            <ScrollView ref={scrollViewRef} contentContainerStyle={styles.scrollViewContent}>
              {posts.map((post) => (
                <View key={post.id} style={styles.content}>
                  <Text style={styles.sectionTitle}>{post.title}</Text>
                  
                  <Image
                    source={
                      post.picture
                        ? { uri: post.picture }
                        : post.type === 'ARTICLE'
                        ? uniImage
                        : post.type === 'JOB'
                        ? workImage
                        : post.type === 'EVENT'
                        ? eventImage
                        : null 
                    }
                    style={styles.image}
                  />

                  <Text style={styles.paragraph}>{post.description}</Text>
                  <Text style={styles.paragraph}>{post.content}</Text>
                </View>
              ))}
            </ScrollView>


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <View style={styles.typeContainer}>
              <TouchableOpacity
                style={[styles.typeOption, postType === 'ARTICLE' && styles.activeType]}
                onPress={() => handlePostTypeSelect('ARTICLE')}
              >
                <Text style={styles.typeText}>Articles</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.typeOption, postType === 'JOB' && styles.activeType]}
                onPress={() => handlePostTypeSelect('JOB')}
              >
                <Text style={styles.typeText}>Jobs</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.typeOption, postType === 'EVENT' && styles.activeType]}
                onPress={() => handlePostTypeSelect('EVENT')}
              >
                <Text style={styles.typeText}>Events</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.input}
              placeholder="Title"
              value={title}
              onChangeText={setTitle}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Description"
              multiline={true}
              numberOfLines={4}
              value={description}
              onChangeText={setDescription}
            />

            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Content"
              multiline={true}
              numberOfLines={6}
              value={content}
              onChangeText={setContent}
            />

            <View style={styles.uploadContainer}>
              <Text style={styles.labelText}>Picture</Text>
              <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
                <Text style={styles.uploadButtonText}>Upload</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Close</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button]} onPress={handlePost2}>
                <Text style={styles.buttonText}>Post</Text>
              </TouchableOpacity>
            </View>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: '#fff', // White background
    padding: 20,
    borderRadius: 10,
    width: '90%', 
    maxHeight: '95%', 
    alignItems: 'center',
  },
  typeContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  typeOption: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeType: {
    backgroundColor: '#ffa500', 
  },
  typeText: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    width: '100%',
  },
  textArea: {
    height: 100,
  },

  uploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,

  },
  uploadButton: {
    backgroundColor: '#ffa500', // Orange background color for button
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  uploadButtonText: {
    color: '#fff', 
    fontWeight: 'bold',
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 60,
  },

});

export default Main;
