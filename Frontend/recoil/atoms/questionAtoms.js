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
