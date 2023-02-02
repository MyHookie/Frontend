import React, { useEffect, useState } from 'react';
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
import * as S from './index.styles';

import { getAccountPost, getFollowPost } from '../../api/post';
import PostSkeleton from '../../components/Skeleton/PostSkeleton';

function postSort(a, b) {
  if (a.createdAt < b.createdAt) {
    return 1;
  }
  if (a.createdAt > b.createdAt) {
    return -1;
  }
  return 0;
}

function Home() {
  const [allPost, setAllPost] = useState([]);
  const navigate = useNavigate();
  const accountName = JSON.parse(localStorage.getItem('accountName'));

  const { data: myPost, isLoading: isMyPostLoading } = useQuery(
    'myPostList',
    () => getAccountPost(accountName)
  );
  const { data: followPost, isLoading: isFollowPostLoading } = useQuery(
    'followPostList',
    getFollowPost
  );

  const goToSearch = () => {
    navigate('/search');
  };

  useEffect(() => {
    if (!isFollowPostLoading && !isMyPostLoading) {
      setAllPost([...myPost.data, ...followPost].sort(postSort));
    }
  }, [myPost, followPost]);

  return (
    <>
      <BaseHeader
        image={hookieImage}
        rightIcon={searchIcon}
        rightClick={goToSearch}
        rightAlt="검색창 이동"
      />

      <S.Container>
        {allPost.length > 0 && <PostList postData={allPost} />}
        {!isMyPostLoading && !isFollowPostLoading && allPost.length === 0 && (
          <S.EmptyContainer>
            <S.EmptyImage src={logoGrey} alt="로고 이미지" />
            <S.EmptyContent>유저를 검색해 팔로우 해보세요!</S.EmptyContent>
            <Button
              text="검색하기"
              buttonStyle={LARGE_BUTTON}
              onClick={goToSearch}
            />
          </S.EmptyContainer>
        )}
        {isMyPostLoading && isFollowPostLoading && (
          <S.PostSkeletonContainer>
            <PostSkeleton />
            <PostSkeleton />
          </S.PostSkeletonContainer>
        )}
      </S.Container>

      <Navigation />
    </>
  );
}

export default Home;
