
import React, {useEffect, useState}from 'react';
import { View ,SafeAreaView,FlatList,ScrollView, Image,Button,Alert , Pressable,Text,StyleSheet } from 'react-native';
import { NavigationContainer, NavigationEvents } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import axios from 'axios';
import Questions from './pages/questions';
import moment from 'moment';

const title='Start';
const baseURL = "http://localhost:8000/";


const QuizApp = ({ route, navigation}) => {
  let [allAnswers, setAllAnswers] = useState([])
  useEffect(() => {
    if (route.params?.allAnswers) setAllAnswers(route.params?.allAnswers)
    else {
      axios.get(baseURL)
      .then((res)=> {
        setAllAnswers(res.data);
        console.log(allAnswers);
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
    }
   }, [route.params?.allAnswers]);
   console.log('data from main', route.params?.allAnswers)
  return (
   
      <SafeAreaView style={styles.container}> 
         
            
          <Text style={styles.textColor}>Welcome to the Quiz</Text>
          <Pressable style={styles.button} onPress={()=> navigation.navigate({name: 'Quiz', params: { allAnswers: allAnswers }})}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
          {/* {!route.params?.allAnswers ? allAnswers.length : route.params?.allAnswers.length} */}
       {/*    <DataTable
          data={!route.params?.allAnswers ? allAnswers : route.params?.allAnswers} // list of objects
          colNames={['user_answer', 'selected_option', 'time']} //List of Strings
          colSettings={[{ name: 'user_answer', type: COL_TYPES.STRING }, { name: 'selected_option', type: COL_TYPES.STRING }, {name: 'time', type: COL_TYPES.DATETIME}]}
          noOfPages={10} //number
          /> */}
        
        
        <FlatList
        data={!route.params?.allAnswers ? allAnswers : route.params?.allAnswers}
        style={{width:'100%',paddingLeft:'5%',marginTop:'5%'}}
        renderItem={({item})=>(
          <View style={{padding:'10px', borderWidth: '1px', borderColor:'#ccc', marginBottom:'5px'}}>
            <Text style={{ fontSize: '30px'}}>
              Text: {item.user_answer}
           
            </Text>
            <Text style={{ fontSize: '20px'}}>
           Option: {item.selected_option}
            </Text>
            <Text style={{ fontSize: '20px'}}>
            Time: {item.time.toString()}
            </Text>
          </View>
          
          
        )}
      
        />
     
       
     
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
