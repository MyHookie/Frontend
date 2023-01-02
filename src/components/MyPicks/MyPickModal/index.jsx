import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import axios from 'axios';
import * as S from './index.style';
import Dialog from '../../Modal/Dialog';

function MyPickModal({ myPickId, handleClose, canOptionAccess }) {
  const [myPickItemInfo, setMyPickItemInfo] = useState('');
  const [isNoPrice, setIsNoPrice] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigate = useNavigate();

  const BASE_URL = `https://mandarin.api.weniv.co.kr`;
  const noPrice = parseInt(123415810423, 10);

  const handleDialogOpen = (e) => {
    e.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
  };

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
      if (noPrice === response.data.product.price) {
        setIsNoPrice(true);
      }
      return response.data;
    } catch (error) {
      return error;
    }
  };

  console.log(myPickItemInfo);

  useEffect(() => {
    getMyPickItemDetail();
  }, []);

  const wonPrice = new Intl.NumberFormat('ko-KR').format(myPickItemInfo.price);

  const handleMyPickEdit = () => {
    navigate('/mypicks/edit', {
      state: {
        myPickId,
        isNoPrice,
      },
    });
  };

  const handleMyPickDelete = async () => {
    console.log('삭제합니다');
    handleClose();
    try {
      const response = await axios.delete(`${BASE_URL}/product/${myPickId}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-type': 'application/json',
        },
      });
      console.log('요청 성공');
      return response.data;
    } catch (error) {
      return error;
    }
  };

  const handleSubmit = () => {
    console.log('myPick 삭제');
    handleMyPickDelete();
    setIsDialogOpen(!isDialogOpen);
    handleClose();
  };

  return (
    <>
      {createPortal(
        <S.Container>
          <S.ModalBackGround onClick={handleClose} />
          <S.ModalContainer>
            <S.ModalTitle>myPick</S.ModalTitle>
            <S.OptionContainer>
              {canOptionAccess && (
                <>
                  <S.EditBtn onClick={handleMyPickEdit} />
                  <S.DeleteBtn onClick={handleDialogOpen} />
                  {isDialogOpen && (
                    <Dialog
                      handleClose={handleDialogOpen}
                      handleSubmit={handleSubmit}
                      dialogText="정말 삭제하시겠습니까?"
                    />
                  )}
                </>
              )}
              <S.CloseModalBtn onClick={handleClose} />
            </S.OptionContainer>
            <S.ImageContainer>
              <S.MyPickItemImg
                src={myPickItemInfo.itemImage}
                alt="myPick 이미지"
              />
            </S.ImageContainer>
            <S.TextContainer>
              <S.ContentTitle>한줄평</S.ContentTitle>
              <S.Contents>{myPickItemInfo.itemName}</S.Contents>
            </S.TextContainer>
            <S.TextContainer>
              <S.ContentTitle>가격</S.ContentTitle>
              <S.Contents>
                {noPrice === myPickItemInfo.price
                  ? `가격 미정`
                  : `${wonPrice}원`}
              </S.Contents>
            </S.TextContainer>
            <S.TextContainer>
              <S.ContentTitle>링크</S.ContentTitle>
              <S.Contents>
                🔗&nbsp;
                <a
                  href={myPickItemInfo.link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {myPickItemInfo.link}
                </a>
              </S.Contents>
            </S.TextContainer>
          </S.ModalContainer>
        </S.Container>,

        document.getElementById('mypick-modal')
      )}
    </>
  );
}

export default MyPickModal;
