import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import BaseHeader from '../../../components/common/BaseHeader';
import FollowerItem from '../../../components/FollowerItem';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import { IR } from '../../../styles/Util';

const SContainer = styled.section`
  padding: 24px 16px 0;
`;

const STitle = styled.h2`
  ${IR}
`;

function Follower() {
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate('/profile');
  };

  const [followerData, setFollowerData] = useState([]);

  const fetchFollowerList = async () => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr/profile/${JSON.parse(
          localStorage.getItem('accountName')
        )}/follower`,
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
        title="Follower"
      />
      <SContainer>
        <STitle>팔로워 페이지</STitle>
        {followerData.length > 0 &&
          followerData.map((data) => (
            <FollowerItem key={data.accountname} data={data} />
          ))}
      </SContainer>
    </>
  );
}

export default Follower;
