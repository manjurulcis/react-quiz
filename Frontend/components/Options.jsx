import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { inputTextState,selectedOptionState } from "../recoil/atoms/questionAtoms";
import { useRecoilState } from "recoil";
import RadioGroup, { Radio } from "react-native-radio-input/Components/main";
import { allQuestions } from "../data/QuizData";


const Options = (prop) => {
  const [selectedAns, SetSelectedAns] = useRecoilState(selectedOptionState);
  const [inputText, SetinputText] = useRecoilState(inputTextState);
  return (
    <View style={QuizStyle.quizView}>
      <TextInput
        style={QuizStyle.inputField}
        onChangeText={SetinputText}
        setEditable={true}
        placeholder="Type here...."
      />

      <Text style={QuizStyle.quizTitle}>{allQuestions[0].question}</Text>

      <RadioGroup
        getChecked={(value) => {
          SetSelectedAns(value);
        }}
      >
        <Radio iconName={"lens"} label={"Report"} value={"Report"} />
        <Radio iconName={"lens"} label={"Field"} value={"Field"} />
        <Radio iconName={"lens"} label={"Record"} value={"Record"} />
      </RadioGroup>

      <TouchableOpacity style={QuizStyle.nextBtnDiv}>
        <Text
          onPress={() => {
            if (selectedAns && inputText) {
              prop.push();
              SetSelectedAns(null);
              SetinputText("");
            }
          }}
          disabled={!selectedAns && !inputText}
          style={QuizStyle.nextBtn}
        >
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const QuizStyle = StyleSheet.create({
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

export default Options;
