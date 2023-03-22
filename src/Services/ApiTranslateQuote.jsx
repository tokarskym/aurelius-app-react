import axios from 'axios';

export const translateQuoteAPI = (API_KEY, quote) => {
  const URL = `https://api-free.deepl.com/v2/translate?auth_key=${API_KEY}&text=${quote}&target_lang=PL`;
  return axios.get(URL);
};
