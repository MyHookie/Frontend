import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ConfirmHeader from '../../components/common/ConfirmHeader';
import Dialog from '../../components/Modal/Dialog';
import leftIcon from '../../assets/icon/icon-arrow-left.png';
import uploadIconGrey from '../../assets/upload-file_grey.png';

function index() {
  const navigate = useNavigate();
  const goBackPage = () => {
    navigate(-1);
  };
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = (e) => {
    e.stopPropagation();
    setIsDialogOpen(!isDialogOpen);
  };

  const handleSubmit = () => {
    console.log('myPick 등록');
    goBackPage();
  };

  const SContainer = styled.main`
    height: calc(100 + 4.4) vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.2rem 3.4rem 0;
    gap: 1.6rem;
  `;

  const SImageContainer = styled.div`
    position: relative;
    height: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
    cursor: pointer;

    &::after {
      content: '';
      position: absolute;
      right: 1.2rem;
      bottom: 2.2rem;
      width: 4rem;
      height: 4rem;
      background-image: url(${uploadIconGrey});
      background-size: cover;
    }
  `;
  const SImageInput = styled.div`
    height: 20.4rem;
    width: 32.2rem;
    flex: 0 0 auto;
    font-size: 3.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1.5rem;
    background-color: #f2f2f2;
    border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  `;

  const Simgtxt = styled.p`
    position: absolute;
    top: -3rem;
    font-size: ${({ theme }) => theme.fontSize.SMALL};
    color: ${({ theme }) => theme.color.GRAY};
  `;

  const Slabel = styled.label`
    font-size: ${({ theme }) => theme.fontSize.SMALL};
    color: ${({ theme }) => theme.color.GRAY};
  `;

  const Stextarea = styled.textarea`
    display: block;
    margin-top: 10px;
    width: 32.2rem;
    height: 25px;
    font-size: ${({ theme }) => theme.fontSize.MEDIUM};
    border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  `;

  return (
    <div>
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

      <SContainer>
        <SImageContainer>
          <Simgtxt>myPick 이미지 등록</Simgtxt>
          <SImageInput />
          <input
            type="file"
            accept="image/jpg, image/jpeg, image/png, image/gif, image/bmp, image/tif, image/heic"
            multiple
            style={{ display: 'none' }}
          />
        </SImageContainer>
        <Slabel htmlFor="something1">
          항목1입니다
          <Stextarea
            name=""
            id="something1"
            cols="30"
            rows="1"
            placeholder="2~15자 이내여야 합니다."
          />
        </Slabel>
        <Slabel htmlFor="something2">
          항목2입니다
          <Stextarea
            name=""
            id="something2"
            cols="30"
            rows="10"
            placeholder="숫자만 입력 가능합니다."
          />
        </Slabel>
        <Slabel htmlFor="something1">
          항목3입니다
          <Stextarea
            name=""
            id="something3"
            cols="30"
            rows="10"
            placeholder="폰트 적용 안되고있는데 나중에 적용 대상임"
          />
        </Slabel>
      </SContainer>
    </div>
  );
}

export default index;
