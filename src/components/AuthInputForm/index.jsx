import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

function checkValid(signUpValid, inputValue) {
  if (inputValue?.length === 0) {
    return css`
      border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
    `;
  }

  if (!signUpValid && inputValue?.length > 0) {
    return css`
      border: 1px solid ${({ theme }) => theme.color.RED};
    `;
  }

  return css`
    border: 1px solid ${({ theme }) => theme.color.ACTIVE_BLUE};
  `;
}

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

  ${({ signUpValid, inputValue }) => checkValid(signUpValid, inputValue)}
`;

const WarningMessage = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.color.RED};
  margin-top: 0.5rem;
`;

function AuthInputForm({
  id,
  label,
  inputProps,
  warningMsg,
  handleSignUpState,
  handleLoginState,
  signUpValid,
  inputValue,
}) {
  const location = useLocation();

  const setState = (e) => {
    if (location.pathname === '/signup') {
      handleSignUpState(e);
    }
    if (location.pathname === '/login') {
      handleLoginState(e);
    }
  };

  return (
    <SContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        {...inputProps}
        inputValue={inputValue}
        signUpValid={signUpValid}
        onChange={setState}
        onKeyDown={setState}
      />
      {!signUpValid && inputValue?.length > 0 && (
        <WarningMessage>{warningMsg}</WarningMessage>
      )}
    </SContainer>
  );
}

export default AuthInputForm;
