import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import ConfirmHeader from '../../components/common/ConfirmHeader';
import Dialog from '../../components/Modal/Dialog';
import leftIcon from '../../assets/icon/icon-arrow-left.png';
import * as S from './index.style';

function index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1);
  };

  const handleDialogOpen = (e) => {
    e.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSubmit = () => {
    console.log('myPick 등록');
    goBackPage();
  };

  return (
    <>
      <ConfirmHeader
        leftIcon={leftIcon}
        leftClick={goBackPage}
        rightClick={handleDialogOpen}
      />
      {isDialogOpen && (
        <Dialog
          handleClose={handleDialogOpen}
          handleSubmit={handleSubmit}
          dialogText="저장하시겠습니까?"
        />
      )}

      <S.Container>
        <S.ImageContainer>
          <S.imgtxt>myPick 이미지 등록</S.imgtxt>
          <S.ImageInput />
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png, image/gif, image/bmp, image/tif, image/heic"
            multiple
            style={{ display: 'none' }}
          />
        </S.ImageContainer>
        <S.label htmlFor="something1">
          항목1입니다
          <S.textarea
            name=""
            id="something1"
            cols="30"
            rows="1"
            placeholder="2~15자 이내여야 합니다."
          />
        </S.label>
        <S.label htmlFor="something2">
          항목2입니다
          <S.textarea
            name=""
            id="something2"
            cols="30"
            rows="1"
            placeholder="숫자만 입력 가능합니다."
          />
        </S.label>
        <S.label htmlFor="something1">
          항목3입니다
          <S.textarea
            name=""
            id="something3"
            cols="30"
            rows="1"
            placeholder="내용을 입력해주세요."
          />
        </S.label>
      </S.Container>
    </>
  );
}

export default index;
