import React from 'react';
import { createPortal } from 'react-dom';
import * as S from './index.style';

function MyPickModal() {
  return (
    <S.Container>
      <S.ModalBackGround />
      <S.ModalContainer>
        <S.ImageContainer>
          <S.ImageInput />
          <S.Imgtxt>myPick 이미지</S.Imgtxt>
        </S.ImageContainer>
        <S.TextContainer>
          <S.Label>제목</S.Label>
          <S.Textarea>
            와랄랄라 내용이 들어가요 내용 한 20자인데 줄이길면 늘어나요
          </S.Textarea>
        </S.TextContainer>
        <S.TextContainer>
          <S.Label>제목</S.Label>
          <S.Textarea>1,000,000메소</S.Textarea>
        </S.TextContainer>
        <S.TextContainer>
          <S.Label>링크 </S.Label>
          <S.Textarea>
            http://naver.com링크가두줄이될수도있겠습니다 바로이렇게
          </S.Textarea>
        </S.TextContainer>
      </S.ModalContainer>
    </S.Container>
  );
}

export default MyPickModal;
