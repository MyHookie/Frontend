import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
});

const searchUser = async (keyword) => {
  const { data } = await fetcher.get(`/user/searchuser/?keyword=${keyword}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Content-type': 'application/json',
    },
  });
  return data;
};

export default searchUser;
