import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './index.styles';
import BaseHeader from '../../components/common/BaseHeader';
import Navigation from '../../components/common/Navigation';
import leftArrowIcon from '../../assets/icon/icon-arrow-left.png';
import verticalIcon from '../../assets/icon/s-icon-more-vertical.png';
import UserInfo from '../../components/Profile/UserInfo';
import PostList from '../../components/Post/PostList';
import { LARGE_BUTTON } from '../../constants/buttonStyle';
import logoGrey from '../../assets/logo_grey.png';
import Button from '../../components/common/Button';
import postListOnIcon from '../../assets/icon/icon-post-list-on.png';
import postListOffIcon from '../../assets/icon/icon-post-list-off.png';
import postAlbumOnIcon from '../../assets/icon/icon-post-album-on.png';
import postAlbumOffIcon from '../../assets/icon/icon-post-album-off.png';

import getProfileInfo from '../../api/profile';
import { getMyPost } from '../../api/post';
import BottomSheet from '../../components/Modal/BottomSheet';
import BottomSheetContent from '../../components/Modal/BottomSheet/BottomSheetContent';

function Profile() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const navigate = useNavigate();
  const param = useParams();
  const isMyPage =
    param.accountname === JSON.parse(localStorage.getItem('accountName'));

  const { data, isLoading, isError } = useQuery('profileInfo', () =>
    getProfileInfo(param.accountname)
  );

  const {
    data: myPost,
    isLoading: isMyPostLoading,
    isError: isMyPostError,
  } = useQuery('myPostList', getMyPost);

  if (!isLoading) {
    console.log(data.profile);
  }

  const goBackPage = () => {
    navigate(-1);
  };

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  return (
    <>
      <BaseHeader
        leftIcon={leftArrowIcon}
        leftClick={goBackPage}
        rightIcon={verticalIcon}
        rightAlt="프로필 설정"
        rightClick={handleBottomSheetOpen}
      />
      <S.Container>
        {!isLoading && (
          <UserInfo
            followerCount={data.profile.followerCount}
            followingCount={data.profile.followingCount}
            profileImage={data.profile.image}
            userName={data.profile.username}
            accountName={data.profile.accountname}
            intro={data.profile.intro}
            isFollow={data.profile.isfollow}
            isMyPage={isMyPage}
          />
        )}
        <S.PostContainer>
          <S.PostTypeContainer>
            <S.PostTypeButton>
              <img src={postListOnIcon} alt="리스트형 포스트" />
            </S.PostTypeButton>
            <S.PostTypeButton>
              <img src={postAlbumOnIcon} alt="앨범형 포스트" />
            </S.PostTypeButton>
          </S.PostTypeContainer>
          {myPost?.post.length > 0 ? (
            <PostList postData={myPost.post} myPage />
          ) : (
            <S.EmptyContainer>
              <S.EmptyImage src={logoGrey} alt="로고 이미지" />
              <S.EmptyContent>게시글이 없습니다 !</S.EmptyContent>
              <Button text="게시물 작성하기" buttonStyle={LARGE_BUTTON} />
            </S.EmptyContainer>
          )}
        </S.PostContainer>
      </S.Container>

      <Navigation />
      {isBottomSheetOpen && (
        <BottomSheet handleClose={handleBottomSheetOpen}>
          <BottomSheetContent text="다크모드" />
          <BottomSheetContent text="로그아웃" />
        </BottomSheet>
      )}
    </>
  );
}

export default Profile;
