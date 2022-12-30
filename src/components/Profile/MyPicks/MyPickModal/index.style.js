import styled from 'styled-components';

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
  z-index: 130;
`;

export const ModalContainer = styled.div`
  position: fixed;
  top: 4rem;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  gap: 1rem;
  width: 30rem;
  height: 50rem;
  padding: 2rem 1.6rem 2rem;
  background-color: ${({ theme }) => theme.color.WHITE};

  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);

  animation: fadeIn 0.5s;
  z-index: 140;

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
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;
export const DeleteBtn = styled.button`
  font-family: 'LINESeedKR-Rg';
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;

export const CloseModalBtn = styled.button`
  width: 1.8rem;
  border: none;
  vertical-align: bottom;
  img {
    filter: brightness(0.4);
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
    background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

export const MyPickItemImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  z-index: 15;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  object-fit: cover;
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
  cursor: default;
  pointer-events: none;
`;

export const ContentTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;

export const Contents = styled.p`
  margin: 0.3rem 0 0.2rem;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TextContainer = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;
