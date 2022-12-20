import React, { useState } from 'react';
import styled from 'styled-components';

import basicProfilSmallImg from '../../../assets/basic-profile_small.png';
import { IR } from '../../../styles/Util';

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
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
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

function CommentInput({ id, onCreateCommentData }) {
  const [commentData, setCommentData] = useState({
    dataId: 'test',
    content: '',
    createdAt: '방금 전',
    author: {
      id: 'testId',
      username: 'test',
      accountname: 'test',
      intro: 'Hello world!',
      image: 'https://picsum.photos/250/250',
      isfollow: true,
    },
  });

  const handleResizeHeight = () => {
    //  DOM 접근할 때, useRef 사용해서 바꿔보기
    const textarea = document.querySelector('.autoTextarea');

    if (textarea) {
      const height = textarea.scrollHeight;
      if (height < 57) {
        textarea.style.height = `${height + 1}px`;
      } else {
        textarea.style.height = `57px`;
      }
    }
  };

  const handleCommentData = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value,
    });
    handleResizeHeight();
  };

  const handleCommentSubmit = () => {
    if (commentData.content.length < 1) {
      alert('댓글을 입력해주세요.');
    } else {
      const textarea = document.querySelector('.autoTextarea');
      textarea.style.height = 'auto';
      onCreateCommentData(
        commentData.dataId,
        commentData.content,
        commentData.createdAt,
        commentData.author
      );
      setCommentData({
        dataId: 'test',
        content: '',
        createdAt: '방금 전',
        author: {
          id: 'testId',
          username: 'test',
          accountname: 'test',
          intro: 'Hello world!',
          image: 'https://picsum.photos/250/250',
          isfollow: true,
        },
      });
    }
  };

  return (
    <SContents>
      <STitle>댓글 입력</STitle>
      <SProfileImg src={basicProfilSmallImg} alt="프로필 이미지" />
      <SLabel htmlFor={id}>댓글 입력창</SLabel>
      <SInputForm
        type="text"
        id={id}
        placeholder="댓글 입력하기..."
        name="content"
        value={commentData.content}
        onChange={handleCommentData}
        rows="1"
        className="autoTextarea"
      />

      <SButton
        type="button"
        onClick={handleCommentSubmit}
        contentLength={commentData.content.length}
      >
        게시
      </SButton>
    </SContents>
  );
}

export default CommentInput;
