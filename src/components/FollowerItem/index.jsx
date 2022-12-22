import React, { useState } from 'react';
import styled from 'styled-components';

import Button from '../common/Button';
import { FOLLOW_BUTTON } from '../../constants/buttonStyle';

import { slEllipsis } from '../../styles/Util';
import basicProfileImage from '../../assets/basic-profile.png';

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
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  ${slEllipsis}
`;

const SAccountName = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.color.GRAY};
`;

const SUserIntroduction = styled.p`
  flex: 4 4 0;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
  ${slEllipsis}
`;

const SButton = styled(Button)`
  flex: 1 1 0;
  line-height: 1.4rem;
  white-space: nowrap;
`;

function FollowerItem({ data }) {
  const [followState, setFollowState] = useState(data.isfollow);

  const handleIsFollow = () => {
    console.log(data);
    return followState ? setFollowState(false) : setFollowState(true);
  };

  const handleErrorImage = (e) => {
    e.target.src = basicProfileImage;
  };

  return (
    <SContent key={data.username}>
      <SImg src={data.image} alt="프로필 이미지" onError={handleErrorImage} />
      <SUserInfo>
        <SUserId>
          {data.username}
          <SAccountName>@{data.accountname}</SAccountName>
        </SUserId>
        <SUserIntroduction>{data.intro}</SUserIntroduction>
      </SUserInfo>
      {followState ? (
        <SButton
          text="취소"
          buttonStyle={FOLLOW_BUTTON}
          onClick={handleIsFollow}
          cancel
        />
      ) : (
        <SButton
          text="팔로우"
          buttonStyle={FOLLOW_BUTTON}
          onClick={handleIsFollow}
        />
      )}
    </SContent>
  );
}

export default FollowerItem;
