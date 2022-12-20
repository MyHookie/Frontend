import styled from 'styled-components';

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

export const ImageContainer = styled.div`
  background-color: lightblue;
`;

export const ProfileImg = styled.img``;
