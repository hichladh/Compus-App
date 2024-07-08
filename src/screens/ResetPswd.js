import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

const ResetPswd = ({ navigation }) => {
  const [email, setEmail] = React.useState('');

  const handleResetPassword = () => {
    
    console.log('Password reset email sent to:', email);
    // 7atitha tarja3 lllogin page bech ntesti 
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TouchableOpacity onPress={handleResetPassword} style={styles.loginButton}>
                    <Text style={styles.log}>Send</Text>
                </TouchableOpacity>
      
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
      padding: 20,
    },
    title: {
       fontWeight: 'bold',
        fontSize: 27,
        paddingTop: 18,
        color: 'black',
        marginBottom: 15,
    },
    input: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5,
        marginTop: 15,
        flexDirection: 'row'
    },
    loginButton: {
        backgroundColor: 'orange',
        padding: 10,
        alignItems: 'center',
        borderRadius: 25,
        width: '100%',
        marginTop: 35,
        height: '7%',

    },
    log: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 19,
    },
  });
  
export default ResetPswd;
