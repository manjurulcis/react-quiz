import { selector } from "recoil";
import axios from "axios";


export const getAllAnswer = selector({
  key: "getAllAnswer",
  get: async ({get}) => {
    try {
      const res = await axios(process.env.API_URL);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
});
