import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import * as S from './index.styles';
import BaseHeader from '../../../components/common/BaseHeader';
import FollowItem from '../../../components/FollowItem';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';

function Following() {
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate(-1);
  };

  const [followingData, setFollowingData] = useState([]);
  const param = useParams();

  const fetchFollowingList = async () => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${param.accountname}/following?limit=0&skip=0`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
      setFollowingData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchFollowingList();
  }, []);

  return (
    <>
      <BaseHeader
        leftIcon={arrowIcon}
        leftClick={handleToProfile}
        title="Followings"
      />
      <S.FollowerList>
        <h2>팔로잉 페이지</h2>
        {followingData.length > 0 &&
          followingData.map((data) => (
            <FollowItem key={data.accountname} data={data} />
          ))}
      </S.FollowerList>
    </>
  );
}

export default Following;
