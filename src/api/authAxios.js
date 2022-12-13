import axios from 'axios';

export const authAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
});
