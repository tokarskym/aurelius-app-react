import axios from 'axios';

export const fetchQuote = () => {
  return axios.get('https://api.themotivate365.com/stoic-quote');
};
