import React, { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import BaseHeader from '../../../components/common/BaseHeader';
import BottomSheet from '../../../components/Modal/BottomSheet';
import BottomSheetContent from '../../../components/Modal/BottomSheet/BottomSheetContent';
import PostItem from '../../../components/Post/PostItem';
import dummyList from '../../../components/Post/dummyList';
import CommentInput from '../../../components/Comment/CommentInput';
import Dialog from '../../../components/Modal/Dialog';
import Snackbar from '../../../components/Modal/SnackBar';
import { IR } from '../../../styles/Util';
import { deleteMyPost, reportFollowPost } from '../../../api/post';

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
    } catch (error) {
      console.log(error);
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

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [tagArray, setTagArray] = useState([]);
  const [contents, setContents] = useState('');
  const [images, setImages] = useState([]);
  const [accountName, setAccountName] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetTrigger, setBottomSheetTrigger] = useState(false);

  const postId = location.pathname.slice(6);
  const deletePost = useMutation(() => deleteMyPost(postId));
  const reportPost = useMutation(() => reportFollowPost(postId));

  useEffect(() => {
    if (!isLoading) {
      const jsonContents = JSON.parse(postDetailData.content);

      setTagArray(jsonContents.tags);
      setContents(jsonContents.content);
      setImages(postDetailData.image.split(', '));
    }
    setAccountName(JSON.parse(localStorage.getItem('accountName')));
  }, []);

  const goToEditPage = () => {
    navigate(`/post/edit/${postId}`, {
      state: {
        postId,
        editTagArray: tagArray,
        editContent: contents,
        editImages: images,
      },
    });
  };

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

  const handleDialogOpen = (e) => {
    if (isDialogOpen) {
      setIsDialogOpen(false);
      setDialogType('');
    } else {
      setIsDialogOpen(true);
      setDialogType(e.target.textContent);
    }
  };

  const handleSnackBar = () => {
    setIsSnackBarOpen(true);
    return setTimeout(() => setIsSnackBarOpen(false), 2000);
  };

  const handleDialogAction = () => {
    if (dialogType === '게시글 삭제하기') {
      deletePost.mutate();
    } else if (dialogType === '게시글 신고하기') {
      reportPost.mutate();
      handleSnackBar();
    }

    setBottomSheetTrigger(!bottomSheetTrigger);
    setIsBottomSheetOpen(!isBottomSheetOpen);
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    if (dialogType === '게시글 삭제하기') {
      setDialogMessage('정말 삭제하시겠습니까?');
    } else if (dialogType === '게시글 신고하기') {
      setDialogMessage('정말 신고하시겠습니까?');
    }
  }, [dialogType]);

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
            <BottomSheetContent
              text="게시글 삭제하기"
              onClick={handleDialogOpen}
            />
            <BottomSheetContent text="게시글 수정하기" onClick={goToEditPage} />
          </BottomSheet>
        )}
      {isBottomSheetOpen &&
        postDetailData.author.accountname !== accountName && (
          <BottomSheet
            handleClose={handleBottomSheetOpen}
            bottomSheetTrigger={bottomSheetTrigger}
          >
            <BottomSheetContent
              text="게시글 신고하기"
              onClick={handleDialogOpen}
            />
          </BottomSheet>
        )}
      {isDialogOpen && (
        <Dialog
          dialogText={dialogMessage}
          handleClose={handleDialogOpen}
          handleSubmit={handleDialogAction}
        />
      )}
      {isSnackBarOpen && <Snackbar content="신고가 접수되었습니다." />}

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
