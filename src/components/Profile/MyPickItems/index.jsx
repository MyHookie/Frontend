import React from 'react';
import * as S from './index.style';

function MyPickItems() {
  return (
    <S.Container>
      <S.Title> MyPicks</S.Title>
      <S.Items>
        <S.Item>
          <S.ImgContainer>
            <S.Img />
          </S.ImgContainer>
          <S.ItemTitle>애월읍 노지노지노지노지노지 감귤</S.ItemTitle>
          <S.ItemPrice>35,000원</S.ItemPrice>
        </S.Item>
        <S.Item>
          <S.ImgContainer>
            <S.Img />
          </S.ImgContainer>
          <S.ItemTitle>애월읍 노지 감귤</S.ItemTitle>
          <S.ItemPrice>35,000원</S.ItemPrice>
        </S.Item>
        <S.Item>
          <S.ImgContainer>
            <S.Img />
          </S.ImgContainer>
          <S.ItemTitle>애월읍 노지 감귤</S.ItemTitle>
          <S.ItemPrice>35,000원</S.ItemPrice>
        </S.Item>
      </S.Items>
    </S.Container>
  );
}

export default MyPickItems;
