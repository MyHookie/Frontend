import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3.4rem;
  height: 100vh;
`;

export const SubText = styled.p`
  margin: 0.5rem 0;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.GRAY};
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  width: 100%;
`;

export const IntroFormContainer = styled.div``;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

export const IntroContent = styled.textarea`
  display: block;
  width: 100%;
  margin-top: 0.7rem;
  padding: 1.2rem 1.5rem;
  word-wrap: break-word;
  font-family: Arial;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.DARK_GRAY};

  ${({ value }) =>
    value.length > 0 &&
    css`
      border: 1px solid ${({ theme }) => theme.color.ACTIVE_BLUE};
    `}

  &::placeholder {
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;
