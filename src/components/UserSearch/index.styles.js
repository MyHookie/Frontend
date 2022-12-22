import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100 + 4.4) vh;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

export const MoreView = styled.p`
  text-align: center;
  margin-bottom: 8rem;

  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.ACTIVE_BLUE};
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 1rem;

  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;
