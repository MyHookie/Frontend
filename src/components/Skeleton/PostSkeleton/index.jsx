import React from 'react';
import styled from 'styled-components';
import { loadingAnimation } from '../../../styles/Util';

const SkeletonContainer = styled.div`
  width: 100%;

  padding: 1.8rem;

  border: 1px solid ${({ theme }) => theme.ACTIVE_INPUT};
  border-radius: 1rem;
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.5rem;
  gap: 1.4rem;
`;

const UserImage = styled.div`
  ${loadingAnimation};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.ACTIVE_INPUT};
`;

const UserName = styled.div`
  ${loadingAnimation};
  width: 7rem;
  height: 1.8rem;
  margin-bottom: 1rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.ACTIVE_INPUT};
`;
const AccountName = styled.div`
  ${loadingAnimation};
  width: 8rem;
  height: 1.3rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.ACTIVE_INPUT};
`;

const Content = styled.div`
  ${loadingAnimation};
  height: 10rem;

  margin-bottom: 0.5rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.ACTIVE_INPUT};
`;

const Images = styled.div`
  ${loadingAnimation};
  height: 20rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.ACTIVE_INPUT};
`;

function PostSkeleton() {
  return (
    <SkeletonContainer>
      <UserContainer>
        <UserImage />
        <div>
          <UserName />
          <AccountName />
        </div>
      </UserContainer>
      <Content />
      <Images />
    </SkeletonContainer>
  );
}

export default PostSkeleton;
