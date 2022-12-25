import axios from 'axios';

const checkTokenValid = async () => {
  try {
    const res = await axios.get(
      'https://mandarin.api.weniv.co.kr/user/checktoken',
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-type': 'application/json',
        },
      }
    );
    return res.data.isValid;
  } catch (error) {
    return false;
  }
};

export default checkTokenValid;
