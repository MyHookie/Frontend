import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import BaseHeader from '../../components/common/BaseHeader';
import Navigation from '../../components/common/Navigation';
import leftArrowIcon from '../../assets/icon/icon-arrow-left.png';
import verticalIcon from '../../assets/icon/s-icon-more-vertical.png';

import getProfileInfo from '../../api/profile';

function Profile() {
  const param = useParams();
  console.log(param);

  const { data, isLoading, isError } = useQuery('profileInfo', () =>
    getProfileInfo(param.id)
  );

  if (!isLoading) {
    console.log(data.profile);
  }

  return (
    <>
      <BaseHeader
        leftIcon={leftArrowIcon}
        leftClick={() => {}}
        rightIcon={verticalIcon}
        rightAlt="프로필 설정"
        rightClick={() => {}}
      />
      {!isLoading && <div>{data.profile.accountname}</div>}

      <Navigation />
    </>
  );
}

export default Profile;
