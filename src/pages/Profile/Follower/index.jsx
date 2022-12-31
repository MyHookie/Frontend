import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

import * as S from './index.styles';
import BaseHeader from '../../../components/common/BaseHeader';
import FollowItem from '../../../components/FollowItem';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';

function Follower() {
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate(-1);
  };

  const [followerData, setFollowerData] = useState([]);
  const param = useParams();

  const fetchFollowerList = async () => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${param.accountname}/follower`,
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

  return (
    <>
      <BaseHeader
        leftIcon={arrowIcon}
        leftClick={handleToProfile}
        title="Followers"
      />
      <S.FollowerList>
        <h2>팔로워 페이지</h2>
        {followerData.length > 0 &&
          followerData.map((data) => (
            <FollowItem key={data.accountname} data={data} />
          ))}
      </S.FollowerList>
    </>
  );
}

export default Follower;
