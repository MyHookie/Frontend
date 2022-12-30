import styled from 'styled-components';
import { slEllipsis } from '../../../styles/Util';

export const Item = styled.li`
  flex-shrink: 0;
  font-size: 1.4rem;
  width: 14rem;
  white-space: nowrap;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  position: relative;
  padding-top: 64.29%;
  height: 0;
  background-color: ${({ theme }) => theme.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.LIGHT_TEXT};
  border-radius: 1rem;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;

export const ItemTitle = styled.p`
  width: 14rem;
  margin-top: 0.5rem;
  ${slEllipsis}
`;

export const ItemPrice = styled.p`
  margin-top: 0.5rem;
  font-family: 'LINESeedKR-Bd';
  font-size: 1.2rem;
  color: ${({ theme }) => theme.ACTIVE_BUTTON};
`;
