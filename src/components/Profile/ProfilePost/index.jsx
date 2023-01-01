import React, { useState } from 'react';
import { useQuery } from 'react-query';

import * as S from './index.styles';
import logoGrey from '../../../assets/logo_grey.png';
import postListOnIcon from '../../../assets/icon/icon-post-list-on.png';
import postListOffIcon from '../../../assets/icon/icon-post-list-off.png';
import postAlbumOnIcon from '../../../assets/icon/icon-post-album-on.png';
import postAlbumOffIcon from '../../../assets/icon/icon-post-album-off.png';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';
import Button from '../../common/Button';

import { getAccountPost } from '../../../api/post';
import PostList from '../../Post/PostList';
import PostSkeleton from '../../Skeleton/PostSkeleton';

function ProfilePost({ accountName }) {
  const [isListPost, setIsListPost] = useState(true);

  const { data, isLoading, isError } = useQuery(
    ['profilePostList', accountName],
    () => getAccountPost(accountName)
  );

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
      {data?.post.length > 0 && !isLoading ? (
        <PostList postData={data.post} isAlbum={!isListPost} />
      ) : (
        <S.EmptyContainer>
          <S.EmptyImage src={logoGrey} alt="로고 이미지" />
          <S.EmptyContent>게시글이 없습니다 !</S.EmptyContent>
          <Button text="게시물 작성하기" buttonStyle={LARGE_BUTTON} />
        </S.EmptyContainer>
      )}
    </S.PostContainer>
  );
}

export default ProfilePost;
