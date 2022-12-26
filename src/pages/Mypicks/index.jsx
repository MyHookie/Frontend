import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ConfirmHeader from '../../components/common/ConfirmHeader';
import Dialog from '../../components/Modal/Dialog';
import leftIcon from '../../assets/icon/icon-arrow-left.png';

import * as S from './index.style';

function index() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [check, setCheck] = useState(false);
  const [readOnly, setReadOnly] = useState(false);

  const [imgFile, setImgFile] = useState('');
  const [value, setValue] = useState('');
  const [price, setPrice] = useState('');
  const [link, setLink] = useState('');
  const [isError, setIsError] = useState(false);

  const textRef = useRef();
  const imageInput = useRef();

  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1);
  };

  const handleResizeHeight = useCallback((e) => {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight + 2}px`;
  }, []);

  const handleDialogOpen = (e) => {
    e.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
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

  // 폼 제출 유효성 검사
  const handleSubmit = () => {
    if (readOnly === true) {
      setPrice('0');
    }

    if (imgFile && value && price && link) {
      console.log('myPick 등록');
    } else {
      console.log('필수 입력사항을 입력해주세요.');
      setIsError(true);
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
      setReadOnly(false);
    } else {
      setPrice('');
      setPlaceholderText('');
      setReadOnly(true);
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
        {isError && (
          <S.WarningMsg>* 필수 입력사항을 입력해주세요.</S.WarningMsg>
        )}
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
        <S.Label htmlFor="review">한줄평</S.Label>
        <S.Textarea
          onChange={handleValueChange}
          ref={textRef}
          value={value}
          name=""
          id="review"
          cols="30"
          rows="1"
          maxLength="100"
          placeholder="한줄평을 남겨주세요. (100자)"
        />

        <S.Label htmlFor="price">가격</S.Label>
        <S.Textarea
          value={price}
          onChange={handlePriceChange}
          readOnly={readOnly}
          name=""
          id="price"
          cols="30"
          rows="1"
          placeholder={placeholderText}
        />
        <S.Checkbox
          onClick={handleCheck}
          type="checkbox"
          name=""
          id="read-only"
        />
        <S.LabelCheckBox htmlFor="read-only">
          <S.StyledP>가격 미정</S.StyledP>
        </S.LabelCheckBox>
        <S.Label htmlFor="link">링크</S.Label>
        <S.Textarea
          value={link}
          onChange={handleLinkChange}
          name=""
          id="link"
          cols="30"
          rows="1"
          placeholder="http://naver.com"
        />
      </S.Container>
    </>
  );
}
export default index;
