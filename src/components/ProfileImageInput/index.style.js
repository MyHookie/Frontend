import styled from 'styled-components';
import uploadIcon from '../../assets/upload-file.png';

export const Container = styled.div`
  position: relative;
  margin: 2rem 0 3rem;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4rem;
    height: 4rem;
    background-image: url(${uploadIcon});
    background-size: cover;
    cursor: pointer;
  }
`;

export const ImageInput = styled.img`
  display: block;
  width: 12rem;
  height: 12rem;
  margin: 0 auto;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
