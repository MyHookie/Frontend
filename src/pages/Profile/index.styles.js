import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  gap: 0.6rem;

  background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

export const EmptyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.color.WHITE};

  padding: 3rem 0rem 10rem 0rem;

  button {
    width: 12rem;
  }
`;

export const EmptyImage = styled.img`
  width: 20rem;
  margin-bottom: 2.6rem;
`;

export const EmptyContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.GRAY};
  margin-bottom: 2rem;
`;
