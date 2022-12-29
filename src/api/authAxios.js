import axios from 'axios';

const authAxios = axios.create({
  baseURL: 'https://mandarin.api.weniv.co.kr/user',
  headers: {
    'Content-type': 'application/json',
  },
});

export const editProfile = async (userName, accountName, intro, image) => {
  const { data } = await authAxios.put(
    '',
    {
      user: {
        username: userName,
        accountname: accountName,
        intro,
        image,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        'Content-type': 'application/json',
      },
    }
  );

  return data;
};

export default authAxios;
