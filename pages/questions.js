import React, { useState } from 'react';
import { View ,SafeAreaView, Image,Button,Alert , TouchableOpacity,Pressable,Modal,Text,StyleSheet, TextInput } from 'react-native';
import axios from 'axios';
import RadioGroup,{Radio} from "react-native-radio-input";



const Questions = ({ navigation}) => {
    
    const allQuestions = [
        {
            question: "What is part of a database that holds only one type of information?",
            options: ["Report","Field","Record","File"],
           
        }
    ];

    const dataUrl = 'http://localhost:8081/';
    const [inputText, SetinputText] = useState(null);
    const [selectedAns, SetSelectedAns] = useState(null);
      const getOptions= () => {
   
        return(
            
            <View>

                <TextInput
                    style={QuizStyle.inputField}
                    onChangeText={SetinputText}
                    setEditable={true}
                />
                
                <Text style={QuizStyle.quizTitle}> {allQuestions[0].question} </Text>
                
                <RadioGroup getChecked={(value)=>{SetSelectedAns}}>
                    <Radio iconName={"lens"} label={"Report"} value={"Report"}/>
                    <Radio iconName={"lens"} label={"Field"} value={"Field"}/>
                    <Radio iconName={"lens"} label={"Record"} value={'Record'}/>
                </RadioGroup>

                <TouchableOpacity>

                    <Button 
                        onPress={()=> {
                                navigation.navigate('Home')}
                            } 
                        disabled={!selectedAns && !inputText} 
                        style={QuizStyle.nextBtn}>
                        Submit
                    </Button>
                
                </TouchableOpacity>
            </View>
        )
    
    }


    return(

        <SafeAreaView style={QuizStyle.container}>

            <View style={QuizStyle.quizView}>
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
        color: 'white',
    },
    inputField:{
        fontSize: '30px',
        color: 'white',
        border: '1px solid #fff',
        margin: '15px 0'
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