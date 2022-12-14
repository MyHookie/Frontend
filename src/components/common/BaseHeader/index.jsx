import React from 'react';
import styled from 'styled-components';

const SContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;

  width: 100%;
  padding: 0.75rem 1.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  background-color: ${({ theme }) => theme.color.WHITE};

  z-index: 100;
`;

const SButton = styled.button`
  border: none;
  flex-grow: 0;
  background-color: inherit;
  cursor: pointer;
  width: 2.2rem;
  margin: 0.5rem 0rem;
`;

const STitle = styled.p`
  text-align: center;
  font-size: 1.4rem;
`;

const SImage = styled.img`
  width: 8rem;
`;

function BaseHeader({
  leftIcon,
  leftClick,
  rightIcon,
  rightClick,
  rightAlt,
  title,
  image,
}) {
  return (
    <SContainer>
      {leftIcon && (
        <SButton onClick={leftClick}>
          <img src={leftIcon} alt="뒤로가기" />
        </SButton>
      )}
      {title && <STitle>{title}</STitle>}
      {image && <SImage src={image} alt="로고이미지" />}
      {rightIcon ? (
        <SButton onClick={rightClick}>
          <img src={rightIcon} alt={rightAlt} />
        </SButton>
      ) : (
        <SButton />
      )}
    </SContainer>
  );
}

export default BaseHeader;
