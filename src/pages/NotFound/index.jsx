import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button';
import { LARGE_BUTTON } from '../../constants/buttonStyle';
import ErrorImg from '../../assets/404_img.png';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 1rem;
`;

const SButton = styled(Button)`
  width: 25%;
`;

const Stext = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.SUB_TEXT};
`;

const SUploadedImg = styled.img`
  width: 22rem;
  object-fit: cover;
`;

function NotFound() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <SContainer>
      <SUploadedImg src={ErrorImg} />
      <Stext>페이지를 찾을 수 없습니다. :&#40; </Stext>
      <SButton onClick={goBack} buttonStyle={LARGE_BUTTON} text="이전 페이지" />
    </SContainer>
  );
}

export default NotFound;
