import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import * as S from './index.styles';
import Snackbar from '../Modal/SnackBar';
import basicProfileImage from '../../assets/basic-profile.png';
import { FOLLOW_BUTTON } from '../../constants/buttonStyle';

import { deleteFollow, postFollow } from '../../api/follow';

function FollowItem({ data }) {
  const queryClient = useQueryClient();

  const [followState, setFollowState] = useState(data.isfollow);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);

  const navigate = useNavigate();

  const handleToUserProfile = () => {
    navigate(`../../profile/${data.accountname}`);
  };

  // const deletePost = useMutation(() => deleteMyPost(postId), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries();
  //   },
  // });
  // const postLike = useMutation(() => postLikeFeed(postId), {
  //   onSuccess: () => {
  //     queryClient.invalidateQueries();
  //   },
  // });

  const postFollowItem = useMutation(() => postFollow(data.accountname), {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const deleteFollowItem = useMutation(() => deleteFollow(data.accountname), {
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  const handleSnackBar = () => {
    setIsSnackBarOpen(true);
    return setTimeout(() => setIsSnackBarOpen(false), 2000);
  };

  const handleIsFollow = () => {
    if (data.accountname === JSON.parse(localStorage.getItem('accountName'))) {
      handleSnackBar();
      return;
    }
    if (followState) {
      deleteFollowItem.mutate();
      setFollowState(false);
    } else {
      postFollowItem.mutate();
      setFollowState(true);
    }
  };

  const handleErrorImage = (e) => {
    e.target.src = basicProfileImage;
  };

  return (
    <S.Content key={data.username}>
      <S.Img
        src={data.image}
        alt="프로필 이미지"
        onError={handleErrorImage}
        onClick={handleToUserProfile}
      />
      <S.UserInfo onClick={handleToUserProfile}>
        <S.UserId>
          {data.username}
          <S.AccountName>@{data.accountname}</S.AccountName>
        </S.UserId>
        <S.UserIntroduction>{data.intro}</S.UserIntroduction>
      </S.UserInfo>
      {followState ? (
        <S.CommonButton
          text="취소"
          buttonStyle={FOLLOW_BUTTON}
          onClick={handleIsFollow}
          cancel
        />
      ) : (
        <S.CommonButton
          text="팔로우"
          buttonStyle={FOLLOW_BUTTON}
          onClick={handleIsFollow}
        />
      )}
      {isSnackBarOpen && (
        <Snackbar content="자기 자신을 팔로우 할 수 없습니다." />
      )}
    </S.Content>
  );
}

export default FollowItem;
