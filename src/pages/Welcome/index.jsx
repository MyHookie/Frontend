import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/common/Button/index';
import { EXTRA_LARGE_BUTTON } from '../../constants/buttonStyle';

import Logo from '../../assets/logo.png';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  height: 100vh;
  padding: 3rem;

  & Button:last-child {
    background-color: ${({ theme }) => theme.color.DARK_GRAY};
  }
  & Button:last-child:hover {
    background-color: #444444;
  }
`;

const SLogo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`;

function Welcome() {
  const navigate = useNavigate();

  const handleToSignup = () => {
    navigate('/signup');
  };

  const handleToLogin = () => {
    navigate('/login');
  };

  return (
    <SContainer>
      <SLogo src={Logo} alt="후키 로고" />
      <Button
        buttonStyle={EXTRA_LARGE_BUTTON}
        text="회원가입"
        onClick={handleToSignup}
      />
      <Button
        buttonStyle={EXTRA_LARGE_BUTTON}
        text="이메일로 로그인"
        onClick={handleToLogin}
      />
    </SContainer>
  );
}

export default Welcome;
