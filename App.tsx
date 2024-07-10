import React from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import Login from './src/screens/Login';
import Main from './src/screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ResetPswd from './src/screens/ResetPswd';
import SignUp from './src/screens/SignUp';
import Settings from './src/screens/Settings';
import Info from './src/screens/Info';
import Comments from './src/screens/Comments';
import Calender from './src/screens/Calender';
import Chat from './src/screens/Chat';

const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator >
        
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="ResetPswd" component={ResetPswd} options={{ headerShown: false }}/>
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }}/>
        <Stack.Screen name="Info" component={Info} options={{ headerShown: false }}/>
        <Stack.Screen name="Comments" component={Comments} options={{ headerShown: false }}/>
        <Stack.Screen name="Calender" component={Calender} options={{ headerShown: false }}/>
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }}/>

      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f9fbfc'
  }
})
export default App;