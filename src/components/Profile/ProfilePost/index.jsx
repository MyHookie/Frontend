import React, { useEffect, useRef, useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import { useInView } from 'react-intersection-observer';

import * as S from './index.styles';
import logoGrey from '../../../assets/logo_grey.png';
import postListOnIcon from '../../../assets/icon/icon-post-list-on.png';
import postListOffIcon from '../../../assets/icon/icon-post-list-off.png';
import postAlbumOnIcon from '../../../assets/icon/icon-post-album-on.png';
import postAlbumOffIcon from '../../../assets/icon/icon-post-album-off.png';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';
import Button from '../../common/Button';
import PostList from '../../Post/PostList';
import PostSkeleton from '../../Skeleton/PostSkeleton';

import { getAccountPost } from '../../../api/post';

function ProfilePost({ accountName }) {
  const [isListPost, setIsListPost] = useState(true);
  const count = useRef(0);
  const [ref, inView] = useInView();

  const {
    data: profilePost,
    isLoading,
    fetchNextPage,
  } = useInfiniteQuery(
    ['profilePostList', accountName],
    ({ pageParam = count.current }) => getAccountPost(accountName, pageParam),
    {
      getNextPageParam: (nextPage) => nextPage.skip + 1,
    }
  );

  useEffect(() => {
    if (inView && !profilePost.pages[count.current].isLast) {
      count.current += 1;
      fetchNextPage();
    }
  }, [inView]);

  const handleListPost = () => {
    setIsListPost(true);
  };
  const handleAlbumPost = () => {
    setIsListPost(false);
  };

  return (
    <S.PostContainer>
      <S.PostTypeContainer>
        <S.PostTypeButton onClick={handleListPost}>
          <img
            src={isListPost ? postListOnIcon : postListOffIcon}
            alt="리스트형 포스트"
          />
        </S.PostTypeButton>
        <S.PostTypeButton onClick={handleAlbumPost}>
          <img
            src={isListPost ? postAlbumOffIcon : postAlbumOnIcon}
            alt="앨범형 포스트"
          />
        </S.PostTypeButton>
      </S.PostTypeContainer>
      {isLoading && (
        <S.PostSkeletonContainer>
          <PostSkeleton />
          <PostSkeleton />
        </S.PostSkeletonContainer>
      )}
      {!isLoading && profilePost?.pages[0].data.length === 0 && (
        <S.EmptyContainer>
          <S.EmptyImage src={logoGrey} alt="로고 이미지" />
          <S.EmptyContent>게시글이 없습니다 !</S.EmptyContent>
          <Button text="게시물 작성하기" buttonStyle={LARGE_BUTTON} />
        </S.EmptyContainer>
      )}
      {!isLoading &&
        profilePost?.pages[0].data.length > 0 &&
        profilePost?.pages.map((post) => (
          <PostList
            key={post.skip}
            postData={post.data}
            isAlbum={!isListPost}
            observer={ref}
          />
        ))}
    </S.PostContainer>
  );
}

export default ProfilePost;
