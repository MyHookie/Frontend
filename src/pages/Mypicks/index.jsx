import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmHeader from '../../components/common/ConfirmHeader';
import Dialog from '../../components/Modal/Dialog';
import leftIcon from '../../assets/icon/icon-arrow-left.png';

import * as S from './index.style';

function index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [imgFile, setImgFile] = useState('');
  const [value, setValue] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');

  const [isCorrect, setIsCorrect] = useState(true);

  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1);
  };

  const textRef = useRef();
  const imageInput = useRef();

  const handleResizeHeight = useCallback((e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight + 1}px`;
  }, []);

  const handleDialogOpen = (e) => {
    e.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
  };

  // 폼 제출 유효성 검사
  const handleSubmit = () => {
    if (disabled === true) {
      setPrice('0');
    }

    if (imgFile && value && price && link) {
      console.log('myPick 등록');
    } else {
      console.log('필수 입력사항을 입력해주세요.');
      setIsDialogOpen(!isDialogOpen);
    }
    // goBackPage();
  };

  const CheckNumber = (e) => {
    const onlyNumber = e.replace(/[^0-9]/g, '');
    setPrice(onlyNumber);
  };

  useEffect(() => {
    CheckNumber(price);
  }, [price]);

  const handleValueChange = (e) => {
    setValue(e.target.value);
    handleResizeHeight(e);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const [placeholderText, setPlaceholderText] =
    useState('숫자만 입력 가능합니다.');

  const handleCheck = (e) => {
    setCheck(e.target.checked);
    if (check) {
      setPlaceholderText('숫자만 입력 가능합니다.');
      setDisabled(false);
    } else {
      setPrice('');
      setPlaceholderText('');
      setDisabled(true);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };
  const handleImageAdd = () => {
    imageInput.current.click();
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
          <S.ImageInput onClick={handleImageAdd} />
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png, image/gif, image/bmp, image/tif, image/heic
            "
            ref={imageInput}
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          {imgFile && <S.img src={imgFile} alt="mypick 사진" />}
        </S.ImageContainer>
        <S.Label htmlFor="something1">한줄평</S.Label>
        <S.Textarea
          onChange={handleValueChange}
          ref={textRef}
          value={value}
          name=""
          id="something1"
          cols="30"
          rows="1"
          maxLength="100"
          placeholder="한줄평을 남겨주세요. (100자)"
        />

        <S.Label htmlFor="something2">가격</S.Label>

        <S.Textarea
          value={price}
          onChange={handlePriceChange}
          readOnly={disabled}
          name=""
          id="something2"
          cols="30"
          rows="1"
          placeholder={placeholderText}
        />
        <S.Checkbox onClick={handleCheck} type="checkbox" name="" id="price" />
        <S.LabelCheckBox htmlFor="price">
          <S.StyledP>가격 미정</S.StyledP>
        </S.LabelCheckBox>
        <S.Label htmlFor="something3">링크</S.Label>
        <S.Textarea
          value={link}
          onChange={handleLinkChange}
          isCorrect={isCorrect}
          name=""
          id="something3"
          cols="30"
          rows="1"
          placeholder="http://naver.com"
        />
      </S.Container>
    </>
  );
}
export default index;
