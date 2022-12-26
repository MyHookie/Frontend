import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
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

  const [postDetailData, setPostDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetailPost = async (pathName) => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr${pathName}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
      setPostDetailData(response.data.post);
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const [commentList, setCommentList] = useState([]);

  const fetchCommentList = async (pathName) => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr${pathName}/comments`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
      setCommentList(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    fetchDetailPost(location.pathname);
    fetchCommentList(location.pathname);
  }, []);

  const [accountName, setAccountName] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetTrigger, setBottomSheetTrigger] = useState(false);

  useEffect(() => {
    setAccountName(JSON.parse(localStorage.getItem('accountName')));
  }, []);

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setBottomSheetTrigger(!bottomSheetTrigger);

    if (bottomSheetTrigger) {
      setTimeout(() => {
        setIsBottomSheetOpen(false);
        setBottomSheetTrigger(false);
      }, 500);
    }

    setIsBottomSheetOpen(true);
  };

  if (!isLoading) {
    // console.log(postDetailData);
  }

  return (
    <SPostDetail>
      <BaseHeader
        leftIcon={arrowIcon}
        leftClick={handleToHome}
        rightIcon={verticalIcon}
        rightClick={handleBottomSheetOpen}
        rightAlt="포스트 설정 버튼"
      />
      {isBottomSheetOpen &&
        postDetailData.author.accountname === accountName && (
          <BottomSheet
            handleClose={handleBottomSheetOpen}
            bottomSheetTrigger={bottomSheetTrigger}
          >
            <BottomSheetContent text="게시글 삭제하기" />
            <BottomSheetContent text="게시글 수정하기" />
          </BottomSheet>
        )}
      {isBottomSheetOpen &&
        postDetailData.author.accountname !== accountName && (
          <BottomSheet
            handleClose={handleBottomSheetOpen}
            bottomSheetTrigger={bottomSheetTrigger}
          >
            <BottomSheetContent text="게시글 신고하기" />
          </BottomSheet>
        )}

      {!isLoading && (
        <SContents>
          <STitle>게시물 상세 페이지</STitle>
          <PostItem
            key={postDetailData.id}
            postId={postDetailData.id}
            content={postDetailData.content}
            image={postDetailData.image}
            createdAt={postDetailData.createdAt}
            updatedAt={postDetailData.updatedAt}
            hearted={postDetailData.hearted}
            heartCount={postDetailData.heartCount}
            comment={postDetailData.comment}
            commentCount={postDetailData.commentCount}
            author={postDetailData.author}
            detail
          />
          <SDividingLine />
          {commentList.length !== 0 && (
            <CommentList commentList={commentList} />
          )}
        </SContents>
      )}

      <CommentInput />
    </SPostDetail>
  );
}

export default PostDetail;
