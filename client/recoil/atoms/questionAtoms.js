import React from "react";
import { atom } from "recoil";

export const inputTextState = atom({
    key: "inputText",
    default: "",
  });


export const selectedOptionState = atom({
    key: "selectedOption",
    default: null,
  });


  export const answerObjectState = atom({
    key: 'answer',
    default: {
        user_answer: '',
        selected_option: '',
        time: ''
    }
})