import styled from 'styled-components';
import uploadIconGrey from '../../assets/upload-file_grey.png';
import { IR } from '../../styles/Util';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: calc(100 + 4.4) vh;
  padding: 6.2rem 3.4rem 3rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 100%;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  cursor: pointer;
`;
export const ImageInput = styled.div`
  display: flex;
  flex: 0 0 auto;
  width: 100%;
  height: 20.4rem;
  border-radius: 1.5rem;
  background-color: #f2f2f2;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
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

// textarea, label에 fontfamily 임시 적용중

export const Textarea = styled.textarea`
  font-family: 'LINESeedKR-Rg';
  display: block;
  margin-top: 0.3rem;
  width: 100%;
  height: 25px;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    font-family: 'LINESeedKR-Rg';
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

export const LabelCheckBox = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  width: 30%;
  user-select: none;
  cursor: default;
  font-family: 'LINESeedKR-Rg';
  letter-spacing: -0.3px;

  &::before {
    display: block;
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    border: 2px solid gainsboro;
    border-radius: 0.35rem;
  }
  &::after {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: block;
    opacity: 0;
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid transparent;
    border-radius: 0.35rem;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.color.ACTIVE_BLUE};
  }
`;

export const Checkbox = styled.input`
  ${IR}
  &:checked + ${LabelCheckBox} {
    ::after {
      opacity: 1;
    }
  }
`;

export const StyledP = styled.p`
  margin-left: 0.5rem;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;
