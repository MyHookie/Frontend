import React from 'react';
import * as S from './index.style';

function MyPickItem({ key, oneLineReview, imgSrc, price, link }) {
  const wonPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <S.Item>
      <S.ImgContainer>
        <S.Img src={imgSrc} />
      </S.ImgContainer>
      <S.ItemTitle>{oneLineReview}</S.ItemTitle>
      <S.ItemPrice>{wonPrice}</S.ItemPrice>
    </S.Item>
  );
}

export default MyPickItem;
