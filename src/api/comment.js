import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
});

export const getCommentList = async (postId) => {
  const { data } = await fetcher.get(`/post/${postId}/comments`, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
      'Content-type': 'application/json',
    },
  });

  return data.comments;
};

export const postCommentData = async (postId, commentData) => {
  await fetcher.post(
    `/post/${postId}/comments`,
    {
      comment: {
        content: commentData,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-type': 'application/json',
      },
    }
  );
};
