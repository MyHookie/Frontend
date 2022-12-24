import React from 'react';

import * as S from './index.styles';
import { MEDIUM_BUTTON } from '../../../constants/buttonStyle';
import chatIcon from '../../../assets/icon/icon-message-circle-1.png';
import shareIcon from '../../../assets/icon/icon-share.png';

function UserInfo({
  followerCount,
  profileImage,
  followingCount,
  userName,
  accountName,
  intro,
}) {
  return (
    <S.UserInfoContainer>
      <S.FollowInfoContainer>
        <S.FollowInfo>
          <S.FollowCount>{followerCount}</S.FollowCount>
          <S.FollowType>followers</S.FollowType>
        </S.FollowInfo>
        <S.ProfileImage src={profileImage} alt="프로필 이미지" />
        <S.FollowInfo>
          <S.FollowCount>{followingCount}</S.FollowCount>
          <S.FollowType>followings</S.FollowType>
        </S.FollowInfo>
      </S.FollowInfoContainer>
      <S.UserName>{userName}</S.UserName>
      <S.AccountName>@{accountName}</S.AccountName>
      <S.Intro>{intro}</S.Intro>
      <S.ButtonContainer>
        <S.IconButton>
          <img src={chatIcon} alt="채팅 아이콘" />
        </S.IconButton>
        <S.FollowButton text="팔로우" buttonStyle={MEDIUM_BUTTON}>
          팔로우
        </S.FollowButton>
        <S.IconButton>
          <img src={shareIcon} alt="공유 아이콘" />
        </S.IconButton>
      </S.ButtonContainer>
    </S.UserInfoContainer>
  );
}

export default UserInfo;
