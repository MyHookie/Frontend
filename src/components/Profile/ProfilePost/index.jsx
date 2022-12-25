import React from 'react';
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

function ProfilePost({ accountName }) {
  const { data, isLoading, isError } = useQuery('myPostList', () =>
    getAccountPost(accountName)
  );

  return (
    <S.PostContainer>
      <S.PostTypeContainer>
        <S.PostTypeButton>
          <img src={postListOnIcon} alt="리스트형 포스트" />
        </S.PostTypeButton>
        <S.PostTypeButton>
          <img src={postAlbumOnIcon} alt="앨범형 포스트" />
        </S.PostTypeButton>
      </S.PostTypeContainer>
      {data?.post.length > 0 ? (
        <PostList postData={data.post} myPage />
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
