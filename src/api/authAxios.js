import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
});

export default authAxios;
