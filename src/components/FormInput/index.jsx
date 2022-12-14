import React from 'react';
import styled, { css } from 'styled-components';
import { useRecoilState } from 'recoil';

const SContainer = styled.div``;

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.7rem;
  padding: 1.2rem 1.5rem;
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

  ${({ isValid }) =>
    isValid &&
    css`
      border: 1px solid ${({ theme }) => theme.color.RED};
    `}
`;

const WarningMessage = styled.p`
  color: ${({ theme }) => theme.color.RED};
  margin-top: 0.5rem;
  display: ${({ isEmail }) => (isEmail ? 'block' : 'none')};
`;

function FormInput({
  id,
  label,
  inputProps,
  warningMsg,
  handleSignUpState,
  onBlur,
}) {
  return (
    <SContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        {...inputProps}
        onChange={handleSignUpState}
        onBlur={onBlur}
      />
      <WarningMessage>{warningMsg}</WarningMessage>
    </SContainer>
  );
}

export default FormInput;
