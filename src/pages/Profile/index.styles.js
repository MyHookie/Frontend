import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  gap: 0.6rem;

  background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

export const PostContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

export const PostTypeContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  padding: 1rem 1.5rem;
  gap: 2rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;

export const PostTypeButton = styled.button`
  width: 2.5rem;
`;

export const EmptyContainer = styled.div`
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
