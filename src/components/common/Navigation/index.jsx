import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

import homeIcon from '../../../assets/icon/icon-home.png';
import filledHomeIcon from '../../../assets/icon/icon-home-fill.png';
import chatIcon from '../../../assets/icon/icon-message-circle.png';
import filledChatIcon from '../../../assets/icon/icon-message-circle-fill.png';
import postIcon from '../../../assets/icon/icon-edit.png';
import profileIcon from '../../../assets/icon/icon-user.png';
import filledProfileIcon from '../../../assets/icon/icon-user-fill.png';
import NavigationLink from './NavigationLink';
import pathState from '../../../atoms/path';

const SContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 6rem;
  width: 100%;
  padding: 0rem 2.7rem;

  background-color: ${({ theme }) => theme.BACKGROUND};
  border-top: 1px solid ${({ theme }) => theme.BORDER};
`;

function Navigation() {
  const [currentPath, setCurrentPath] = useRecoilState(pathState);
  const accountName = JSON.parse(localStorage.getItem('accountName'));
  const location = useLocation();

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, []);

  const handlePathChange = (path) => {
    setCurrentPath(path);
  };

  return (
    <SContainer>
      <NavigationLink
        path="/home"
        icon={currentPath === '/home' ? filledHomeIcon : homeIcon}
        linkName="홈"
        onClick={() => handlePathChange('/home')}
      />
      <NavigationLink
        path="/chat"
        icon={currentPath === '/chat' ? filledChatIcon : chatIcon}
        linkName="채팅"
        onClick={() => handlePathChange('/chat')}
      />
      <NavigationLink
        path="/post/upload"
        icon={postIcon}
        linkName="글쓰기"
        onClick={() => handlePathChange('/post/upload')}
      />
      <NavigationLink
        path={`/profile/${accountName}`}
        icon={currentPath.includes('profile') ? filledProfileIcon : profileIcon}
        linkName="프로필"
        onClick={() => handlePathChange(`/profile/${accountName}`)}
      />
    </SContainer>
  );
}

export default Navigation;
