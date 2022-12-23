import React from 'react';
import { createPortal } from 'react-dom';
import * as S from './index.style';
import closeIcon from '../../../assets/icon/x.png';

function MyPickModal({ handleClose, text, price, link }) {
  return (
    <>
      {createPortal(
        <S.Container>
          <S.ModalBackGround onClick={handleClose} />
          <S.ModalContainer>
            <S.CloseModal onClick={handleClose}>
              <img src={closeIcon} alt="모달창 닫기" />
            </S.CloseModal>
            <S.ImageContainer>
              <S.ImageInput />
              <S.Imgtxt>myPick</S.Imgtxt>
            </S.ImageContainer>
            <S.TextContainer>
              <S.Label>한줄평</S.Label>
              <S.Textarea>{text}</S.Textarea>
            </S.TextContainer>
            <S.TextContainer>
              <S.Label>가격</S.Label>
              <S.Textarea>{price}</S.Textarea>
            </S.TextContainer>
            <S.TextContainer>
              <S.Label>링크 </S.Label>
              <S.Textarea>{link}</S.Textarea>
            </S.TextContainer>
          </S.ModalContainer>
        </S.Container>,

        document.getElementById('mypick-modal')
      )}
    </>
  );
}

export default MyPickModal;
