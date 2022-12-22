import styled from 'styled-components';

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
  padding: 4.2rem 1.6rem 1rem;
  background-color: ${({ theme }) => theme.color.WHITE};

  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.25);

  animation: fadeIn 0.5s;
  z-index: 140;

  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
  gap: 1rem;
  height: calc(100 + 4.4) vh;

  overflow-y: hidden;
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: 56.25%;
  height: 0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;

  &::after {
    content: '';
    display: inline-block;
    height: 1px;
    width: 100%;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

export const ImageInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  height: 100%;
  border-radius: 1.5rem;
  background-color: #f2f2f2;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  cursor: pointer;
`;

export const Imgtxt = styled.p`
  position: absolute;
  top: -3rem;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
  cursor: default;
  pointer-events: none;
`;

export const Label = styled.p`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;

export const Textarea = styled.p`
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

export const CloseModal = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.6rem;
  width: 1.8rem;

  border: none;

  img {
    filter: brightness(0.4);
  }
`;
