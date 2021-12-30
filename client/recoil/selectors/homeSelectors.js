import { selector } from "recoil";
import axios from "axios";

export const getAllAnswer = selector({
  key: "getAllAnswer",
  get: async ({get}) => {
    try {
      const res = await axios('http://localhost:8000');
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
});
