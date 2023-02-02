import { authInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getAccountPost = async (accountName, skip = 0) => {
  const { data } = await authInstance.get(
    API_URLS.GET_ACCOUNT_POST(accountName, skip)
  );

  return {
    data: data.post,
    skip,
    isLast: data.post.length !== 3,
  };
};

export const getDetailPost = async (postId) => {
  const { data } = await authInstance.get(API_URLS.GET_POST_DETAIL(postId));

  return data.post;
};

export const getFollowPost = async () => {
  const { data } = await authInstance.get(API_URLS.GET_FOLLOW_POST());

  return data.posts;
};

export const createMyPost = async (imageUrls, contents) => {
  const { data } = await authInstance.post(API_URLS.CREATE_POST, {
    post: {
      content: contents,
      image: imageUrls.join(', '),
    },
  });

  return data;
};

export const deleteMyPost = async (postId) => {
  const { data } = await authInstance.delete(API_URLS.DELETE_POST(postId));

  return data;
};

export const editMyPost = async (imageUrls, contents, postId) => {
  const { data } = await authInstance.put(API_URLS.UPDATE_POST(postId), {
    post: {
      contents,
      image: imageUrls.join(', '),
    },
  });

  return data;
};

export const reportFollowPost = async (postId) => {
  const { data } = await authInstance.post(API_URLS.REPORT_POST(postId));

  return data;
};
