import styled from 'styled-components';
import { slEllipsis } from '../../../styles/Util';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem 0rem;
  padding: 0rem 1rem;
`;

export const UserImage = styled.img`
  min-width: 5rem;
  width: 5rem;
  min-height: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserInfo = styled.div`
  width: 100%;
  margin: 0 1.2rem;
`;

export const UserName = styled.p`
  display: inline-block;
  font-size: 1.4rem;

  strong {
    color: #2d7cef;
  }
`;

export const UserAccountName = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.SUB_TEXT};
`;

export const UserIntro = styled.p`
  ${slEllipsis};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};
  padding-right: 7rem;
`;
