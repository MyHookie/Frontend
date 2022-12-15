import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/common/Navigation';
import BaseHeader from '../../components/common/BaseHeader';
import leftIcon from '../../assets/icon/icon-arrow-left.png';
import rightIcon from '../../assets/icon/s-icon-more-vertical.png';
import profile from '../../assets/basic-profile_small.png';
import UserItem from '../../components/UserItem';

const SContainer = styled.div`
  padding: 2.4rem 1.6rem;
`;

const DummyDate = '22.12.15';

function Chat() {
  const navigate = useNavigate();
  const leftClick = () => {
    navigate(`/home`);
  };

  return (
    <div>
      <BaseHeader
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        leftClick={leftClick}
      />
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
