import React from 'react';
import styled from 'styled-components';

const SContainer = styled.header`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 1rem 0;
  font-family: 'LINESeedKR-Rg';
`;

const SBackButton = styled.button`
  width: 2.2rem;
  cursor: pointer;
`;

const STitle = styled.h1`
  font-size: 2rem;
  flex-grow: 1;
`;

function Title({ children, leftIcon, handleButtonClick }) {
  return (
    <SContainer>
      {leftIcon && (
        <SBackButton type="button" onClick={handleButtonClick}>
          <img src={leftIcon} alt="뒤로가기" />
        </SBackButton>
      )}
      <STitle>{children}</STitle>
    </SContainer>
  );
}

export default Title;
