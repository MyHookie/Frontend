import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import * as S from './index.styles';
import basicProfileImage from '../../assets/basic-profile.png';
import { FOLLOW_BUTTON } from '../../constants/buttonStyle';
import Snackbar from '../Modal/SnackBar';

function FollowItem({ data }) {
  const [followState, setFollowState] = useState(data.isfollow);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);

  const navigate = useNavigate();

  const handleToUserProfile = () => {
    navigate(`../../profile/${data.accountname}`);
  };

  const deleteFollowItem = async () => {
    try {
      await axios.delete(
        `https://mandarin.api.weniv.co.kr/profile/${data.accountname}/unfollow`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const postFollowItem = async () => {
    try {
      await axios.post(
        `https://mandarin.api.weniv.co.kr/profile/${data.accountname}/follow`,
        {},
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

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
      deleteFollowItem();
      setFollowState(false);
    } else {
      postFollowItem();
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
