import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
});

const getCommentList = async (pathName) => {
  const { data } = await fetcher.get(`/post/${pathName}/comments`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Content-type': 'application/json',
    },
  });

  return data.comments;
};

export default getCommentList;
