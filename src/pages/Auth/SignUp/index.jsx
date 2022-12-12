import React from 'react';
import styled from 'styled-components';
import Title from '../../../components/Title';
import SignUpForm from '../../../components/Form/SignUpForm';

import leftIcon from '../../../assets/icon/icon-arrow-left.png';

const SContainer = styled.div`
  padding: 3.4rem;
  height: 100vh;
`;

const handleButtonClick = () => console.log('click');

function SignUp() {
  return (
    <SContainer>
      <Title leftIcon={leftIcon} handleButtonClick={handleButtonClick}>
        이메일로 회원가입
      </Title>
      <SignUpForm />
    </SContainer>
  );
}

export default SignUp;
