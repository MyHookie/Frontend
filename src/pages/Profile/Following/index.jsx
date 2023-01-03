import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './index.styles';
import BaseHeader from '../../../components/common/BaseHeader';
import FollowItem from '../../../components/FollowItem';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import { getFollowingList } from '../../../api/follow';

function Following() {
  const param = useParams();
  const navigate = useNavigate();

  const handleToProfile = () => {
    navigate(-1);
  };

  const { data: followingList, isLoading: followingListLoading } = useQuery(
    ['followingList', param.accountname],
    () => getFollowingList(param.accountname)
  );

  return (
    <>
      <BaseHeader
        leftIcon={arrowIcon}
        leftClick={handleToProfile}
        title="Followings"
      />
      <S.FollowerList>
        <h2>팔로잉 페이지</h2>
        {!followingListLoading &&
          followingList.length > 0 &&
          followingList.map((item) => (
            <FollowItem key={item.accountname} data={item} />
          ))}
      </S.FollowerList>
    </>
  );
}

export default Following;
