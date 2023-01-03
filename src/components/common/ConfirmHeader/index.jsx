import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import darkModeArrowIcon from '../../../assets/icon/icon-arrow-left-grey.png';
import { SMALL_BUTTON } from '../../../constants/buttonStyle';

const SContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;

  width: 100%;
  padding: 0.825rem 1.6rem;

  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
  background-color: ${({ theme }) => theme.BACKGROUND};

  z-index: 100;
`;

const SButton = styled.button`
  border: none;
  flex-grow: 0;
  background-color: inherit;
  cursor: pointer;
  width: 2.2rem;

  &:disabled {
    cursor: default;
    background-color: ${({ theme }) => theme.DISABLED_BUTTON};
  }
`;

function ConfirmHeader({
  leftClick,
  rightClick,
  rightButtonText = '저장',
  buttonNotAllow,
}) {
  const theme = JSON.parse(localStorage.getItem('theme'));

  return (
    <SContainer>
      <SButton onClick={leftClick}>
        <img
          src={theme === 'dark' ? darkModeArrowIcon : arrowIcon}
          alt="뒤로가기"
        />
      </SButton>
      <Button
        onClick={rightClick}
        text={rightButtonText}
        buttonStyle={SMALL_BUTTON}
        disabled={buttonNotAllow}
      />
    </SContainer>
  );
}

export default ConfirmHeader;
