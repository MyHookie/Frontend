import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from '../../components/common/Navigation';
import BaseHeader from '../../components/common/BaseHeader';
import leftIcon from '../../assets/icon/icon-arrow-left.png';
import rightIcon from '../../assets/icon/s-icon-more-vertical.png';
import ChatUserItem from '../../components/ChatUserItem';
import BottomSheet from '../../components/Modal/BottomSheet';
import BottomSheetContent from '../../components/Modal/BottomSheet/BottomSheetContent';

import profile from '../../assets/basic-profile_small.png';

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
          <BottomSheetContent
            text="채팅방 편집"
            onClick={handleBottomSheetOpen}
          />
          <BottomSheetContent
            text="채팅방 정렬"
            onClick={handleBottomSheetOpen}
          />
        </BottomSheet>
      )}
      <SContainer onClick={usernameClick}>
        <ChatUserItem
          username="킹짱철"
          text="후기 잘 봤습니다!! 다름아니고 궁금한게 있어서 그런데 "
          image={profile}
          date="방금 전"
          isActive
        />
        <ChatUserItem
          username="용감한 후키"
          text="ㅋㅋㅋㅋ 화이팅입니다 !!!"
          image={profile}
          date="4시간 전"
        />
        <ChatUserItem
          username="내다크서클어떡해"
          text="감사해요오✨✨🧛‍♀️"
          image={profile}
          date="22.12.25"
          isActive
        />
        <ChatUserItem
          username="내가 왕이다"
          text="개발자신가요? 리얼포스 대박추천해요,,,ㅠ "
          image={profile}
          date="22.12.24"
        />
      </SContainer>
      <Navigation />
    </>
  );
}

export default Chat;
