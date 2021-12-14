import React, { useState } from 'react';
import { View ,SafeAreaView, Image,Button,Alert , TouchableOpacity,Pressable,Modal,Text,StyleSheet, TextInput } from 'react-native';

import axios from 'axios';
import RadioGroup,{Radio} from "react-native-radio-input";



const Questions = ({ navigation}) => {
    
    const allQuestions = [
        {
            questions: "What is part of a database that holds only one type of information?",
            options: ["Report","Field","Record","File"],
           
        }
    
    ];

    

    const [currentQuestionNo, SetNewQuestionNo] = useState(0);
    const [currentOptionSelected, SetCurrentOptionSelected] = useState(null);
  
  

    const [allAnswers, SetAllAnswers] = useState([]);
    
    const dataUrl = 'http://localhost:8081/';
   
   
   

    const [inputText, SetinputText] = useState(null);
    const [selectedAns, SetSelectedAns] = useState(null);
    

    {/* Questions */}
    const getQuestions= () => {


        return(
            <View>
             
                 <TextInput
                    // style={styles.input}
                    onChangeText={SetinputText}
                    value={inputText}
                    
                    
                />
                

                <Text style={QuizStyle.quizTitle}>
                    {allQuestions[0].questions}
                  {console.log(inputText)}
                 
                 </Text>

            </View>
        )
    
    }


   
    const showNextBtn = () => {
        if(showNextBtn){
            return(
                <TouchableOpacity 
                style={QuizStyle.nextBtnDiv}
               
               onPress={()=> navigation.navigate('Home')}
              
                >
                    <Text style={QuizStyle.nextBtn}>Submit</Text>
                
                </TouchableOpacity>
            )
        }
    }

 
   


     {/* Options */}
    const getOptions= () => {
   

       

        return(
            
            <View>

                <TextInput
                    // style={styles.input}
                    onChangeText={SetinputText}
                    value={inputText}
                    
                    
                />
                

                <Text style={QuizStyle.quizTitle}>
                    {allQuestions[0].questions}
                 
                 
                 </Text>
                
                <RadioGroup getChecked={function getChecked(value){
                    SetSelectedAns(value) 
                  
                }}>
                    <Radio iconName={"lens"} label={"Report"} value={"Report"}/>
                    <Radio iconName={"lens"} label={"Field"} value={"Field"}/>
                    <Radio iconName={"lens"} label={"Record"} value={'Record'}/>
   
                </RadioGroup>

                <TouchableOpacity 
                style={QuizStyle.nextBtnDiv}
              
               onPress={()=> navigation.navigate('Home')}
               disabled = {!selectedAns && !inputText}
                >
                    <Text style={QuizStyle.nextBtn}>Submit</Text>
                    {console.log(selectedAns)}
                    {console.log(inputText)}
                
                </TouchableOpacity>

                
            </View>
        )
    
    }


    return(

        <SafeAreaView style={QuizStyle.container}>

        <View style={QuizStyle.quizView}>
         


             {/* Options */}
             {getOptions()}
        </View>

        </SafeAreaView>

     
    )

}

const QuizStyle = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#159DFF',
    
    },
    quizView:{
        flex: 1,
        paddingHorizontal: 40,
        paddingVertical: 60,
        position: 'relative'
    },
    quizTitle:{
        fontSize: '30px',
        color: 'white'
    },
    counter:{
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    options:{
        padding: 10,
        backgroundColor: 'black',
        color:'white'
    },
    rightAns:{
        backgroundColor: "green",
        color: 'white'
    },
    wrongAns:{
        backgroundColor: "red",
        color: 'white'
    },
    nextBtn:{
        fontSize: '20px',
        color: 'white',
        textAlign: 'center'

    },
    nextBtnDiv:{
        width: '100%',
        backgroundColor: 'green',
        marginTop: 20,
        padding: 10,
        borderRadius: 5
    },
    scoreContainer:{
        flex: 1,
        backgroundColor: '#212A43',
        justifyContent: 'center',
        alignItems:'center'

    },
    scoreOuter: {
        width: '90%',
        backgroundColor: 'white',
        padding : 10,
        alignItems: 'center'
    },
    scoreInner:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    retryQuiz:{
        width: '50%',
        backgroundColor: '#007ACC',
        color: 'white',
        fontSize: '12px',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    }



})

export default Questions;