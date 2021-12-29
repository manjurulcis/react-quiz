import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  Pressable,
  Modal,
  Text,
  StyleSheet,
  TextInput,
} from "react-native";
import { inputTextState,selectedOptionState, answerObjectState } from "../recoil/atoms/questionAtoms";
import { useRecoilState } from "recoil";
import RadioGroup, { Radio } from "react-native-radio-input/Components/main";
import { allQuestions } from "../data/QuizData";
import { saveAnswer } from '../shared/app.service';
import moment from "moment";

const Questions = ({ route, navigation }) => {
  const [selectedAnswer, setSelectedAnswer] = useRecoilState(selectedOptionState);
  const [inputText, setInputText] = useRecoilState(inputTextState);

  return (
    <SafeAreaView style={QuizStyle.container}>
      <View style={QuizStyle.quizView}>
        <TextInput
          style={QuizStyle.inputField}
          onChangeText={setInputText}
          setEditable={true}
          placeholder="Type here...."
        />

        <Text style={QuizStyle.quizTitle}>{allQuestions[0].question}</Text>

        <RadioGroup
          getChecked={(value) => {
            setSelectedAnswer(value);
          }}
        >
          <Radio iconName={"lens"} label={"Report"} value={"Report"} />
          <Radio iconName={"lens"} label={"Field"} value={"Field"} />
          <Radio iconName={"lens"} label={"Record"} value={"Record"} />
        </RadioGroup>

        <TouchableOpacity style={QuizStyle.nextBtnDiv}>
          <Text
            onPress={() => {
              if (selectedAnswer || inputText) {
                const userResponseData = {
                  selected_option: selectedAnswer,
                  user_answer: inputText,
                  time: moment().format("YYYY.MM.DD HH:mm:ss").toString()
                }
                console.log(userResponseData);
                const saved = saveAnswer(userResponseData);
                saved.then((data) => {
                  console.log(data);
                  if (data.insertId)
                  navigation.navigate({
                    name: "Home",
                    params: { answer: userResponseData },
                  });
                  setSelectedAnswer(null);
                  setInputText("");
                })
                
              
              }
            }}
            disabled={!selectedAnswer && !inputText}
            style={QuizStyle.nextBtn}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const QuizStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#159DFF",
  },
  quizView: {
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 60,
    position: "relative",
  },
  quizTitle: {
    fontSize: 20,
    color: "white",
  },
  inputField: {
    fontSize: 20,
    color: "white",
    borderWidth: 1,
    borderColor: "#fff",

    margin: 15,
    padding: 15,
  },
  counter: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  options: {
    padding: 10,
    backgroundColor: "black",
    color: "white",
  },
  nextBtn: {
    fontSize: 20,
    color: "white",
    textAlign: "center",
  },
  nextBtnDiv: {
    width: "100%",
    backgroundColor: "green",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
});

export default Questions;
