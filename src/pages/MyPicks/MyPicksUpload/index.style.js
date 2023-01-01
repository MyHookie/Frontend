import styled from 'styled-components';
import uploadIconGrey from '../../../assets/upload-file_grey.png';
import uploadIcon from '../../../assets/upload-file.png';
import { IR } from '../../../styles/Util';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: calc(100 + 4.4) vh;
  padding: 6.2rem 3.4rem 3rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  padding-top: 64.29%;
  height: 0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  background-color: #f2f2f2;
  border-radius: 1.5rem;

  &::after {
    content: '';
    display: inline-block;
    height: 1px;
    width: 100%;
    margin-top: 2rem;
    background-color: ${({ theme }) => theme.LIGHT_TEXT};
  }
`;
export const ImageInput = styled.div`
  display: flex;
  flex: 0 0 auto;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 99;
  height: 100%;
  border: 1px solid ${({ theme }) => theme.LIGHT_TEXT};
  border-radius: 1.5rem;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    right: 1.2rem;
    bottom: 1.2rem;
    z-index: 99;
    width: 4rem;
    height: 4rem;
    background-image: url(${uploadIconGrey});
    background-size: cover;
  }

  &:active {
    &::after {
      content: '';
      position: absolute;
      right: 1.2rem;
      bottom: 1.2rem;
      z-index: 99;
      width: 4rem;
      height: 4rem;
      background-image: url(${uploadIcon});
      background-size: cover;
    }
  }
`;

export const Imgtxt = styled.p`
  position: absolute;
  top: -3rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};
  cursor: default;
  &::after {
    content: ${(props) => (props.isCorrect ? '' : '*필수 입력사항입니다')};
    color: #ff5656;
    margin-left: 0.6rem;
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};

  &::after {
    content: ${(props) => (props.isCorrect ? '' : '*필수 입력사항입니다')};
    color: #ff5656;
    margin-left: 0.6rem;
  }
`;

export const img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 15;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

// textarea, label에 fontfamily 임시 적용중

export const Textarea = styled.textarea`
  font-family: 'LINESeedKR-Rg';
  display: block;
  margin-top: 0.3rem;
  width: 100%;
  height: 25px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.TEXT};
  border-bottom: 1px solid ${({ theme }) => theme.BORDER};

  background-color: transparent;

  &::-webkit-scrollbar {
    display: none;
  }
  &::placeholder {
    font-family: 'LINESeedKR-Rg';
    color: ${({ theme }) => theme.LIGHT_TEXT};
  }
  &:read-only {
    background: ${({ theme }) => theme.READ_ONLY};
    color: ${({ theme }) => theme.READ_ONLY};
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
    background-color: ${({ theme }) => theme.ACTIVE_BUTTON};
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
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};
`;

export const WarningMsg = styled.p`
  position: absolute;
  top: 8rem;
  right: 3.4rem;
  color: ${({ theme }) => theme.ERROR_BORDER};
  margin-right: 0.5rem;
  font-size: 1.2rem;
`;
