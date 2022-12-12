import React from 'react';
import styled from 'styled-components';

const SButton = styled.button`
  width: 100%;
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
    cursor: default;
    background-color: ${({ theme }) => theme.color.DISABLED_BLUE};
  }
`;

function Button({ text, buttonStyle, onClick, disabled }) {
  return (
    <SButton buttonStyle={buttonStyle} disabled={disabled} onClick={onClick}>
      {text}
    </SButton>
  );
}

export default Button;
