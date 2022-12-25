import styled from 'styled-components';

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 1rem;

  padding: 1rem;
  padding-bottom: 7rem;
`;

export const PostAlbum = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: minmax(11rem, 11rem);

  width: 100%;
  gap: 1rem;

  padding: 1rem;
  margin-bottom: 7rem;
`;
