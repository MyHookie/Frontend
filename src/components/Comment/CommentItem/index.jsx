import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import BottomSheet from '../../Modal/BottomSheet';
import BottomSheetContent from '../../Modal/BottomSheet/BottomSheetContent';
import Dialog from '../../Modal/Dialog';
import Snackbar from '../../Modal/SnackBar';

import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';

const SContents = styled.div`
  margin: 0 0 1.6rem;
`;

const SCommentsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SUserInfo = styled.div`
  width: 100%;
  margin: 0 1.2rem;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const SCommentTime = styled.span`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  vertical-align: top;
  color: ${({ theme }) => theme.color.LIGHT_GRAY};

  &::before {
    content: 'ㆍ';
    padding-left: 0.6rem;
  }
`;

const SProfileImg = styled.img`
  width: 3.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
`;

const SVerticalButton = styled.button`
  width: 2rem;
`;

const SComments = styled.pre`
  margin: 0.4rem 4.8rem 0;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  word-break: break-all;
  white-space: pre-wrap;
  word-wrap: break-word;
`;

function CommentItem({ commentId, content, createdAt, author }) {
  const [accountName, setAccountName] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetTrigger, setBottomSheetTrigger] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const location = useLocation();
  const postId = location.pathname.slice(6);

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
    console.log(dialogType);
    if (dialogType === '댓글 삭제하기') {
      console.log('삭제해!');
      // deletePost.mutate();
    } else if (dialogType === '댓글 신고하기') {
      console.log('신고해!');
      handleSnackBar();
    }

    setBottomSheetTrigger(!bottomSheetTrigger);
    setIsBottomSheetOpen(!isBottomSheetOpen);
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    if (dialogType === '댓글 삭제하기') {
      setDialogMessage('정말 삭제하시겠습니까?');
    } else if (dialogType === '댓글 신고하기') {
      setDialogMessage('정말 신고하시겠습니까?');
    }
  }, [dialogType]);

  return (
    <SContents>
      <SCommentsInfo>
        <SProfileImg src={author.image} alt="프로필 이미지" />
        <SUserInfo>
          {author.accountname}
          <SCommentTime>{createdAt.slice(0, 10)}</SCommentTime>
        </SUserInfo>
        <SVerticalButton type="button" onClick={handleBottomSheetOpen}>
          <img src={verticalIcon} alt="댓글 설정 버튼" />
        </SVerticalButton>
        {isBottomSheetOpen && author.accountname === accountName && (
          <BottomSheet
            handleClose={handleBottomSheetOpen}
            bottomSheetTrigger={bottomSheetTrigger}
          >
            <BottomSheetContent
              text="댓글 삭제하기"
              onClick={handleDialogOpen}
            />
          </BottomSheet>
        )}
        {isBottomSheetOpen && author.accountname !== accountName && (
          <BottomSheet
            handleClose={handleBottomSheetOpen}
            bottomSheetTrigger={bottomSheetTrigger}
          >
            <BottomSheetContent
              text="댓글 신고하기"
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
      </SCommentsInfo>
      <SComments>{content}</SComments>
    </SContents>
  );
}

export default CommentItem;
