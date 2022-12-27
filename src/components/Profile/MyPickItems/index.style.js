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

//   ellipsis 적용 안되는 오류
export const Item = styled.li`
  flex-shrink: 0;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  width: 14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ImgContainer = styled.div`
  position: relative;
  padding-top: 64.29%;
  height: 0;
  background-color: ${({ theme }) => theme.color.WHITE};
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
`;

export const ItemTitle = styled.p`
  width: 14rem;
  margin-top: 0.5rem;
`;

export const ItemPrice = styled.p`
  margin-top: 0.5rem;
  font-family: 'LINESeedKR-Bd';
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.ACTIVE_BLUE};
`;
