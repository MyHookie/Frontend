import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './index.style';
import MyPickItem from './MyPickItem';
import MyPickModal from './MyPickModal';

function MyPicks({ accountName, isMyPage }) {
  console.log(accountName);
  console.log(isMyPage);

  const [myPickItemList, setMyPickItemList] = useState([]);
  const [isMyPickOpen, setIsMyPickOpen] = useState(false);
  const [myPickId, setMyPickId] = useState('');
  const [canOptionAccess, setCanOptionAccess] = useState(false);

  useEffect(
    () => (isMyPage ? setCanOptionAccess(true) : setCanOptionAccess(false)),
    []
  );

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
  }, [accountName]);

  const handleMyPickOpen = (id) => {
    setIsMyPickOpen(!isMyPickOpen);
    if (id) {
      setMyPickId(id);
    }
  };

  console.log(myPickItemList);

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
            handleMyPickOpen={() => handleMyPickOpen(item.id)}
          />
        ))}
      </S.Items>
      {isMyPickOpen && (
        <MyPickModal
          handleClose={handleMyPickOpen}
          myPickId={myPickId}
          canOptionAccess={canOptionAccess}
        />
      )}
    </S.Container>
  );
}
export default MyPicks;
