
import React, {useEffect, useState}from 'react';
import { View ,SafeAreaView,FlatList, Image,Button,Alert , Pressable,Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import axios from 'axios';
import Questions from './pages/questions';


const title='Start';
const baseURL = "http://localhost:3000/";
let showAllEntries = []

const QuizApp = ({ route, navigation}) => {
  
  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.textColor}>Welcome to the Quiz</Text>
      <Pressable style={styles.button} onPress={()=> navigation.navigate('Quiz')}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    
      <DataTable
      data={showAllEntries} // list of objects
      colNames={['user_answer', 'selected_option', 'time']} //List of Strings
      colSettings={[{ name: 'user_answer', type: COL_TYPES.STRING }, { name: 'selected_option', type: COL_TYPES.STRING }, {name: 'time', type: COL_TYPES.STRING}]}
      noOfPages={10} //number
      />
    
  </SafeAreaView>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  useEffect(() => {
    axios.get(baseURL)
    .then((res)=> {
      showAllEntries = res.data;
      console.log(showAllEntries);
              
    })
    .catch(function (error) {
      alert(error.message);
    })
  })
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
