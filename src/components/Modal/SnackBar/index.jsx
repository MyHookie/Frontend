import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const SContainer = styled.div`
  min-width: 30rem;
  height: 5rem;
  border-radius: 0.7rem;
  font-size: 1.1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: ${({ theme }) => theme.color.WHITE};

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);

  animation: fade 2s;
  z-index: 100;

  @keyframes fade {
    0% {
      bottom: 10px;
      opacity: 0;
    }
    40% {
      bottom: 50px;
      opacity: 1;
    }
    60% {
      bottom: 50px;
      opacity: 1;
    }
    100% {
      bottom: 10px;
      opacity: 0;
    }
  }
`;

function Snackbar({ content }) {
  return (
    <>
      {createPortal(
        <SContainer>{content}</SContainer>,
        document.getElementById('snackbar-modal')
      )}
    </>
  );
}

export default Snackbar;
