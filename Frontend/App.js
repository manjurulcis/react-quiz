
import React, {useEffect, useState}from 'react';
import { View ,SafeAreaView,FlatList,ScrollView, Image,Button,Alert , Pressable,Text,StyleSheet } from 'react-native';
import { NavigationContainer, NavigationEvents } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import DataTable, {COL_TYPES} from 'react-native-datatable-component';
import axios from 'axios';
import Questions from './pages/questions';
import moment from 'moment';

const title='Start';
console.log(API_URL, process.env.API_URL)
const QuizApp = ({ route, navigation}) => {
  let [allAnswers, setAllAnswers] = useState([])
  useEffect(() => {
    if (route.params?.allAnswers) setAllAnswers(route.params?.allAnswers)
    else {
      axios.get(process.env.API_URL)
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
        <Text style={styles.answerLabel}>All Entries ( Total {!route.params?.allAnswers ? allAnswers.length : route.params?.allAnswers.length} )</Text>
        <View style={styles.dataGridRow}>
            <Text style={styles.datatableHeaderGridCol1}>
              Text           
            </Text>
            <Text style={styles.datatableHeaderGridCol2}>
              Option
            </Text>
            <Text style={styles.datatableHeaderGridCol2}>
              Posted
            </Text>
        </View>
        <FlatList
          data={!route.params?.allAnswers ? allAnswers : route.params?.allAnswers}
          style={{width:'92%',paddingLeft:'1%', marginTop:'.2rem'}}
          renderItem={({item})=>(
            <View style={styles.dataGridRow}>
              <Text style={styles.dataGridCol1}>
                {item.user_answer.length > 10 ? item.user_answer.substring(0,7) + '...' :item.user_answer.substring(0,10)}           
              </Text>
              <Text style={styles.dataGridCol2}>
                {item.selected_option}
              </Text>
              <Text style={styles.dataGridCol2}>
                {item.time.toString()}
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
  },
  dataGridRow:{
    padding:'10px', 
    borderWidth: '0', 
    borderBottomWidth: '1',
    borderBottomColor:'#ccc', 
    marginBottom:'5px', 
    display:'inline-block',
    width: '100%'
  },
  dataGridCol1: {
    display: 'inline-block',
    width: '36%',
    fontSize: '1rem',
    color:'#222',
    borderBottomColor: '#ccc',
    borderBottomWidth: '1'
  },
  dataGridCol2: {
    display: 'inline-block',
    width: '32%',
    fontSize: '1rem',
    color:'#222',
    borderBottomColor: '#ccc',
    borderBottomWidth: '1'
  },
  datatableHeaderGridCol1: {
    display: 'inline-block',
    width: '40%',
    fontSize:'1rem',
    fontWeight:'700',
    color:'white',
    height:'25',
    textAlign: 'left',
    paddingLeft: '1rem',
    borderBottomColor: '#ccc',
    borderBottomWidth: '1'
  },
  datatableHeaderGridCol2: {
    display: 'inline-block',
    width: '30%',
    fontSize:'1rem',
    fontWeight:'700',
    color:'white',
    height:'25',
    textAlign: 'left',
    borderBottomColor: '#ccc',
    borderBottomWidth: '1'
  },
  answerLabel: {
    marginTop: '.7rem',
    marginBottom: '.6rem',
    fontSize: '1.2rem',
    color:'#FFDDEE'
  }
});

export default App;
