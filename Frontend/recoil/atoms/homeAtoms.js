import React from "react";
import { atom } from "recoil";


export const allAnswersState = atom({
    key: 'allAnswers',
    default: [],
  })