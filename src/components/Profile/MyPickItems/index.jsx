import React from 'react';
import * as S from './index.style';
import imgsrc from '../../../assets/logo.png';
import MyPickItem from './MyPickItem';

function MyPickItems() {
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
