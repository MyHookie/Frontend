import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      setMyPickItemList(response.data.product);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getMyPickItemList();
  }, []);

  console.log(myPickItemList);

  return (
    <S.Container>
      <S.Title> MyPicks</S.Title>
      <S.Items>
        {myPickItemList.map((item) => (
          <MyPickItem
            key={item.id}
            oneLineReview={item.itemName}
            imgSrc={item.itemImage}
            price={item.price}
            link={item.link}
          />
        ))}
      </S.Items>
    </S.Container>
  );
}
export default MyPickItems;