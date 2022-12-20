import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BaseHeader from '../../../components/common/BaseHeader';
import FollowerItem from '../../../components/FollowerItem';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import { IR } from '../../../styles/Util';
import dummyList from '../../../components/FollowerItem/dummyList';

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
  return (
    <div>
      <BaseHeader
        leftIcon={arrowIcon}
        leftClick={handleToProfile}
        title="Follower"
      />
      <SContainer>
        <STitle>팔로워 페이지</STitle>
        {dummyList.map((item) =>
          item.isfollow ? (
            <FollowerItem
              key={item.id}
              username={item.username}
              intro={item.intro}
              image={item.image}
              state="취소"
            />
          ) : (
            <FollowerItem
              key={item.id}
              username={item.username}
              intro={item.intro}
              image={item.image}
              state="팔로우"
            />
          )
        )}
      </SContainer>
    </div>
  );
}

export default Follower;
