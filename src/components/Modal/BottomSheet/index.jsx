import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
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
  padding-bottom: 0.5rem;
  background: ${({ theme }) => theme.color.WHITE};

  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  transform: translate(-50%);

  animation: fadeIn 0.5s;
  z-index: 120;

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
`;

const SCloseModal = styled.button`
  width: 2rem;
  margin: 1.5rem 2rem 0.5rem 0rem;

  border: none;

  img {
    filter: brightness(0.4);
  }
`;

function BottomSheet({ handleClose, children }) {
  return (
    <>
      {createPortal(
        <>
          <ModalBackGround onClick={handleClose} />
          <SBottomSheet>
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
