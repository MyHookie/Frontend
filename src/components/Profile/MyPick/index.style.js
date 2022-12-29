import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding-top: 2rem;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

export const Title = styled.p`
  font-size: 1.6rem;
  margin-left: 1.6rem;
`;

export const Items = styled.ul`
  display: flex;
  gap: 1rem;
  min-width: 0;
  padding: 2rem 1.6rem;

  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;
