import axios from 'axios';

const fetcher = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr',
});

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
    console.log(error);
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
    console.log(error);
  }
};

export const getFollowerList = async (accountName) => {
  const { data } = await fetcher.get(
    `/profile/${accountName}/follower?limit=0&skip=0`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-type': 'application/json',
      },
    }
  );
  return data;
};

export const getFollowingList = async (accountName) => {
  const { data } = await fetcher.get(
    `/profile/${accountName}/following?limit=0&skip=0`,
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-type': 'application/json',
      },
    }
  );
  return data;
};
