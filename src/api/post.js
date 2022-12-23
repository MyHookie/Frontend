import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
});

export const getMyPost = async () => {
  const { data } = await fetcher.get(
    `/post/${JSON.parse(localStorage.getItem('accountName'))}/userpost/`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-type': 'application/json',
      },
    }
  );
  return data;
};

export const getFollowPost = async () => {
  const { data } = await fetcher.get(`/post/feed/`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Content-type': 'application/json',
    },
  });
  return data;
};

export const createMyPost = async (imageUrls, contents) => {
  const { data } = await axios.post(
    `https://mandarin.api.weniv.co.kr/post`,
    {
      post: {
        content: contents,
        image: imageUrls.join(', '),
      },
    },
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-type': 'application/json',
      },
    }
  );
  return data;
};

export const deleteMyPost = async (postId) => {
  const { data } = await fetcher.delete(`/post/${postId}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Content-type': 'application/json',
    },
  });
  return data;
};
