import axios from 'axios';
import { BASE_URL } from '../constants/apiUrls';

const axiosApi = (options) => {
  const instance = axios.create({
    baseURL: BASE_URL,
    ...options,
  });

  return instance;
};

const axiosAuthApi = (options) => {
  const token = JSON.parse(localStorage.getItem('token'));
  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-type': 'application/json',
    },
    ...options,
  });

  return instance;
};

export const defaultInstance = axiosApi();
export const authInstance = axiosAuthApi();
