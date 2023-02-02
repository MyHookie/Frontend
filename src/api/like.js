import { authInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const postLikeFeed = async (postId) => {
  await authInstance.post(API_URLS.LIKE_POST(postId));
};

export const deleteLikeFeed = async (postId) => {
  await authInstance.delete(API_URLS.UNLIKE_POST(postId));
};
