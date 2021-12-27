import { selector } from "recoil";
import axios from "axios";

export const getAllAnswer = selector({
  key: "pushData",
  get: async ({get}) => {
    try {
      const res = await axios(process.env.API_URL);
      return res.data;
    } catch (error) {
      console.log(error);
    }

    /* const setInputText = get(inputTextState);
          const setSelectedOption = get(selectedOptionState);
    
          const userAnswer = get(answerObjectState).user_answer;
          const selectedOption = get(answerObjectState).selected_option;
          const time = get(answerObjectState).time; */
  },
});
