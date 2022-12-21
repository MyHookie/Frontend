import styled from 'styled-components';
import uploadIcon from '../../assets/upload-file.png';

export const Container = styled.div`
  position: relative;
  margin: 2rem 0 3rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 2rem;
    right: 7rem;
    width: 4rem;
    height: 4rem;
    background-image: url(${uploadIcon});
    background-size: cover;
  }
`;

export const ImageInput = styled.img`
  display: block;
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
`;
