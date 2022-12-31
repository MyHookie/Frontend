import styled from 'styled-components';

import { IR } from '../../../styles/Util';

export const PostDetail = styled.div`
  padding-bottom: 12rem;
`;

export const Contents = styled.section`
  font-size: 1.4rem;

  h2 {
    ${IR}
  }
`;

export const DividingLine = styled.div`
  height: 1px;
  margin: 2.2rem 1.6rem;
  background-color: ${({ theme }) => theme.BORDER};
`;
