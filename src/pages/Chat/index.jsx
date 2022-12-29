import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../components/common/Navigation';
import BaseHeader from '../../components/common/BaseHeader';
import leftIcon from '../../assets/icon/icon-arrow-left.png';
import rightIcon from '../../assets/icon/s-icon-more-vertical.png';
import profile from '../../assets/basic-profile_small.png';
import ChatUserItem from '../../components/ChatUserItem';
import BottomSheet from '../../components/Modal/BottomSheet';
import BottomSheetContent from '../../components/Modal/BottomSheet/BottomSheetContent';

const DummyDate = '22.12.15';

const SContainer = styled.div`
  padding: 2.4rem 1.6rem;
`;

function Chat() {
  const navigate = useNavigate();

  const leftClick = () => {
    navigate(-1);
  };

  const usernameClick = (e) => {
    navigate(`/chat/:id`);
  };

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetTrigger, setBottomSheetTrigger] = useState(false);

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

  return (
    <>
      <BaseHeader
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftClick={leftClick}
        rightClick={handleBottomSheetOpen}
      />
      {isBottomSheetOpen && (
        <BottomSheet
          handleClose={handleBottomSheetOpen}
          bottomSheetTrigger={bottomSheetTrigger}
        >
          <BottomSheetContent text="채팅방 편집" />
          <BottomSheetContent text="채팅방 정렬" />
        </BottomSheet>
      )}
      <SContainer onClick={usernameClick}>
        <ChatUserItem
          username="유저 닉네임"
          text="이곳에는 가장 최근 채팅 내용이 들어갑니당"
          image={profile}
          date={DummyDate}
          isActive
        />
        <ChatUserItem
          username="예를들면 애월읍 위니브 감귤농장"
          text="이곳에는 가장 최근 채팅 내용이 들어갑니당"
          image={profile}
          date={DummyDate}
          isActive
        />
        <ChatUserItem
          username="애월읍 위니브 감귤농장2"
          text="이곳에는 가장 최근 채팅 내용이 들어갑니당"
          image={profile}
          date={DummyDate}
        />
        <ChatUserItem
          username="애월읍 위니브 감귤농장3"
          text="이곳에는 가장 최근 채팅 내용이 들어갑니당"
          image={profile}
          date={DummyDate}
        />
      </SContainer>
      <Navigation />
    </>
  );
}

export default Chat;
