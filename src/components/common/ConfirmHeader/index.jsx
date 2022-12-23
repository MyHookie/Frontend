import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import { SMALL_BUTTON } from '../../../constants/buttonStyle';

const SContainer = styled.header`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;

  width: 100%;
  padding: 0.825rem 1.6rem;

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
`;

function ConfirmHeader({ leftClick, rightClick, rightButtonText = '저장' }) {
  return (
    <SContainer>
      <SButton onClick={leftClick}>
        <img src={arrowIcon} alt="뒤로가기" />
      </SButton>
      <Button
        onClick={rightClick}
        text={rightButtonText}
        buttonStyle={SMALL_BUTTON}
      />
    </SContainer>
  );
}

export default ConfirmHeader;
