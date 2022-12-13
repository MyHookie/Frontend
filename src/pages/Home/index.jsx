import React from 'react';
import styled from 'styled-components';
import BaseHeader from '../../components/common/BaseHeader';
import Navigation from '../../components/common/Navigation';

import searchIcon from '../../assets/icon/icon-search.png';
import logoGrey from '../../assets/logo_grey.png';
import Button from '../../components/common/Button';
import { LARGE_BUTTON } from '../../constants/buttonStyle';
import dummyList from '../../components/Post/dummyList';
import PostList from '../../components/Post/PostList';

const SContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  padding: 0.9rem;
`;

const SEmptyContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50%;

  button {
    width: 12rem;
  }
`;

const SEmptyImage = styled.img`
  width: 20rem;
  margin-bottom: 2.6rem;
`;

const SEmptyContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.GRAY};
  margin-bottom: 2rem;
`;

function Home() {
  return (
    <>
      <BaseHeader
        title="후키 피드"
        rightIcon={searchIcon}
        rightClick={() => {}}
        rightAlt="검색창 이동"
      />
      <SContainer>
        {dummyList.length > 0 ? (
          <PostList />
        ) : (
          <SEmptyContainer>
            <SEmptyImage src={logoGrey} alt="로고 이미지" />
            <SEmptyContent>유저를 검색해 팔로우 해보세요!</SEmptyContent>
            <Button text="검색하기" buttonStyle={LARGE_BUTTON} />
          </SEmptyContainer>
        )}
      </SContainer>
      <Navigation />
    </>
  );
}

export default Home;
