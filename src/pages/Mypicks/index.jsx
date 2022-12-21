import React, { useState, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmHeader from '../../components/common/ConfirmHeader';
import Dialog from '../../components/Modal/Dialog';
import leftIcon from '../../assets/icon/icon-arrow-left.png';

import * as S from './index.style';

function index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1);
  };

  const textRef = useRef();

  const handleResizeHeight = useCallback((e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }, []);

  const handleDialogOpen = (e) => {
    e.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSubmit = () => {
    console.log('myPick 등록');
    goBackPage();
  };

  const handleInputChange = (e) => {
    setText(e.target.value);
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
    if (check) {
      setDisabled(false);
    } else {
      setText('');
      setDisabled(true);
    }
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
          <S.Textarea
            value={text}
            onChange={handleInputChange}
            disabled={disabled}
            name=""
            id="something2"
            cols="30"
            rows="1"
            placeholder={!disabled && '숫자만 입력 가능합니다.'}
          />
          <S.LabelCheckBox onClick={handleCheck} htmlFor="price">
            <S.StyledP>가격 미정</S.StyledP>
            <S.Checkbox type="checkbox" name="" id="price" />
          </S.LabelCheckBox>
        </S.Label>
        <S.Label htmlFor="something1">
          추천하는 이유
          <S.Textarea
            onChange={handleResizeHeight}
            ref={textRef}
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
