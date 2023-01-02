import React from 'react';

import * as S from './index.styles';

function PostSkeleton() {
  return (
    <S.SkeletonContainer>
      <S.UserContainer>
        <S.UserImage />
        <div>
          <S.UserName />
          <S.AccountName />
        </div>
      </S.UserContainer>
      <S.Content />
      <S.Images />
    </S.SkeletonContainer>
  );
}

export default PostSkeleton;
