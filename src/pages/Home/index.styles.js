import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100 + 4.4) vh;
`;

export const EmptyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;

  button {
    width: 12rem;
  }
`;

export const EmptyImage = styled.img`
  width: 20rem;
  margin-bottom: 2.6rem;
`;

export const EmptyContent = styled.p`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.SUB_TEXT};
  margin-bottom: 2rem;
`;

export const PostSkeletonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  padding: 1rem;
  gap: 1rem;
`;
