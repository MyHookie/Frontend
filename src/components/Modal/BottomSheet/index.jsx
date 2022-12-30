import React from 'react';
import { createPortal } from 'react-dom';
import styled, { css } from 'styled-components';
import closeIcon from '../../../assets/icon/x.png';

const ModalBackGround = styled.div`
  position: fixed;
  top: 0px;

  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);

  left: 0px;
  z-index: 110;
`;

const SBottomSheet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: fixed;
  bottom: 0px;
  left: 50%;

  width: 100%;
  padding: 1.5rem 2rem 1.5rem 2rem;
  gap: 1rem;
  background: ${({ theme }) => theme.BACKGROUND};

  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  transform: translate(-50%);

  z-index: 120;

  ${({ bottomSheetTrigger }) =>
    bottomSheetTrigger
      ? css`
          animation: fadeIn 0.5s;
        `
      : css`
          animation: fadeOut 0.5s;
        `}

  @keyframes fadeIn {
    from {
      bottom: -3rem;
      opacity: 0;
    }
    to {
      bottom: 0rem;
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      bottom: 0rem;
      opacity: 1;
    }
    to {
      bottom: -3rem;
      opacity: 0;
    }
  }
`;

const SCloseModal = styled.button`
  width: 2rem;

  border: none;

  img {
    filter: brightness(0.4);
  }
`;

function BottomSheet({ handleClose, children, bottomSheetTrigger }) {
  return (
    <>
      {createPortal(
        <>
          <ModalBackGround onClick={handleClose} />

          <SBottomSheet bottomSheetTrigger={bottomSheetTrigger}>
            <SCloseModal onClick={handleClose}>
              <img src={closeIcon} alt="모달창 닫기" />
            </SCloseModal>
            {children}
          </SBottomSheet>
        </>,

        document.getElementById('bottomSheet-modal')
      )}
    </>
  );
}

export default BottomSheet;
