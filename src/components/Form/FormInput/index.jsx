import React from 'react';
import styled, { css } from 'styled-components';

const SLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const SInput = styled.input`
  display: block;
  width: 100%;
  margin: 0.7rem 0 4rem;
  padding: 1.2rem 2rem;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.DARK_GRAY};

  &::placeholder {
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.ACTIVE_BLUE};
  }

  ${({ isValide }) =>
    isValide &&
    css`
      border: 1px solid ${({ theme }) => theme.color.RED};
    `}
`;

function FormInput({ id, label, inputProps }) {
  return (
    <>
      <SLabel htmlFor={id}>{label}</SLabel>
      <SInput id={id} {...inputProps} />
    </>
  );
}

export default FormInput;
