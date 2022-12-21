import styled from 'styled-components';
import Button from '../../../components/common/Button';

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

export const JoinButton = styled(Button)``;
