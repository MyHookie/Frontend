import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
});

export const postLikeFeed = async (postId) => {
  const { data } = await fetcher.post(
    `/post/${postId}/heart`,
    {},
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-type': 'application/json',
      },
    }
  );
  return data;
};

export const deleteLikeFeed = async (postId) => {
  const { data } = await fetcher.delete(`/post/${postId}/unheart`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Content-type': 'application/json',
    },
  });
  return data;
};
