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
  font-size: 1.4rem;
  color: ${({ theme }) => theme.SUB_TEXT};
`;

export const JoinButton = styled(Button)`
  margin-top: 2.5rem;
`;
