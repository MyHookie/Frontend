import React, { useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';
import styled from 'styled-components';

import Snackbar from '../../Modal/SnackBar';
import { IR } from '../../../styles/Util';

import { postCommentData } from '../../../api/comment';

const SContents = styled.section`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 2.3rem 1.6rem 2rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border-top: 0.05rem solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;

const STitle = styled.h2`
  ${IR}
`;

const SProfileImg = styled.img`
  position: absolute;
  left: 1.6rem;
  bottom: 1.2rem;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
  object-fit: contain;
`;

const SLabel = styled.label`
  ${IR}
`;

const SInputForm = styled.textarea`
  width: 70%;
  margin: 0 1.8rem;
  padding: 0;
  border-style: none;
  font-family: 'LINESeedKR-Rg';
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};

  &::placeholder {
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

const SButton = styled.button`
  position: absolute;
  right: 1.6rem;
  bottom: 2.1rem;
  width: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  white-space: nowrap;
  color: ${({ theme, contentLength }) =>
    contentLength === 0 ? theme.color.LIGHT_GRAY : theme.color.LIGHT_BLUE};
`;

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
    <SContents>
      <STitle>댓글 입력</STitle>
      <SProfileImg
        src={JSON.parse(localStorage.getItem('imageSrc'))}
        alt="프로필 이미지"
      />
      <SLabel htmlFor={id}>댓글 입력창</SLabel>
      <SInputForm
        type="text"
        id={id}
        placeholder="댓글 입력하기..."
        name="content"
        value={commentData}
        onChange={handleCommentData}
        // onKeyDown={handlePressEnter}
        rows="1"
        ref={textarea}
      />

      <SButton
        type="button"
        onClick={handleCommentSubmit}
        contentLength={commentData.length}
      >
        게시
      </SButton>
      {isSnackBarOpen && <Snackbar content="댓글을 입력해주세요." />}
    </SContents>
  );
}

export default CommentInput;
