import styled from 'styled-components';

export const Container = styled.div`
  height: calc(100 + 4.4) vh;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const MoreView = styled.p`
  text-align: center;
  margin-bottom: 8rem;

  font-size: 1.4rem;
  color: #2d7cef;
`;

export const Message = styled.p`
  text-align: center;
  margin-top: 1rem;

  font-size: 1.4rem;
`;
