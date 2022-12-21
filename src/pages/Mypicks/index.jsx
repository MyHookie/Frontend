import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
          <S.Imgtxt>myPick 이미지 등록</S.Imgtxt>
          <S.ImageInput />
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png, image/gif, image/bmp, image/tif, image/heic"
            style={{ display: 'none' }}
          />
        </S.ImageContainer>
        <S.Label htmlFor="something1">
          제목
          <S.Textarea
            name=""
            id="something1"
            cols="30"
            rows="1"
            placeholder="2~15자 이내여야 합니다."
          />
        </S.Label>
        <S.Label htmlFor="something2">
          가격
          <S.Textarea name="" id="something2" cols="30" rows="1" />
          <S.LabelCheckBox htmlFor="price">
            <S.StyledP>가격 미정</S.StyledP>
            <S.Checkbox type="checkbox" name="" id="price" />
          </S.LabelCheckBox>
        </S.Label>
        <S.Label htmlFor="something1">
          추천하는 이유
          <S.Textarea
            name=""
            id="something3"
            cols="30"
            rows="1"
            placeholder="내용을 입력해주세요."
          />
        </S.Label>
      </S.Container>
    </>
  );
}

export default index;
