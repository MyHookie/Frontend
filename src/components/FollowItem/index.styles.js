import styled from 'styled-components';

import Button from '../common/Button';

import { slEllipsis } from '../../styles/Util';

export const Content = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`;

export const UserInfo = styled.div`
  width: 65%;
  margin: 0 1.2rem;
`;

export const Img = styled.img`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserId = styled.p`
  flex: 4 4 0;
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
`;

export const AccountName = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.SUB_TEXT};
`;

export const UserIntroduction = styled.p`
  flex: 4 4 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};
  ${slEllipsis}
`;

export const CommonButton = styled(Button)`
  flex: 1 1 0;
  line-height: 1.4rem;
  white-space: nowrap;
`;
