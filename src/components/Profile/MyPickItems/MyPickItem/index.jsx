import React from 'react';
import * as S from './index.style';
import imgsrc from '../../../../assets/logo.png';

function MyPickItem() {
  return (
    <S.Item>
      <S.ImgContainer>
        <S.Img src={imgsrc} />
      </S.ImgContainer>
      <S.ItemTitle>애월읍 노지노지노지노지노지감귤</S.ItemTitle>
      <S.ItemPrice>35,000원</S.ItemPrice>
    </S.Item>
  );
}

export default MyPickItem;
