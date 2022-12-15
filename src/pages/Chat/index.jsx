import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/common/Navigation';
import BaseHeader from '../../components/common/BaseHeader';
import leftIcon from '../../assets/icon/icon-arrow-left.png';
import rightIcon from '../../assets/icon/s-icon-more-vertical.png';
import profile from '../../assets/basic-profile_small.png';
import UserItem from '../../components/UserItem';
import BottomSheet from '../../components/Modal/BottomSheet';
import BottomSheetContent from '../../components/Modal/BottomSheet/BottomSheetContent';

const SContainer = styled.div`
  padding: 2.4rem 1.6rem;
`;

const DummyDate = '22.12.15';

function Chat() {
  const navigate = useNavigate();
  const leftClick = () => {
    navigate(`/home`);
  };

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };
  return (
    <div>
      <BaseHeader
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftClick={leftClick}
        rightClick={handleBottomSheetOpen}
      />
      {isBottomSheetOpen && (
        <BottomSheet handleClose={handleBottomSheetOpen}>
          {/* 로그인 한 경우(내 글인 경우) => 삭제, 수정, 아니면 신고하기 */}
          <BottomSheetContent text="편집" />
          <BottomSheetContent text="채팅방 정렬" />
        </BottomSheet>
      )}
      <SContainer>
        <UserItem
          username="유저 닉네임"
          text="이곳에는 가장 최근 채팅 내용이 들어갑니당"
          image={profile}
          date={DummyDate}
          isActive
        />
        <UserItem
          username="예를들면 애월읍 위니브 감귤농장"
          text="이곳에는 가장 최근 채팅 내용이 들어갑니당"
          image={profile}
          date={DummyDate}
          isActive
        />
        <UserItem
          username="애월읍 위니브 감귤농장2"
          text="이곳에는 가장 최근 채팅 내용이 들어갑니당"
          image={profile}
          date={DummyDate}
        />
        <UserItem
          username="애월읍 위니브 감귤농장3"
          text="이곳에는 가장 최근 채팅 내용이 들어갑니당"
          image={profile}
          date={DummyDate}
        />
      </SContainer>

      <Navigation />
    </div>
  );
}

export default Chat;
