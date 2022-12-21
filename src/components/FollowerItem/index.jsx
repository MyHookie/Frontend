import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  ${slEllipsis}
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

function FollowerItem() {
  const [followerData, setFollowerData] = useState([]);

  const fetchFollowerList = async () => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${JSON.parse(
          localStorage.getItem('accountName')
        )}/follower`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
      setFollowerData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFollowerList();
  }, []);

  console.log(followerData, followerData.length);

  const handleIsfollow = (item) => console.log(item);

  return (
    <>
      {followerData.length > 0 ? (
        followerData.map((item) =>
          item.isfollow ? (
            <SContent key={item.username}>
              <SImg src={item.image} alt="프로필 이미지" />
              <SUserInfo>
                <SUserId>{item.username}</SUserId>
                <SUserIntroduction>{item.intro}</SUserIntroduction>
              </SUserInfo>
              <SButton
                text="취소"
                buttonStyle={FOLLOW_BUTTON}
                onClick={handleIsfollow}
                cancel
              />
            </SContent>
          ) : (
            <SContent key={item.username}>
              <SImg src={item.image} alt="프로필 이미지" />
              <SUserInfo>
                <SUserId>{item.username}</SUserId>
                <SUserIntroduction>{item.intro}</SUserIntroduction>
              </SUserInfo>
              <SButton
                text="팔로우"
                buttonStyle={FOLLOW_BUTTON}
                onClick={() => handleIsfollow(item)}
              />
            </SContent>
          )
        )
      ) : (
        <p>팔로우가 없습니다.</p>
      )}
    </>
  );
}

export default FollowerItem;
