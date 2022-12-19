import React from 'react';
import * as S from './index.style';

function MessageItemYours({ text, time, img }) {
  return (
    <S.MessageItemYours>
      {img ? (
        <S.UploadedImgContainer>
          <S.UploadedImg src={img} />
        </S.UploadedImgContainer>
      ) : (
        <S.DialogBox>{text}</S.DialogBox>
      )}
      <S.Time>{time}</S.Time>
    </S.MessageItemYours>
  );
}

export default MessageItemYours;
