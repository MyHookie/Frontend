import axios from 'axios';

const emailValidAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
  headers: {
    'Content-type': 'application/json',
  },
});

export default emailValidAxios;
