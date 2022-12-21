import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ConfirmHeader from '../../components/common/ConfirmHeader';
import leftIcon from '../../assets/icon/icon-arrow-left.png';
import Dialog from '../../components/Modal/Dialog';

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
    position: relative;
    height: calc(100 + 4.4) vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 6.2rem 3.4rem 0;
    gap: 1.6rem;
  `;

  const SImageContainer = styled.div`
    height: 100%;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
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
    color: ${({ theme }) => theme.color.GRAY};
    background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  `;

  const Simgtxt = styled.p`
    position: absolute;
    top: 3rem;
    font-size: ${({ theme }) => theme.fontSize.SMALL};
  `;

  const Slabel = styled.label`
    font-size: ${({ theme }) => theme.fontSize.SMALL};
    color: ${({ theme }) => theme.color.DARK_GRAY}; ;
  `;

  const Stextarea = styled.textarea`
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
          <SImageInput>+</SImageInput>
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
            rows="10"
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
