import axios from 'axios';

export const postFollow = async (accountName) => {
  try {
    await axios.post(
      `https://mandarin.api.weniv.co.kr/profile/${accountName}/follow`,
      {},
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};

export const deleteFollow = async (accountName) => {
  try {
    await axios.delete(
      `https://mandarin.api.weniv.co.kr/profile/${accountName}/unfollow`,
      {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error(error);
  }
};
