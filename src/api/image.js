import { defaultInstance } from './instance';
import { API_URLS } from '../constants/apiUrls';

const getImageFilename = async (images) => {
  const formData = new FormData();

  formData.append('image', images);

  try {
    const res = await defaultInstance.post(API_URLS.CREATE_IMAGE, formData);

    return res.data.filename;
  } catch (error) {
    return error;
  }
};

export default getImageFilename;
