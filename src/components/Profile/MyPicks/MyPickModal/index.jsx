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

      setMyPickItemInfo(response.data.product);
      return response.data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getMyPickItemDetail();
  }, []);

  console.log(myPickItemInfo);

  const noPrice = parseInt(123415810423, 10);
  const wonPrice = new Intl.NumberFormat('ko-KR').format(myPickItemInfo.price);

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
              <S.Img src={myPickItemInfo.itemImage} alt="myPick 이미지" />
            </S.ImageContainer>
            <S.TextContainer>
              <S.Label>한줄평</S.Label>
              <S.Textarea>{myPickItemInfo.itemName}</S.Textarea>
            </S.TextContainer>
            <S.TextContainer>
              <S.Label>가격</S.Label>
              <S.Textarea>
                {noPrice === myPickItemInfo.price
                  ? `가격 미정`
                  : `${wonPrice}원`}
              </S.Textarea>
            </S.TextContainer>
            <S.TextContainer>
              <S.Label>링크</S.Label>
              <S.Textarea>{myPickItemInfo.link}</S.Textarea>
            </S.TextContainer>
          </S.ModalContainer>
        </S.Container>,

        document.getElementById('mypick-modal')
      )}
    </>
  );
}

export default MyPickModal;
