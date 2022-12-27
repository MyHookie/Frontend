import React, { useState } from 'react';
import axios from 'axios';
import * as S from './index.style';
import MyPickItem from './MyPickItem';

function MyPickItems() {
  const [myPickItemList, setMyPickItemList] = useState([]);

  const BASE_URL = `https://mandarin.api.weniv.co.kr`;

  const getMyPickItemList = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/product/${JSON.parse(
          localStorage.getItem('accountName')
        )}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
      setMyPickItemList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.Title> MyPicks</S.Title>
      <S.Items>
        <MyPickItem />
      </S.Items>
    </S.Container>
  );
}

export default MyPickItems;
