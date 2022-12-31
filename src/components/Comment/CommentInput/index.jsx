import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import * as S from './index.styles';
import Snackbar from '../../Modal/SnackBar';

import { postCommentData } from '../../../api/comment';

function CommentInput({ id }) {
  const queryClient = useQueryClient();

  const param = useParams();
  const postId = param.id;
  const textarea = useRef(null);

  const [commentData, setCommentData] = useState('');
  const [isSnackBarOpen, setIsSnackBarOpen] = useState(false);

  const postComment = useMutation(() => postCommentData(postId, commentData), {
    onSuccess: () => {
      queryClient.invalidateQueries(['commentList', postId]);
    },
  });

  const handleSnackBar = () => {
    setIsSnackBarOpen(true);
    return setTimeout(() => setIsSnackBarOpen(false), 2000);
  };

  const handleResizeHeight = () => {
    textarea.current.style.height = 'auto';
    const height = textarea.current.scrollHeight;
    if (height < 57) {
      textarea.current.style.height = `${height}px`;
    } else {
      textarea.current.style.height = `57px`;
    }
  };

  const handleCommentData = (e) => {
    setCommentData(e.target.value);
    handleResizeHeight();
  };

  const handleCommentSubmit = () => {
    if (commentData.length < 1) {
      handleSnackBar();
    } else {
      postComment.mutate();
      setCommentData('');
      window.scrollTo({
        top: window.innerHeight + 1000,
        left: 0,
        behavior: 'smooth',
      });
      textarea.current.style.height = 'auto';
    }
  };

  return (
    <S.Contents>
      <h2>댓글 입력</h2>
      <S.ProfileImg
        src={JSON.parse(localStorage.getItem('imageSrc'))}
        alt="프로필 이미지"
      />
      <S.Label htmlFor={id}>댓글 입력창</S.Label>
      <S.InputForm
        type="text"
        id={id}
        placeholder="댓글 입력하기..."
        name="content"
        value={commentData}
        onChange={handleCommentData}
        rows="1"
        ref={textarea}
      />

      <S.Button
        type="button"
        onClick={handleCommentSubmit}
        contentLength={commentData.length}
      >
        게시
      </S.Button>
      {isSnackBarOpen && <Snackbar content="댓글을 입력해주세요." />}
    </S.Contents>
  );
}

export default CommentInput;
