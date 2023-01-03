import styled from 'styled-components';

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  background-color: ${({ theme }) => theme.BACKGROUND};
`;

export const PostTypeContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 1rem 1.5rem;
  gap: 2rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.BORDER};
  margin-bottom: 1rem;
`;

export const PostTypeButton = styled.button`
  width: 2.5rem;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-color: ${({ theme }) => theme.BACKGROUND};

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
