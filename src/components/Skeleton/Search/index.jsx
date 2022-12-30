import React from 'react';
import styled from 'styled-components';
import { loadingAnimation } from '../../../styles/Util';

const SkeletonContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem 0rem;
  padding: 0rem 1rem;
`;

const SkeletonImage = styled.div`
  ${loadingAnimation};

  min-width: 5rem;
  width: 5rem;
  min-height: 5rem;
  height: 5rem;

  border-radius: 50%;
  background-color: ${({ theme }) => theme.SEARCH_INPUT};
`;

const SkeletonInfo = styled.div`
  width: 100%;
  margin: 0 1.2rem;
`;

const SkeletonUserName = styled.div`
  ${loadingAnimation};

  display: inline-block;
  width: 4.2rem;
  height: 1.8rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.SEARCH_INPUT};
`;

const SkeletonAccountName = styled.div`
  ${loadingAnimation};

  display: inline-block;
  width: 4rem;
  height: 1.3rem;

  margin-left: 0.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.SEARCH_INPUT};
`;

const SkeletonIntro = styled.div`
  ${loadingAnimation};

  width: 100%;
  height: 1.8rem;

  padding-right: 7rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.SEARCH_INPUT};
`;

function SearchSkeleton() {
  return (
    <SkeletonContainer>
      <SkeletonImage />
      <SkeletonInfo>
        <SkeletonUserName />
        <SkeletonAccountName />
        <SkeletonIntro />
      </SkeletonInfo>
    </SkeletonContainer>
  );
}

export default SearchSkeleton;
