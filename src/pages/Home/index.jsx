import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

import BaseHeader from '../../components/common/BaseHeader';
import Navigation from '../../components/common/Navigation';
import searchIcon from '../../assets/icon/icon-search.png';
import logoGrey from '../../assets/logo_grey.png';
import Button from '../../components/common/Button';
import { LARGE_BUTTON } from '../../constants/buttonStyle';
import PostList from '../../components/Post/PostList';
import hookieImage from '../../assets/Hookie.png';
import { getFollowPost, getMyPost } from '../../api/post';

const SContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100 + 4.4) vh;

  padding: 0.9rem;
  margin-bottom: 6rem;
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
  const [allPost, setAllPost] = useState([]);
  const navigate = useNavigate();

  const {
    data: myPost,
    isLoading: isMyPostLoading,
    isError: isMyPostError,
  } = useQuery('myPostList', getMyPost);

  const {
    data: followPost,
    isLoading: isFollowPostLoading,
    isError: isFollowPostError,
  } = useQuery('followPostList', getFollowPost);

  const goToSearch = () => {
    navigate('/search');
  };

  useEffect(() => {
    function postSort(a, b) {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    }

    if (myPost && followPost) {
      setAllPost([...myPost.post, ...followPost.posts].sort(postSort));
    }
  }, [myPost, followPost]);

  if (isMyPostLoading && isFollowPostLoading) {
    return <div>loading....</div>;
  }
  if (isMyPostError && isFollowPostError) {
    return <div>Error!!</div>;
  }

  if (allPost) {
    return (
      <>
        <BaseHeader
          image={hookieImage}
          rightIcon={searchIcon}
          rightClick={goToSearch}
          rightAlt="검색창 이동"
        />

        <SContainer>
          {allPost.length > 0 ? (
            <PostList postData={allPost} />
          ) : (
            <SEmptyContainer>
              <SEmptyImage src={logoGrey} alt="로고 이미지" />
              <SEmptyContent>유저를 검색해 팔로우 해보세요!</SEmptyContent>
              <Button
                text="검색하기"
                buttonStyle={LARGE_BUTTON}
                onClick={goToSearch}
              />
            </SEmptyContainer>
          )}
        </SContainer>

        <Navigation />
      </>
    );
  }
}

export default Home;
