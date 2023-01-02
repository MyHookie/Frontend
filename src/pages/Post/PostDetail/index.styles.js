import styled from 'styled-components';

import { IR } from '../../../styles/Util';

export const Contents = styled.section`
  margin-bottom: 7rem;
  padding-bottom: 7rem;
  font-size: 1.4rem;

  h2 {
    ${IR}
  }
`;

export const DividingLine = styled.div`
  height: 1px;
  margin: 0 1.6rem 1.8rem;
  background-color: ${({ theme }) => theme.BORDER};
`;
