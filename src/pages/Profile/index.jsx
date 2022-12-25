import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import * as S from './index.styles';
import BaseHeader from '../../components/common/BaseHeader';
import Navigation from '../../components/common/Navigation';
import leftArrowIcon from '../../assets/icon/icon-arrow-left.png';
import verticalIcon from '../../assets/icon/s-icon-more-vertical.png';
import UserInfo from '../../components/Profile/UserInfo';
import ProfilePost from '../../components/Profile/ProfilePost';
import BottomSheet from '../../components/Modal/BottomSheet';
import BottomSheetContent from '../../components/Modal/BottomSheet/BottomSheetContent';

function Profile() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const navigate = useNavigate();
  const param = useParams();
  const isMyPage =
    param.accountname === JSON.parse(localStorage.getItem('accountName'));

  const goBackPage = () => {
    navigate(-1);
  };

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  return (
    <>
      <BaseHeader
        leftIcon={leftArrowIcon}
        leftClick={goBackPage}
        rightIcon={verticalIcon}
        rightAlt="프로필 설정"
        rightClick={handleBottomSheetOpen}
      />
      <S.Container>
        <UserInfo accountName={param.accountname} isMyPage={isMyPage} />
        <ProfilePost accountName={param.accountname} />
      </S.Container>

      <Navigation />
      {isBottomSheetOpen && (
        <BottomSheet handleClose={handleBottomSheetOpen}>
          <BottomSheetContent text="다크모드" />
          <BottomSheetContent text="로그아웃" />
        </BottomSheet>
      )}
    </>
  );
}

export default Profile;
