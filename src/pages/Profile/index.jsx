import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './index.styles';
import BaseHeader from '../../components/common/BaseHeader';
import Navigation from '../../components/common/Navigation';
import leftArrowIcon from '../../assets/icon/icon-arrow-left.png';
import verticalIcon from '../../assets/icon/s-icon-more-vertical.png';
import UserInfo from '../../components/Profile/UserInfo';
import PostList from '../../components/Post/PostList';

import getProfileInfo from '../../api/profile';
import { getMyPost } from '../../api/post';
import { LARGE_BUTTON } from '../../constants/buttonStyle';
import logoGrey from '../../assets/logo_grey.png';
import Button from '../../components/common/Button';

function Profile() {
  const param = useParams();
  const isMyPage = param.id === JSON.parse(localStorage.getItem('accountName'));

  const { data, isLoading, isError } = useQuery('profileInfo', () =>
    getProfileInfo(param.id)
  );

  const {
    data: myPost,
    isLoading: isMyPostLoading,
    isError: isMyPostError,
  } = useQuery('myPostList', getMyPost);

  if (!isLoading) {
    console.log(data.profile);
  }

  return (
    <>
      <BaseHeader
        leftIcon={leftArrowIcon}
        leftClick={() => {}}
        rightIcon={verticalIcon}
        rightAlt="프로필 설정"
        rightClick={() => {}}
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
        {myPost?.length > 0 ? (
          <PostList postData={myPost} />
        ) : (
          <S.EmptyContainer>
            <S.EmptyImage src={logoGrey} alt="로고 이미지" />
            <S.EmptyContent>게시글이 없습니다 !</S.EmptyContent>
            <Button text="게시물 작성하기" buttonStyle={LARGE_BUTTON} />
          </S.EmptyContainer>
        )}
      </S.Container>

      <Navigation />
    </>
  );
}

export default Profile;
