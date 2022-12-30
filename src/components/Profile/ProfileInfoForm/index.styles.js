import styled, { css } from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
`;

export const IntroFormContainer = styled.div``;

export const Label = styled.label`
  font-size: 1.4rem;
`;

export const IntroContent = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 0.7rem;
  padding: 1.2rem 1.5rem;
  word-wrap: break-word;
  font-family: Arial;
  border: 1px solid ${({ theme }) => theme.BORDER};
  border-radius: 1rem;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.TEXT};

  &::placeholder {
    color: ${({ theme }) => theme.SUB_TEXT};
  }

  ${({ value }) =>
    value.length > 0 &&
    css`
      border: 1px solid ${({ theme }) => theme.ACTIVE_BORDER};
    `}
`;
