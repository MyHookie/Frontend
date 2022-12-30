import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

function checkValid(signUpValid, profileValid, inputValue, isCorrect) {
  if (inputValue?.length === 0) {
    return css`
      border: 1px solid ${({ theme }) => theme.BORDER};
    `;
  }

  if (!signUpValid && !profileValid && inputValue?.length > 0 && !isCorrect) {
    return css`
      border: 1px solid ${({ theme }) => theme.ERROR_BORDER};
    `;
  }

  return css`
    border: 1px solid ${({ theme }) => theme.ACTIVE_BORDER};
  `;
}

const SContainer = styled.div``;

const Label = styled.label`
  font-size: 1.4rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin-top: 0.7rem;
  padding: 1.2rem 1.5rem;
  border: 1px solid ${({ theme }) => theme.BORDER};
  border-radius: 1rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.TEXT};
  background-color: ${({ theme }) => theme.AUTH_INPUT};

  &::placeholder {
    color: ${({ theme }) => theme.SUB_TEXT};
  }

  ${({ signUpValid, profileValid, inputValue, isCorrect }) =>
    checkValid(signUpValid, profileValid, inputValue, isCorrect)}
`;

const WarningMessage = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.ERROR_TEXT};
  margin-top: 0.5rem;
`;

function AuthInputForm({
  id,
  label,
  inputProps,
  warningMsg,
  handleSignUpState,
  handleLoginState,
  handleProfileState,
  inputValue,
  signUpValid,
  profileValid,
  isCorrect,
  inputRef,
  edit,
}) {
  const location = useLocation();

  const setState = (e) => {
    if (location.pathname === '/signup') {
      handleSignUpState(e);
    }
    if (location.pathname === '/login') {
      handleLoginState(e);
    }
    if (
      location.pathname === '/signup/profile' ||
      location.pathname === '/profile/edit'
    ) {
      handleProfileState(e);
    }
  };

  return (
    <SContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        {...inputProps}
        ref={inputRef}
        value={inputValue}
        inputValue={inputValue}
        signUpValid={signUpValid}
        profileValid={profileValid}
        isCorrect={isCorrect}
        onChange={setState}
        onKeyDown={setState}
        disabled={edit}
      />
      {!signUpValid && !profileValid && inputValue?.length > 0 && (
        <WarningMessage>{warningMsg}</WarningMessage>
      )}
      {isCorrect && <WarningMessage>{warningMsg}</WarningMessage>}
    </SContainer>
  );
}

export default AuthInputForm;
