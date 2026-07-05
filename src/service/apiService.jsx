import axios from "axios";
const API_URL = "https://word-api-hmlg.vercel.app";

export const validateWord = async (word) => {
    console.log('entro en api service')
    const response = await axios.get(`${API_URL}/api/validate`, {
        params: { word: word }
    });
    console.log('response::', response.data);
    return response.data;
}