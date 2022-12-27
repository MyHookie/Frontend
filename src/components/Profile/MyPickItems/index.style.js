import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding-top: 2rem;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

export const Title = styled.p`
  margin-left: 1.6rem;
`;

export const Items = styled.ul`
  display: flex;
  gap: 1rem;
  padding: 2rem 1.6rem;

  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Item = styled.li`
  flex-shrink: 0;
  max-width: 14rem;
`;

export const ImgContainer = styled.div`
  width: 14rem;
  height: 9rem;
  background-color: aqua;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
`;

export const Img = styled.img``;

export const ItemTitle = styled.p`
  margin-top: 0.5rem;
`;

export const ItemPrice = styled.p`
  margin-top: 0.5rem;
`;
