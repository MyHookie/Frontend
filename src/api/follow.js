import { authInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const postFollow = async (accountName) => {
  try {
    await authInstance.post(API_URLS.CREATE_FOLLOW(accountName));
  } catch (error) {
    console.error(error);
  }
};

export const deleteFollow = async (accountName) => {
  try {
    await authInstance.delete(API_URLS.DELETE_FOLLOW(accountName));
  } catch (error) {
    console.error(error);
  }
};

export const getFollowerList = async (accountName) => {
  const { data } = await authInstance.get(API_URLS.GET_FOLLOWER(accountName));

  return data;
};

export const getFollowingList = async (accountName) => {
  const { data } = await authInstance.get(API_URLS.GET_FOLLOWING(accountName));

  return data;
};
