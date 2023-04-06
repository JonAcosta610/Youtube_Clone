import axios from "axios";


const BASE_URL = 'https://youtube-v38.p.rapidapi.com/search/';

const options = {
    url: BASE_URL,
    params: {
        maxResults: '5'
    },
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-v38.p.rapidapi.com'
    }
  };

  export const fetchFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    
    return data;
}