import React from 'react';
import styled, { css } from 'styled-components';

const SButton = styled.button`
  width: ${({ buttonStyle }) =>
    buttonStyle.width ? buttonStyle.width : '100%'};
  font-size: ${({ buttonStyle }) => buttonStyle.fontSize};
  padding: ${({ buttonStyle }) => buttonStyle.padding};
  background-color: ${({ theme }) => theme.BUTTON};
  color: #ffffff;
  border-radius: 1rem;

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.ACTIVE_BUTTON};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.DISABLED_BUTTON};
  }

  ${(type) =>
    type.cancel &&
    css`
      color: ${({ theme }) => theme.SUB_TEXT};
      background-color: ${({ theme }) => theme.BACKGROUND};
      border: 1px solid ${({ theme }) => theme.BORDER};

      &:active,
      &:hover {
        background-color: ${({ theme }) => theme.BUTTON};
        color: #ffffff;
      }
    `}
`;

function Button({ text, buttonStyle, onClick, disabled, ...type }) {
  return (
    <SButton
      {...type}
      buttonStyle={buttonStyle}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
    </SButton>
  );
}

export default Button;
