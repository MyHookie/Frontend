import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import BaseHeader from '../../../components/common/BaseHeader';
import BottomSheet from '../../../components/Modal/BottomSheet';
import BottomSheetContent from '../../../components/Modal/BottomSheet/BottomSheetContent';
import PostItem from '../../../components/Post/PostItem';
import dummyList from '../../../components/Post/dummyList';
import CommentInput from '../../../components/Comment/CommentInput';
import { IR } from '../../../styles/Util';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';
import CommentList from '../../../components/Comment/CommentList';

const SPostDetail = styled.div`
  padding-bottom: 5.8rem;
`;

const SContents = styled.section`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const STitle = styled.h2`
  ${IR}
`;

const SDividingLine = styled.div`
  height: 1px;
  margin: 2.2rem 1.6rem;
  background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

function PostDetail() {
  const navigate = useNavigate();

  const handleToHome = () => {
    navigate('/home');
  };

  const [commentData, setCommentData] = useState([]);

  const onCreateCommentData = (dataId, content, createdAt, author) => {
    const newCommentData = {
      dataId,
      content,
      createdAt,
      author,
    };
    setCommentData([...commentData, newCommentData]);
  };

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  return (
    <SPostDetail>
      <BaseHeader
        leftIcon={arrowIcon}
        leftClick={handleToHome}
        rightIcon={verticalIcon}
        rightClick={handleBottomSheetOpen}
        rightAlt="포스트 설정 버튼"
      />
      {isBottomSheetOpen && (
        <BottomSheet handleClose={handleBottomSheetOpen}>
          {/* 로그인 한 경우(내 글인 경우) => 삭제, 수정, 아니면 신고하기 */}
          <BottomSheetContent text="신고하기" />
          <BottomSheetContent text="신고하기" />
        </BottomSheet>
      )}

      {/* <SContents>
        <STitle>게시물 상세 페이지</STitle>
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
        {commentData.length !== 0 && <CommentList commentData={commentData} />}
      </SContents> */}

      <CommentInput onCreateCommentData={onCreateCommentData} />
    </SPostDetail>
  );
}

export default PostDetail;
