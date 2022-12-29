import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { createPortal } from 'react-dom';
import * as S from './index.style';
import closeIcon from '../../../../assets/icon/x.png';

function MyPickModal({ myPickId, handleClose }) {
  const [myPickItemInfo, setMyPickItemInfo] = useState([]);

  const BASE_URL = `https://mandarin.api.weniv.co.kr`;

  const getMyPickItemDetail = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/product/detail/${myPickId}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );

      console.log(response.data.product);
      setMyPickItemInfo(response.data.product);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getMyPickItemDetail();
  }, []);

  return (
    <>
      {createPortal(
        <S.Container>
          <S.ModalBackGround onClick={handleClose} />
          <S.ModalContainer>
            {/* <S.CloseModal onClick={onCloseHandler}>
              <img src={closeIcon} alt="모달창 닫기" />
            </S.CloseModal>
            <S.ImageContainer>
              <S.ImageInput />
              <S.Imgtxt>myPick</S.Imgtxt>
              {imgSrc && <S.Img src={imgSrc} alt="myPick 이미지" />}
            </S.ImageContainer>
            <S.TextContainer>
              <S.Label>한줄평</S.Label>
              <S.Textarea>{oneLineReview}</S.Textarea>
            </S.TextContainer>
            <S.TextContainer>
              <S.Label>가격</S.Label>
              <S.Textarea>{price}</S.Textarea>
            </S.TextContainer>
            <S.TextContainer>
              <S.Label>링크 </S.Label>
              <S.Textarea>{link}</S.Textarea>
            </S.TextContainer> */}
            {myPickId}
          </S.ModalContainer>
        </S.Container>,

        document.getElementById('mypick-modal')
      )}
    </>
  );
}

export default MyPickModal;
