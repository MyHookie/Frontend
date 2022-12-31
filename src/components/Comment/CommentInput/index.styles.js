import styled from 'styled-components';

import { IR } from '../../../styles/Util';

export const Contents = styled.section`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2.3rem 1.6rem 2rem;
  background-color: ${({ theme }) => theme.BACKGROUND};
  border-top: 0.05rem solid ${({ theme }) => theme.BORDER};

  h2 {
    ${IR}
  }
`;

export const ProfileImg = styled.img`
  position: absolute;
  left: 1.6rem;
  bottom: 1.2rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const Label = styled.label`
  ${IR}
`;

export const InputForm = styled.textarea`
  width: 70%;
  margin: 0 1.8rem;
  padding: 0;
  border-style: none;
  font-size: 1.4rem;
  background-color: inherit;
  color: ${({ theme }) => theme.TEXT};

  &::placeholder {
    font-size: 1.3rem;
    color: ${({ theme }) => theme.LIGHT_TEXT};
    vertical-align: top;
  }
`;

export const Button = styled.button`
  position: absolute;
  right: 1.6rem;
  bottom: 2.1rem;
  width: 2.5rem;
  font-size: 1.4rem;
  white-space: nowrap;
  color: ${({ theme, contentLength }) =>
    contentLength === 0 ? theme.LIGHT_TEXT : theme.BUTTON};
`;
