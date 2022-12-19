import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const ModalBackGround = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  z-index: 130;
`;

const SDialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  top: 50%;
  left: 50%;

  width: 26rem;
  height: 13rem;
  background: #ffffff;
  box-shadow: 0rem 0.1rem 0.7rem rgba(0, 0, 0, 0.25);
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  transform: translate(-50%, -50%);

  z-index: 140;
`;

const SDialogInfo = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0rem 3rem;

  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.DARK_GRAY};
`;

const SButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SButton = styled.button`
  flex-grow: 1;
  padding: 1.5rem 0rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border-top: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};

  background-color: inherit;
  color: ${({ theme }) => theme.color.DARK_GRAY};

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
    color: ${({ theme }) => theme.color.RED};
  }
`;

function Dialog({ handleClose, handleSubmit, dialogText }) {
  return (
    <>
      {createPortal(
        <>
          <ModalBackGround onClick={handleClose} />
          <SDialog>
            <SDialogInfo>{dialogText}</SDialogInfo>
            <SButtonContainer>
              <SButton onClick={handleSubmit}>확인</SButton>
              <SButton onClick={handleClose}>취소</SButton>
            </SButtonContainer>
          </SDialog>
        </>,
        document.getElementById('dialog-modal')
      )}
    </>
  );
}

export default Dialog;
