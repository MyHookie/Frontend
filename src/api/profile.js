import { authInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

export const getProfileInfo = async (accountName) => {
  const { data } = await authInstance.get(API_URLS.GET_PROFILE(accountName));
  return data;
};

export const editProfile = async (userName, accountName, intro, image) => {
  const { data } = await authInstance.put(API_URLS.UPDATE_PROFILE, {
    user: {
      username: userName,
      accountname: accountName,
      intro,
      image,
    },
  });

  return data;
};
