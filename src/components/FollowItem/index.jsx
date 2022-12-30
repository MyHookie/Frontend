import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Button from '../common/Button';
import { FOLLOW_BUTTON } from '../../constants/buttonStyle';

import { slEllipsis } from '../../styles/Util';
import basicProfileImage from '../../assets/basic-profile.png';
import Snackbar from '../Modal/SnackBar';

const SContent = styled.li`
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
  border-radius: 50%;
`;

const SUserId = styled.p`
  flex: 4 4 0;
  margin-bottom: 0.6rem;
  font-size: 1.4rem;
`;

const SAccountName = styled.span`
  font-size: 1rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.SUB_TEXT};
`;

const SUserIntroduction = styled.p`
  flex: 4 4 0;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.SUB_TEXT};
  ${slEllipsis}
`;

const SButton = styled(Button)`
  flex: 1 1 0;
  line-height: 1.4rem;
  white-space: nowrap;
`;

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
    <SContent key={data.username}>
      <SImg
        src={data.image}
        alt="프로필 이미지"
        onError={handleErrorImage}
        onClick={handleToUserProfile}
      />
      <SUserInfo onClick={handleToUserProfile}>
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
      {isSnackBarOpen && (
        <Snackbar content="자기 자신을 팔로우 할 수 없습니다." />
      )}
    </SContent>
  );
}

export default FollowItem;
