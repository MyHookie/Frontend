import React from 'react';

import * as S from './index.styles';

function SearchSkeleton() {
  return (
    <S.SkeletonContainer>
      <S.SkeletonImage />
      <S.SkeletonInfo>
        <S.SkeletonUserName />
        <S.SkeletonAccountName />
        <S.SkeletonIntro />
      </S.SkeletonInfo>
    </S.SkeletonContainer>
  );
}

export default SearchSkeleton;
