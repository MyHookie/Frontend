import { authInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

const checkTokenValid = async () => {
  try {
    const res = await authInstance.get(API_URLS.CHECK_USER_TOKEN);

    return res.data.isValid;
  } catch (error) {
    return false;
  }
};

export default checkTokenValid;
