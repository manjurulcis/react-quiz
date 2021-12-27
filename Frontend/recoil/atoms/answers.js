
import { atom } from "recoil";

export const answerObjectState = atom({
    key: 'answer',
    default: {
        user_answer: '',
        selected_option: '',
        time: ''
    }
})