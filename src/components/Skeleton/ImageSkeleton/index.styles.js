import styled from 'styled-components';
import { loadingAnimation } from '../../../styles/Util';

export const ImageSkeleton = styled.div`
  ${loadingAnimation}
  height: 100%;
  width: 10.4rem;

  flex: 0 0 auto;

  border-radius: 1.5rem;
`;
