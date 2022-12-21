import styled from 'styled-components';
import uploadIconGrey from '../../assets/upload-file_grey.png';

export const Container = styled.main`
  height: calc(100 + 4.4) vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6.2rem 3.4rem 0;
  gap: 1.6rem;
`;
export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 1.2rem;
    bottom: 2.2rem;
    width: 4rem;
    height: 4rem;
    background-image: url(${uploadIconGrey});
    background-size: cover;
  }
`;
export const ImageInput = styled.div`
  height: 20.4rem;
  width: 32.2rem;
  flex: 0 0 auto;
  font-size: 3.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.5rem;
  background-color: #f2f2f2;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;
export const imgtxt = styled.p`
  position: absolute;
  top: -3rem;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;
export const label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;
export const textarea = styled.textarea`
  display: block;
  margin-top: 10px;
  width: 32.2rem;
  height: 25px;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;
