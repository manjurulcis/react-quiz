import React, { useState ,  useEffect} from 'react';
import { View ,SafeAreaView, Image,Button,Alert , TouchableOpacity,Pressable,Modal,Text,StyleSheet } from 'react-native';
import moment from 'moment';
import axios from 'axios';


const Questions = ({ navigation}) => {
    
    const allQuestions = [
        {
            questions: "What is part of a database that holds only one type of information?",
            options: ["Report","Field","Record","File"],
            correct_ans: 'Field'
        },
        {
            questions: "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
            options: ["1850s","1880s","1890s","1780s"],
            correct_ans: '1880s'
        },
        {
            questions: "OS computer abbreviation usually means ?",
            options: ["Order of Significance","Open Software","Operating System","Optical Sensor"],
            correct_ans: 'Operating System'
        },
        {
            questions: "In which decade was the SPICE simulator introduced?",
            options: ["1950s","1880s","1970s","1780s"],
            correct_ans: '1970s'
        },
        {
            questions: "Which is a type of Electrically-Erasable Programmable Read-Only Memory?",
            options: ["Flash","Flange","Fury","FRAM"],
            correct_ans: "Flash"
        },
    
    ];

    

    const [currentQuestionNo, SetNewQuestionNo] = useState(0);
    const [currentOptionSelected, SetCurrentOptionSelected] = useState(null);
    const [currentOption, SetCurrentOption] = useState(null);
    const [isOptionDisabled, SetIsOptionDisabled] = useState(false);
    const [score, SetScore] = useState(0);
    const [nextButton, SetNextButton] = useState(false);
    const [showScoreBoard, SetShowScoreBoard] = useState(false);

    const [allAnswers, SetAllAnswers] = useState([]);
    
    const dataUrl = 'http://localhost:8081/';
    // const [data, SetData]= useState([]);
    const [title,SetTitle] = useState([]);
    // const [choices,SetChoices] =useState(null);


    

    {/* Questions */}
    const getQuestions= () => {

        useEffect(() => {
            fetch(dataUrl)
            .then(res=>{
                return res.json()
            })
            .then((json)=> {
              SetTitle(json[currentQuestionNo].question);
                console.log(json)
                // SetChoices(json[currentQuestionNo].q_options);
            }
          )
     
             },[currentQuestionNo]);

        return(
            <View>
                {/* counter*/}
                <View style={QuizStyle.counter}>
                <Text>{currentQuestionNo+1}</Text>
                    <Text>/{5}</Text>
                </View>

                 {/* questions*/}

                <Text style={QuizStyle.quizTitle}>
                    {title}
                   
                 </Text>

            </View>
        )
    
    }

    {/* Option validation */}
    const ansValidation = (selectedAns) =>{
        let correct_ans = allQuestions[currentQuestionNo]['correct_ans'];
        SetCurrentOptionSelected(selectedAns); 
        
        SetIsOptionDisabled(true);
        console.log(selectedAns);
        if(selectedAns==correct_ans){
            SetCurrentOption(correct_ans);
            SetScore(score+1);
            const answer ={
                'option': selectedAns,
                'time'  : new Date().toLocaleDateString()     
            }
            allAnswers.push(answer);
           
        }
        console.log(allAnswers);
        SetNextButton(true);

    }

    const nextBtnHandle = () =>{
        if(currentQuestionNo == allQuestions.length-1){
            SetShowScoreBoard(true);
        } else{
            SetNewQuestionNo(currentQuestionNo+1);
          
            SetCurrentOption(null);
            SetCurrentOptionSelected(null);
            SetIsOptionDisabled(false);
            SetNextButton(false);        
        }

    }
   
    const showNextBtn = () => {
        if(showNextBtn){
            return(
                <TouchableOpacity 
                style={QuizStyle.nextBtnDiv}
               onPress={()=> nextBtnHandle()}
                >
                    <Text style={QuizStyle.nextBtn}>Next</Text>
                
                </TouchableOpacity>
            )
        }
    }

     {/* Options */}
    const getOptions= () => {
        

        return(
            
            <View>
            
                {
                    allQuestions[currentQuestionNo].options.map((option) => 
                    (
                        
                       <TouchableOpacity
                         
                             onPress={()=> ansValidation(option) }
                             disabled={isOptionDisabled}
                            key={option}
                            style={
                            option==currentOption? QuizStyle.rightAns : 
                            option==currentOptionSelected? QuizStyle.wrongAns: null
                          
                           }
                           
                           
                        > 
                            <Text >
                                {/* {choices} */}
                               
                                
                            </Text>

                    

                     </TouchableOpacity>
                    ))
                }
            </View>
        )
    
    }

    const restartQuiz = () =>{
        SetShowScoreBoard(false);
        
        SetNewQuestionNo(0);
        SetScore(0);
        
        SetCurrentOption(null);
        SetCurrentOptionSelected(null);
        SetIsOptionDisabled(false);
        SetAllAnswers([]);
       
    }


    return(

        <SafeAreaView style={QuizStyle.container}>

        <View style={QuizStyle.quizView}>
         

            {/* Questions */}
          
            {getQuestions()}

             {/* Options */}
             {getOptions()}

            {/* Next btn */}
            {showNextBtn()}

           {/* Show Score details */}
            <Modal
            animationType="slide"
            transparent={true}
            visible = {showScoreBoard}
            >
                <View style={QuizStyle.scoreContainer}>
                    <View style={QuizStyle.scoreOuter}>
                       
                       <View  style={QuizStyle.scoreInner}>
                        <Text>{score}</Text>
                        <Text>/{allQuestions.length}</Text>
                       </View>
                        
                        <TouchableOpacity 
                        onPress={restartQuiz}
                        style={QuizStyle.retryQuiz}
                        >
                            <Text>Take Quiz Again!!</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>
                
            </Modal>






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