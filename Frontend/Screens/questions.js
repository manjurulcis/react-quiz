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

import moment from "moment";
import Options from "../components/Options";

// recoil states
import {useRecoilValue,useSetRecoilState} from "recoil";

import { inputTextState, selectedOptionState } from "../recoil/atoms/questionAtoms";
import { allAnswersState } from "../recoil/atoms/quizAtoms";

const Questions = ({ route, navigation }) => {
  //imported from atoms states
  const selectedAns= useRecoilValue(selectedOptionState);
  const inputText = useRecoilValue(inputTextState);

  const answer = {};
 
  const setAllAnswers = useSetRecoilState(allAnswersState);

  const pushData = () => {
   
    answer.user_answer = inputText;
    answer.selected_option = selectedAns;
    answer.time = moment().format("YYYY.MM.DD HH:mm:ss").toString();
    console.log(answer);

    const requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answer),
    };

    fetch(process.env.API_URL + "/storedata", requestOptions)
    .then((response) => response.json())
    .then((data) => {
      if (data.insertId) {
        setAllAnswers((oldAllAnswers) => {[answer, ...oldAllAnswers]; console.log("From oldallansewer",oldAllAnswers)})

        navigation.navigate({
          name: "Home",
          params: { answer: answer },
        });
      }
    });  
  };
  
  return (
    <SafeAreaView style={QuizStyle.container}>
      <Options push={pushData} />
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
