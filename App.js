import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View ,SafeAreaView, Image,Button,Alert , Pressable,Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Questions from './pages/questions';

const QuizApp = ({ navigation}) => {
  
  const cliclHandle = ()=> console.log('text clicked');
  const title='Start Now';

  
  return (
    <SafeAreaView style={styles.container}>
      
        
        <Image source = {require('C:/Users/parvz/Desktop/QuizApp/logo.jpg')} 
        style = {{ width: 500, height: 500}}
        />

      <Text style={styles.textColor}>Bitbyte Quiz</Text>
       
      <Pressable style={styles.button} onPress={()=> navigation.navigate('Quiz')}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={QuizApp} />
        <Stack.Screen name="Quiz" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#159DFF',
    alignItems:'center',
    justifyContent: 'center'
  },
  textColor:{
    color:'white',
    fontSize:'2rem',
    fontWeight:'700'
  },
  button: {
    backgroundColor:'blue',
    paddingHorizontal: '2rem',
    paddingVertical: '0.5rem',
    marginTop:'0.6rem'
  },
  text:{
    fontSize:'1.2rem',
    fontWeight:'700',
    color:'white'
  }
});

export default App;
