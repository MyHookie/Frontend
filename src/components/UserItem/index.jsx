import React from 'react';
import styled from 'styled-components';

import { slEllipsis } from '../../styles/Util';

const SContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.6rem;
`;

const SUserInfo = styled.div`
  width: 65%;
  margin: 0 1.2rem;
`;

const SUserInfoActive = styled.div`
  width: 65%;
  margin: 0 1.2rem;
  &::before {
    content: '';
    z-index: 99;
    position: absolute;
    left: 1.6rem;
    width: 1.2rem;
    height: 1.2rem;
    background-color: ${({ theme }) => theme.color.ACTIVE_BLUE};
    border-radius: ${({ theme }) => theme.borderRadius.ROUND};
  }
`;

const SImg = styled.img`
  position: relative;
  width: 4.2rem;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
`;

const SUserId = styled.p`
  flex: 4 4 0;
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
  ${slEllipsis}
`;

const SText = styled.p`
  flex: 4 4 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.GRAY};
  ${slEllipsis}
`;

const SDate = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.color.LIGHT_GRAY};
  margin-top: 2.5rem;
`;

function UserItem({ username, text, image, date, isActive }) {
  return (
    <SContent>
      <SImg src={image} alt="프로필 이미지" />
      {isActive ? (
        <SUserInfoActive>
          <SUserId>{username}</SUserId>
          <SText>{text}</SText>
        </SUserInfoActive>
      ) : (
        <SUserInfo>
          <SUserId>{username}</SUserId>
          <SText>{text}</SText>
        </SUserInfo>
      )}
      {date && <SDate>{date}</SDate>}
    </SContent>
  );
}

export default UserItem;
