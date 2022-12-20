import React from 'react';
import styled from 'styled-components';

import { FOLLOW_BUTTON } from '../../../constants/buttonStyle';
import Button from '../../common/Button';

const SContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0rem;
  padding: 0rem 1rem;

  &:last-child {
    margin-bottom: 5rem;
  }
`;

const SUserImage = styled.img`
  width: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
`;

const SUserInfo = styled.div`
  width: 65%;
  margin: 0 1.2rem;
`;

const SUserName = styled.p`
  flex: 4 4 0;
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
`;

const SUserAccountName = styled.p`
  flex: 4 4 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.GRAY};
`;

const SButton = styled(Button)`
  flex: 1 1 0;
  white-space: nowrap;
`;

function SearchedUser({ image, username, accountname, isfollow }) {
  return (
    <SContent>
      <SUserImage src={image} alt="프로필 이미지" />
      <SUserInfo>
        <SUserName>{username}</SUserName>
        <SUserAccountName>{accountname}</SUserAccountName>
      </SUserInfo>
      {isfollow ? (
        <SButton buttonStyle={FOLLOW_BUTTON} text="취소" />
      ) : (
        <SButton buttonStyle={FOLLOW_BUTTON} text="팔로우" />
      )}
    </SContent>
  );
}

export default SearchedUser;
