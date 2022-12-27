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

export const JoinButton = styled(Button)`
  margin-top: 2.5rem;
`;
