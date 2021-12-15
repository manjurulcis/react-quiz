
import React, {useEffect, useState}from 'react';
import { View ,SafeAreaView,FlatList, Image,Button,Alert , Pressable,Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Questions from './pages/questions';

import axios from 'axios';


const title='Start';

const DATA = [
  {
    user_answer: "this is bot and this from bot",
    selected_option: "First Item",
    time: '12.10.2021'
  },
  {
    user_answer: "this is another bot",
    selected_option: "First Item",
    time: '12.22.2021'
  },
  {
    user_answer: "this is test",
    selected_option: "First Item",
    time: '8.10.2021'
  },
];

// const [data,SetData] = useState([]);



const QuizApp = ({ route, navigation}) => {
  
  useEffect(() => {
    fetch('http://localhost:8081')
       .then((res) => res.json())
       .then(data=> console.log(data))
       .catch((e) => {
         console.error(e);
      
       });
    
    // axios.get('http://localhost:8081/')
    // .then(data=> console.log(data))
    // .catch(function (error) {
    //   // handle error
    //   alert(error.message);
    // })

   }, []);
 

  return (
    <SafeAreaView style={styles.container}> 
      <Text style={styles.textColor}>Welcome to the Quiz</Text>
      <Pressable style={styles.button} onPress={()=> navigation.navigate('Quiz')}>
        <Text style={styles.text}>{title}</Text>

      </Pressable>
      
      <View style={{ flexDirection:'row', justifyContent: 'center', marginTop: '25px' }}>
      <FlatList
        data={DATA}
        renderItem={({item})=>(
          <Text style={{ fontSize: '20px'}}>Text: {item.user_answer} Option: {item.selected_option} Time: {item.time}</Text>
      
        )}
      
      />
        
        
        


        </View>
     
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
