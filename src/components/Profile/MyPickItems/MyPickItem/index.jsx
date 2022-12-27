import React from 'react';
import * as S from './index.style';

function MyPickItem({ key, oneLineReview, imgSrc, price, link }) {
  return (
    <S.Item>
      <S.ImgContainer>
        <S.Img src={imgSrc} />
      </S.ImgContainer>
      <S.ItemTitle>{oneLineReview}</S.ItemTitle>
      <S.ItemPrice>{price}</S.ItemPrice>
    </S.Item>
  );
}

export default MyPickItem;
