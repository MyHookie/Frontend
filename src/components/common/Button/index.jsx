import React from 'react';
import styled, { css } from 'styled-components';

const SButton = styled.button`
  width: ${({ buttonStyle }) =>
    buttonStyle.width ? buttonStyle.width : '100%'};
  font-size: ${({ buttonStyle }) => buttonStyle.fontSize};
  padding: ${({ buttonStyle }) => buttonStyle.padding};
  background-color: ${({ theme }) => theme.color.LIGHT_BLUE};
  color: ${({ theme }) => theme.color.WHITE};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};

  &:active,
  &:hover {
    background-color: ${({ theme }) => theme.color.ACTIVE_BLUE};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.color.DISABLED_BLUE};
  }

  ${(type) =>
    type.cancel &&
    css`
      color: ${({ theme }) => theme.color.GRAY};
      background-color: ${({ theme }) => theme.color.WHITE};
      border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};

      &:active,
      &:hover {
        background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
        color: ${({ theme }) => theme.color.WHITE};
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
