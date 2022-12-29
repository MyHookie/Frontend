import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';

import BottomSheet from '../../Modal/BottomSheet';
import BottomSheetContent from '../../Modal/BottomSheet/BottomSheetContent';
import Dialog from '../../Modal/Dialog';
import Snackbar from '../../Modal/SnackBar';
import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';
import basicProfileImage from '../../../assets/basic-profile.png';

import { deleteCommentItem, reportCommentItem } from '../../../api/comment';

const SContents = styled.div`
  margin: 0 0 1.6rem;
`;

const SCommentsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SUserInfo = styled.div`
  flex: 4 4 0;
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
  height: 3.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
  object-fit: contain;
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

const getCommentPostTime = (createdAt) => {
  const currentTime = new Date();
  const postTime = new Date(createdAt);

  const timeGap = Math.floor(
    (currentTime.getTime() - postTime.getTime()) / 1000 / 60
  );

  if (timeGap < 1) return '방금 전';
  if (timeGap < 60) {
    return `${timeGap}분 전`;
  }

  const timeGapHour = Math.floor(timeGap / 60);
  if (timeGapHour < 24) {
    return `${timeGapHour}시간 전`;
  }

  const timeGapDay = Math.floor(timeGap / 60 / 24);
  if (timeGapDay < 365) {
    return `${timeGapDay}일 전`;
  }

  return `${Math.floor(timeGapDay / 365)}년 전`;
};

function CommentItem({ commentId, content, createdAt, author }) {
  const queryClient = useQueryClient();

  const [accountName, setAccountName] = useState('');
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [bottomSheetTrigger, setBottomSheetTrigger] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);
  const [dialogType, setDialogType] = useState('');
  const [dialogMessage, setDialogMessage] = useState('');
  const [isDeleteMessage, setIsDeleteMessage] = useState(false);

  const param = useParams();
  const postId = param.id;

  const deleteComment = useMutation(
    () => deleteCommentItem(postId, commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  );
  const reportComment = useMutation(
    () => reportCommentItem(postId, commentId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    }
  );

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

  const handleDeleteMessage = () => {
    setIsDeleteMessage(true);
    return setTimeout(() => setIsDeleteMessage(false), 2000);
  };

  const handleDialogAction = () => {
    if (dialogType === '댓글 삭제하기') {
      deleteComment.mutate();
      handleDeleteMessage();
    } else if (dialogType === '댓글 신고하기') {
      reportComment.mutate();
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

  const handleErrorImage = (e) => {
    e.target.src = basicProfileImage;
  };

  return (
    <SContents>
      <SCommentsInfo>
        <SProfileImg
          src={author.image}
          alt="프로필 이미지"
          onError={handleErrorImage}
        />
        <SUserInfo>
          {author.username}
          <SCommentTime>{getCommentPostTime(createdAt)}</SCommentTime>
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
        {isDeleteMessage && <Snackbar content="댓글이 삭제되었습니다." />}
      </SCommentsInfo>
      <SComments>{content}</SComments>
    </SContents>
  );
}

export default CommentItem;
