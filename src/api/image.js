import axios from 'axios';

const getImageFilename = async (images) => {
  const formData = new FormData();

  formData.append('image', images);

  try {
    const res = await axios.post(
      `https://mandarin.api.weniv.co.kr/image/uploadfile`,
      formData
    );
    return res.data.filename;
  } catch (error) {
    return error;
  }
};

export default getImageFilename;
