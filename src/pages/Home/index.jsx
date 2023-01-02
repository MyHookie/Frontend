import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery, useQueries, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

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
  const myPage = useRef(0);
  const followPage = useRef(0);
  const [ref, inView] = useInView();
  const myAccountName = JSON.parse(localStorage.getItem('accountName'));

  // const { data: myPost, isLoading: isMyPostLoading } = useQuery(
  //   'myPostList',
  //   () => getAccountPost(myAccountName)
  // );

  // const { data: followPost, isLoading: isFollowPostLoading } = useQuery(
  //   'followPostList',
  //   getFollowPost
  // );

  const {
    data: myPost,
    isLoading: isMyPostLoading,
    fetchNextPage: fetchNextMyPost,
  } = useInfiniteQuery(
    ['myPostList'],
    ({ pageParam = myPage.current }) =>
      getAccountPost(myAccountName, pageParam),
    {
      getNextPageParam: (nextPage) => nextPage.skip + 1,
    }
  );

  const {
    data: followPost,
    isLoading: isFollowPostLoading,
    fetchNextPage: fetchNextFollowPost,
  } = useInfiniteQuery(
    ['followPostList'],
    ({ pageParam = followPage.current }) => getFollowPost(pageParam),
    {
      getNextPageParam: (nextPage) => nextPage.skip + 1,
    }
  );

  const goToSearch = () => {
    navigate('/search');
  };

  useEffect(() => {
    if (!isMyPostLoading) {
      if (inView && !myPost.pages[myPage.current].isLast) {
        myPage.current += 1;
        fetchNextMyPost();
      }
    }
    if (!isFollowPostLoading) {
      if (inView && !followPost.pages[followPage.current].isLast) {
        followPage.current += 1;
        fetchNextFollowPost();
      }
    }
  }, [inView]);

  // useEffect(() => {
  //   console.log(followPost, myPost);
  //   const postArray = [];
  //   if (!isMyPostLoading && !myPost.pages[myPage.current].isLast) {
  //     // myPost.pages.forEach((post) => {
  //     //   console.log(post);
  //     //   postArray.push(...post.data);
  //     //   // setAllPost([...allPost, ...post.data]);
  //     // });
  //     postArray.push(...myPost.pages[myPage.current].data);
  //   }
  //   if (!isFollowPostLoading && !followPost.pages[followPage.current].isLast) {
  //     // followPost.pages.forEach((post) => {
  //     //   console.log(post);
  //     //   postArray.push(...post.data);
  //     //   // setAllPost([...allPost, ...post.data]);
  //     // });
  //     postArray.push(...followPost.pages[followPage.current].data);
  //   }
  //   setAllPost([...allPost, ...postArray].sort(postSort));
  // }, [myPost, followPost]);

  useEffect(() => {
    if (!isMyPostLoading && !myPost.pages[myPage.current].isLast) {
      setAllPost(
        [...allPost, ...myPost.pages[myPage.current].data].sort(postSort)
      );
    }
  }, [myPost]);

  useEffect(() => {
    if (!isFollowPostLoading && !followPost.pages[followPage.current].isLast) {
      setAllPost(
        [...allPost, ...followPost.pages[followPage.current].data].sort(
          postSort
        )
      );
    }
  }, [followPost]);

  return (
    <>
      <BaseHeader
        image={hookieImage}
        rightIcon={searchIcon}
        rightClick={goToSearch}
        rightAlt="검색창 이동"
      />

      <S.Container>
        {allPost.length > 0 && <PostList postData={allPost} observer={ref} />}
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
