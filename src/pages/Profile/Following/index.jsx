import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import BaseHeader from '../../../components/common/BaseHeader';
import FollowItem from '../../../components/FollowItem';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import { IR } from '../../../styles/Util';

const SFollowerList = styled.ul`
  padding: 24px 16px 0;
  h2 {
    ${IR}
  }
`;

function Following() {
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate(-1);
  };

  const [followingData, setFollowingData] = useState([]);

  const fetchFollowingList = async () => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${JSON.parse(
          localStorage.getItem('accountName')
        )}/following`,
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
        title="Following"
      />
      <SFollowerList>
        <h2>팔로잉 페이지</h2>
        {followingData.length > 0 &&
          followingData.map((data) => (
            <FollowItem key={data.accountname} data={data} />
          ))}
      </SFollowerList>
    </>
  );
}

export default Following;
