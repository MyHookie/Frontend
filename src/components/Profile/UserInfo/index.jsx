import React, { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';
import { MEDIUM_BUTTON } from '../../../constants/buttonStyle';
import chatIcon from '../../../assets/icon/icon-message-circle-1.png';
import shareIcon from '../../../assets/icon/icon-share.png';
import basicProfileImage from '../../../assets/basic-profile.png';
import Snackbar from '../../Modal/SnackBar';

import { deleteFollow, postFollow } from '../../../api/follow';
import getProfileInfo from '../../../api/profile';

function UserInfo({ isMyPage, accountName }) {
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery('profileInfo', () =>
    getProfileInfo(accountName)
  );

  const followUser = useMutation(() => postFollow(accountName));
  const unFollowUser = useMutation(() => deleteFollow(accountName));

  const handleFollowUser = () => {
    if (data.profile.isfollow) {
      unFollowUser.mutate();
    } else {
      followUser.mutate();
    }
  };

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
    navigate(`/profile/edit`, {
      state: {
        userName: data.profile.username,
        accountName: data.profile.accountname,
        intro: data.profile.intro,
        profileImage: data.profile.image,
      },
    });
  };

  const goToMyPicksPage = () => {
    navigate(`/mypicks`);
  };

  const goToChatPage = () => {
    navigate(`/chat`);
  };

  const handleSnackBar = () => {
    setIsSnackBarOpen(true);
    return setTimeout(() => setIsSnackBarOpen(false), 2000);
  };

  const copyProfileAddress = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setSnackBarMessage('클립보드에 복사되었습니다.');
      handleSnackBar();
    } catch (e) {
      setSnackBarMessage('복사가 실패했습니다.');
      handleSnackBar();
    }
  };

  return (
    <>
      {!isLoading && (
        <S.UserInfoContainer>
          <S.FollowInfoContainer>
            <S.FollowInfo onClick={() => goToFollowerPage(accountName)}>
              <S.FollowCount>{data.profile.followerCount}</S.FollowCount>
              <S.FollowType>followers</S.FollowType>
            </S.FollowInfo>
            <S.ProfileImage
              src={data.profile.image}
              alt="프로필 이미지"
              onError={handleErrorImage}
            />
            <S.FollowInfo onClick={() => goToFollowingPage(accountName)}>
              <S.FollowCount>{data.profile.followingCount}</S.FollowCount>
              <S.FollowType>followings</S.FollowType>
            </S.FollowInfo>
          </S.FollowInfoContainer>
          <S.UserName>{data.profile.username}</S.UserName>
          <S.AccountName>@{data.profile.accountname}</S.AccountName>
          <S.Intro>{data.profile.intro}</S.Intro>
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
                <S.IconButton onClick={goToChatPage}>
                  <img src={chatIcon} alt="채팅 아이콘" />
                </S.IconButton>
                <S.FollowButton
                  text={data.profile.isfollow ? '언팔로우' : '팔로우'}
                  buttonStyle={MEDIUM_BUTTON}
                  onClick={handleFollowUser}
                  cancel={data.profile.isfollow && true}
                />
                <S.IconButton onClick={copyProfileAddress}>
                  <img src={shareIcon} alt="공유 아이콘" />
                </S.IconButton>
              </>
            )}
          </S.ButtonContainer>
          {isSnackBarOpen && <Snackbar content={snackBarMessage} />}
        </S.UserInfoContainer>
      )}
    </>
  );
}

export default UserInfo;
