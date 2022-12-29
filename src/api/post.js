import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
});

export const getAccountPost = async (accountName) => {
  const { data } = await fetcher.get(`/post/${accountName}/userpost/`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Content-type': 'application/json',
    },
  });
  return data;
};

export const getDetailPost = async (pathName) => {
  const { data } = await fetcher.get(`/post/${pathName}`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Content-type': 'application/json',
    },
  });
  return data.post;
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
  const { data } = await fetcher.post(
    `/post`,
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

export const editMyPost = async (imageUrls, contents, postId) => {
  const { data } = await fetcher.put(
    `/post/${postId}`,
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

export const reportFollowPost = async (postId) => {
  const { data } = await fetcher.post(
    `/post/${postId}/report`,
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
