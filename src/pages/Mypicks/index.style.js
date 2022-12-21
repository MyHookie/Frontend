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
export const Imgtxt = styled.p`
  position: absolute;
  top: -3rem;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
  cursor: default;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;
export const Textarea = styled.textarea`
  display: block;
  margin-top: 10px;
  width: 32.2rem;
  height: 25px;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;

export const LabelCheckBox = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  width: 30%;
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 1.5rem;
  height: 1.5rem;
  border: 1.5px solid gainsboro;
  border-radius: 0.35rem;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.color.ACTIVE_BLUE};
  }
`;

export const StyledP = styled.p`
  margin-left: 0.5rem;
`;
