import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import BaseHeader from '../../components/common/BaseHeader';
import Navigation from '../../components/common/Navigation';
import leftArrowIcon from '../../assets/icon/icon-arrow-left.png';
import verticalIcon from '../../assets/icon/s-icon-more-vertical.png';
import chatIcon from '../../assets/icon/icon-message-circle-1.png';
import shareIcon from '../../assets/icon/icon-share.png';
import Button from '../../components/common/Button';
import { MEDIUM_BUTTON } from '../../constants/buttonStyle';

import getProfileInfo from '../../api/profile';

const SUserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

const SFollowInfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  padding: 3rem 5.4rem 1.5rem 5.4rem;
`;

const SFollowInfo = styled.div`
  text-align: center;
`;

const SFollowCount = styled.p`
  font-size: ${({ theme }) => theme.fontSize.LARGE};
  font-family: LINESeedKR-Bd;

  margin-bottom: 0.3rem;
`;

const SFollowType = styled.p`
  color: ${({ theme }) => theme.color.GRAY};
`;

const SProfileImage = styled.img`
  min-width: 11rem;
  width: 11rem;
  min-height: 11rem;
  height: 11rem;

  object-fit: cover;

  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
`;

const SUserName = styled.p`
  font-size: 1.6rem;
  font-family: LINESeedKR-Bd;

  padding-bottom: 0.6rem;
`;

const SAccountName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};

  padding-bottom: 1.5rem;
`;

const SIntro = styled.p`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.GRAY};

  padding: 0rem 5rem 2.4rem 5rem;
`;

const SButtonContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
`;

const SIconButton = styled.button`
  min-width: 3.4rem;
  width: 3.4rem;
  min-height: 3.4rem;
  height: 3.4rem;

  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};

  img {
    width: 1.5rem;
  }
`;

const FollowButton = styled(Button)`
  width: 12rem;
  height: 3.4rem;
`;

function Profile() {
  const param = useParams();
  console.log(param);

  const { data, isLoading, isError } = useQuery('profileInfo', () =>
    getProfileInfo(param.id)
  );

  if (!isLoading) {
    console.log(data.profile);
  }

  return (
    <>
      <BaseHeader
        leftIcon={leftArrowIcon}
        leftClick={() => {}}
        rightIcon={verticalIcon}
        rightAlt="프로필 설정"
        rightClick={() => {}}
      />
      {!isLoading && (
        <SUserInfoContainer>
          <SFollowInfoContainer>
            <SFollowInfo>
              <SFollowCount>{data.profile.followerCount}</SFollowCount>
              <SFollowType>followers</SFollowType>
            </SFollowInfo>
            <SProfileImage src={data.profile.image} alt="프로필 이미지" />
            <SFollowInfo>
              <SFollowCount>{data.profile.followingCount}</SFollowCount>
              <SFollowType>followings</SFollowType>
            </SFollowInfo>
          </SFollowInfoContainer>
          <SUserName>{data.profile.username}</SUserName>
          <SAccountName>@{data.profile.accountname}</SAccountName>
          <SIntro>{data.profile.intro}</SIntro>
          <SButtonContainer>
            <SIconButton>
              <img src={chatIcon} alt="채팅 아이콘" />
            </SIconButton>
            <FollowButton text="팔로우" buttonStyle={MEDIUM_BUTTON}>
              팔로우
            </FollowButton>
            <SIconButton>
              <img src={shareIcon} alt="공유 아이콘" />
            </SIconButton>
          </SButtonContainer>
        </SUserInfoContainer>
      )}

      <Navigation />
    </>
  );
}

export default Profile;
