import React, { useState, useEffect } from 'react';
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
import MyPicks from '../../components/MyPicks';
import Dialog from '../../components/Modal/Dialog';
import useTheme from '../../hooks/useTheme';

function Profile() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetTrigger, setBottomSheetTrigger] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');

  const navigate = useNavigate();
  const param = useParams();
  const isMyPage =
    param.accountname === JSON.parse(localStorage.getItem('accountName'));
  const handleThemeChange = useTheme();

  const goBackPage = () => {
    navigate(-1);
  };

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setBottomSheetTrigger(!bottomSheetTrigger);

    if (bottomSheetTrigger) {
      setTimeout(() => {
        setIsBottomSheetOpen(false);
        setBottomSheetTrigger(false);
      }, 500);
    }

    setIsBottomSheetOpen(true);
  };

  const handleDialogOpen = (e) => {
    if (isDialogOpen) {
      setIsDialogOpen(false);
      setDialogType('');
    } else {
      setIsDialogOpen(true);
      setDialogType(e.target.textContent);
    }

    if (isDialogOpen && e.target.textContent === '취소') {
      setBottomSheetTrigger(!bottomSheetTrigger);
      setIsBottomSheetOpen(!isBottomSheetOpen);
      setIsDialogOpen(!isDialogOpen);
    }
  };

  const handleDialogAction = () => {
    if (dialogType === '로그아웃') {
      localStorage.clear();
      navigate('/welcome');
    }

    setBottomSheetTrigger(!bottomSheetTrigger);
    setIsBottomSheetOpen(!isBottomSheetOpen);
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    if (dialogType === '로그아웃') {
      setDialogMessage('정말 로그아웃 하시겠습니까?');
    }
  }, [dialogType]);

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
        <MyPicks accountName={param.accountname} isMyPage={isMyPage} />
        <ProfilePost accountName={param.accountname} />
      </S.Container>

      <Navigation />
      {isBottomSheetOpen && (
        <BottomSheet
          handleClose={handleBottomSheetOpen}
          bottomSheetTrigger={bottomSheetTrigger}
        >
          <BottomSheetContent text="다크모드" onClick={handleThemeChange} />
          <BottomSheetContent text="로그아웃" onClick={handleDialogOpen} />
        </BottomSheet>
      )}
      {isDialogOpen && (
        <Dialog
          dialogText={dialogMessage}
          handleClose={handleDialogOpen}
          handleSubmit={handleDialogAction}
        />
      )}
    </>
  );
}

export default Profile;
