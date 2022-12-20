import styled from 'styled-components';
import uploadIcon from '../../assets/upload-file.png';

export const Container = styled.div`
  margin: 2rem 0 3rem;
  width: 100%;
`;

export const ImageInput = styled.div`
  position: relative;
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4rem;
    height: 4rem;
    background-image: url(${uploadIcon});
    background-size: cover;
  }
`;
