import { selector } from "recoil";
import axios from "axios";
export const saveAnswer = async (answer) => {
    try {
        const requestOptions = {
            method: "post",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(answer),
        };  
        const res = await axios(process.env.API_URL+ "/storedata", requestOptions);
        return res.data;
    } catch (error) {
       console.log(error);
    }
}