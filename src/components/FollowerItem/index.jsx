import React from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import { FOLLOW_BUTTON } from '../../constants/buttonStyle';

import { slEllipsis } from '../../styles/Util';

const SContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.6rem;
`;

const SUserInfo = styled.div`
  width: 65%;
  margin: 0 1.2rem;
`;

const SImg = styled.img`
  width: 5rem;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
`;

const SUserId = styled.p`
  flex: 4 4 0;
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
  ${slEllipsis}
`;

const SUserIntroduction = styled.p`
  flex: 4 4 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.GRAY};
  ${slEllipsis}
`;

const SButton = styled(Button)`
  flex: 1 1 0;
  white-space: nowrap;
`;

function FollowerItem({ username, intro, image, state }) {
  return (
    <SContent>
      <SImg src={image} alt="프로필 이미지" />
      <SUserInfo>
        <SUserId>{username}</SUserId>
        <SUserIntroduction>{intro}</SUserIntroduction>
      </SUserInfo>
      {state === '취소' ? (
        <SButton text={state} buttonStyle={FOLLOW_BUTTON} cancel />
      ) : (
        <SButton text={state} buttonStyle={FOLLOW_BUTTON} />
      )}
    </SContent>
  );
}

export default FollowerItem;
