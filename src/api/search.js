import { authInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

const searchUser = async (keyword) => {
  const { data } = await authInstance.get(API_URLS.GET_SEARCHED_USER(keyword));

  return data;
};

export default searchUser;
