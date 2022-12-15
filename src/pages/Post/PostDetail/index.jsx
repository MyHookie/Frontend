import React from 'react';
import styled from 'styled-components';

import BaseHeader from '../../../components/common/BaseHeader';
import PostItem from '../../../components/Post/PostItem';
import dummyList from '../../../components/Post/dummyList';
import CommentItem from '../../../components/Comment/CommentItem';
import CommentInput from '../../../components/Comment/CommentInput';
import { IR } from '../../../styles/Util';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';

const STitle = styled.h2`
  ${IR}
`;

const SContents = styled.section`
  height: 115vh;
  font-size: 1.4rem;
`;

const SDividingLine = styled.div`
  height: 1px;
  margin: 2.2rem 1.6rem;
  background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

function PostDetail() {
  return (
    <>
      <BaseHeader
        leftIcon={arrowIcon}
        rightIcon={verticalIcon}
        rightClick={() => {}}
        rightAlt="포스트 설정 버튼"
      />

      <SContents>
        <STitle>게시물 상세 페이지</STitle>
        {/* 현재 주소에서 유저 아이디만 잘라서 가져와 게시물 상세 페이지 보여주기 */}
        <PostItem
          key={dummyList[0].id}
          postId={dummyList[0].id}
          content={dummyList[0].content}
          author={dummyList[0].author}
          image={dummyList[0].image}
          hearted={dummyList[0].hearted}
          heartedCount={dummyList[0].heartedCount}
          commentCount={dummyList[0].commentCount}
          createdAt={dummyList[0].createdAt}
          detail
        />
        <SDividingLine />
        <CommentItem />
      </SContents>

      <CommentInput />
    </>
  );
}

export default PostDetail;
