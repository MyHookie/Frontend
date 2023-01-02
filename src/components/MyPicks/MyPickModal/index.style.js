import styled from 'styled-components';
import closeIcon from '../../../assets/icon/x.png';
import editIcon from '../../../assets/icon/icon-pen.png';
import deleteIcon from '../../../assets/icon/icon-delete.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  gap: 1rem;
  height: calc(100 + 4.4) vh;

  overflow-y: hidden;
`;

export const ModalBackGround = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 128;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-contents: center;
  gap: 1rem;
  width: 30rem;
  height: 50rem;
  padding: 2rem 1.6rem 2rem;
  background-color: ${({ theme }) => theme.BACKGROUND};

  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.LIGHT_TEXT};
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);

  animation: fadeIn 0.5s;
  z-index: 129;

  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const OptionContainer = styled.div`
  display: flex;
  position: absolute;
  top: 2rem;
  right: 1.6rem;
  gap: 1rem;
`;

// 스타일링을 위해 button에 font-family 임시 적용중

export const EditBtn = styled.button`
  font-family: 'LINESeedKR-Rg';
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};

  &::after {
    content: '';
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    filter: brightness(0.4);
    background: url(${editIcon});
    background-size: contain;
    background-position: 0 -1.7rem;
  }
`;
export const DeleteBtn = styled.button`
  font-family: 'LINESeedKR-Rg';
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};

  &::after {
    content: '';
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    filter: brightness(0.4);
    background: url(${deleteIcon});
    background-size: contain;
    background-position: 0 -1.7rem;
  }
`;

export const CloseModalBtn = styled.button`
  border: none;

  &::after {
    content: '';
    display: block;
    width: 2rem;
    height: 2rem;
    filter: brightness(0.4);
    background: url(${closeIcon});
    background-size: contain;
    background-position: 0 -1.7rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  height: 0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  z-index: 16;

  &::after {
    content: '';
    display: inline-block;
    height: 1px;
    width: 100%;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.LIGHT_TEXT};
  }
`;

export const MyPickItemImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 15;
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.LIGHT_TEXT};
  object-fit: cover;
`;

export const ModalTitle = styled.h2`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};
  cursor: default;
  pointer-events: none;
`;

export const ContentTitle = styled.h3`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};
`;

export const Contents = styled.p`
  margin: 0.3rem 0 0.2rem;
  width: 100%;
  font-size: 1.4rem;
  word-break: break-all;

  &::-webkit-scrollbar {
    display: none;
  }

  a {
    color: ${({ theme }) => theme.BUTTON};
    &:active {
      color: ${({ theme }) => theme.ACTIVE_BUTTON};
    }
  }
`;

export const TextContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.LIGHT_TEXT};
`;
