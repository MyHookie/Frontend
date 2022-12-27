import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../../components/common/Button';

export const Container = styled.div`
  padding: 3.4rem;
  height: 100vh;
`;

export const FormContainer = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

export const LoginButton = styled(Button)`
  margin-top: 5rem;
`;

export const Link = styled(Link)`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.color.GRAY};
  margin-top: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;
