import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './index.style';
import MyPickItem from './MyPickItem';
import MyPickModal from './MyPickModal';

function MyPicks({ accountName }) {
  console.log(accountName);
  const [myPickItemList, setMyPickItemList] = useState([]);
  const [isMyPickOpen, setIsMyPickOpen] = useState(false);
  const [myPickId, setMyPickId] = useState('');

  const BASE_URL = `https://mandarin.api.weniv.co.kr`;

  const getMyPickItemList = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/product/${accountName}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-type': 'application/json',
        },
      });
      setMyPickItemList(response.data.product);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getMyPickItemList();
  }, []);

  const handleMyPickOpen = (id) => {
    setIsMyPickOpen(!isMyPickOpen);
    if (id) {
      setMyPickId(id);
    }
  };

  console.log(myPickItemList);

  // 1. myPickItem 클릭 시 모달이 열린다.
  // 2. 해당 모달에서는 데이터를 불러와 뿌려주는 기능을 한다.

  return (
    <S.Container>
      <S.Title>MyPicks</S.Title>
      <S.Items>
        {myPickItemList.map((item) => (
          <MyPickItem
            key={item.id}
            oneLineReview={item.itemName}
            imgSrc={item.itemImage}
            price={item.price}
            onClick={() => handleMyPickOpen(item.id)}
          />
        ))}
      </S.Items>
      {isMyPickOpen && (
        <MyPickModal handleClose={handleMyPickOpen} myPickId={myPickId} />
      )}
    </S.Container>
  );
}
export default MyPicks;
