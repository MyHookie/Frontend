import React from 'react';
import * as S from './index.style';

function MyPickItem({ key, oneLineReview, imgSrc, price, link }) {
  const noPrice = parseInt(123415810423, 10);
  const wonPrice = new Intl.NumberFormat('ko-KR').format(price);

  return (
    <S.Item itemId={key}>
      <S.ImgContainer>
        <S.Img src={imgSrc} />
      </S.ImgContainer>
      <S.ItemTitle>{oneLineReview}</S.ItemTitle>
      <S.ItemPrice>
        {noPrice === price ? `가격 미정` : `${wonPrice}원`}
      </S.ItemPrice>
    </S.Item>
  );
}

export default MyPickItem;
