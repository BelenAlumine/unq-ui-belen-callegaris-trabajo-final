import axios from "axios";
const API_URL = "https://word-api-hmlg.vercel.app";

export const validateWord = async (word) => {
    const response = await axios.get(`${API_URL}/api/validate`, {
        params: { word: word },
        timeout: 5000,
    });
    return response.data;
}
