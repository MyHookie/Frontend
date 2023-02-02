import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
  headers: {
    'Content-type': 'application/json',
  },
});

export default authAxios;
