import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './index.styles';
import BaseHeader from '../../../components/common/BaseHeader';
import FollowItem from '../../../components/FollowItem';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import { getFollowerList } from '../../../api/follow';

function Follower() {
  const param = useParams();
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate(-1);
  };

  const { data: followerList, isLoading: followerListLoading } = useQuery(
    ['followerList', param.accountname],
    () => getFollowerList(param.accountname)
  );

  return (
    <>
      <BaseHeader
        leftIcon={arrowIcon}
        leftClick={handleToProfile}
        title="Followers"
      />
      <S.FollowerList>
        <h2>팔로워 페이지</h2>
        {!followerListLoading &&
          followerList.length > 0 &&
          followerList.map((item) => (
            <FollowItem key={item.accountname} data={item} />
          ))}
      </S.FollowerList>
    </>
  );
}

export default Follower;
