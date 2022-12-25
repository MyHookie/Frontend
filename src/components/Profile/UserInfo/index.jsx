import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';
import { MEDIUM_BUTTON } from '../../../constants/buttonStyle';
import chatIcon from '../../../assets/icon/icon-message-circle-1.png';
import shareIcon from '../../../assets/icon/icon-share.png';
import basicProfileImage from '../../../assets/basic-profile.png';

function UserInfo({
  followerCount,
  profileImage,
  followingCount,
  userName,
  accountName,
  intro,
  isFollow,
  isMyPage,
}) {
  const navigate = useNavigate();

  const handleErrorImage = (e) => {
    e.target.src = basicProfileImage;
  };

  const goToFollowerPage = (accountname) => {
    navigate(`/profile/${accountname}/follower`);
  };

  const goToFollowingPage = (accountname) => {
    navigate(`/profile/${accountname}/following`);
  };

  const goToProfileEditPage = () => {
    navigate(`/profile/edit`);
  };

  const goToMyPicksPage = () => {
    navigate(`/mypicks`);
  };

  return (
    <S.UserInfoContainer>
      <S.FollowInfoContainer>
        <S.FollowInfo onClick={() => goToFollowerPage(accountName)}>
          <S.FollowCount>{followerCount}</S.FollowCount>
          <S.FollowType>followers</S.FollowType>
        </S.FollowInfo>
        <S.ProfileImage
          src={profileImage}
          alt="프로필 이미지"
          onError={handleErrorImage}
        />
        <S.FollowInfo onClick={() => goToFollowingPage(accountName)}>
          <S.FollowCount>{followingCount}</S.FollowCount>
          <S.FollowType>followings</S.FollowType>
        </S.FollowInfo>
      </S.FollowInfoContainer>
      <S.UserName>{userName}</S.UserName>
      <S.AccountName>@{accountName}</S.AccountName>
      <S.Intro>{intro}</S.Intro>
      <S.ButtonContainer>
        {isMyPage ? (
          <>
            <S.FollowButton
              text="프로필 수정"
              buttonStyle={MEDIUM_BUTTON}
              onClick={goToProfileEditPage}
              cancel
            />
            <S.FollowButton
              text="myPick 등록"
              buttonStyle={MEDIUM_BUTTON}
              onClick={goToMyPicksPage}
              cancel
            />
          </>
        ) : (
          <>
            <S.IconButton>
              <img src={chatIcon} alt="채팅 아이콘" />
            </S.IconButton>
            <S.FollowButton
              text={isFollow ? '언팔로우' : '팔로우'}
              buttonStyle={MEDIUM_BUTTON}
              cancel={isFollow && true}
            />
            <S.IconButton>
              <img src={shareIcon} alt="공유 아이콘" />
            </S.IconButton>
          </>
        )}
      </S.ButtonContainer>
    </S.UserInfoContainer>
  );
}

export default UserInfo;
