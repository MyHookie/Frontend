import React, { useState } from 'react';
import styled from 'styled-components';

import basicProfilSmallImg from '../../../assets/basic-profile_small.png';
import { IR } from '../../../styles/Util';

const SContents = styled.section`
  position: fixed;
  bottom: 0;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.6rem;
  background-color: ${({ theme }) => theme.color.WHITE};
  border-top: 0.05rem solid ${({ theme }) => theme.color.LIGHT_GRAY};
`;

const STitle = styled.h2`
  ${IR}
`;

const SProfileImg = styled.img`
  width: 3.6rem;
`;

const SLabel = styled.label`
  ${IR}
`;

const SInputForm = styled.input`
  width: 100%;
  margin: 0 1.8rem;
  border-style: none;
  &::placeholder {
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

const SButton = styled.button`
  width: 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  white-space: nowrap;
  color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

function CommentInput({ id, getCommentData }) {
  const [commentValue, setCommentvalue] = useState('');

  const handleCommentValue = (e) => {
    setCommentvalue(e.target.value);
  };

  const handlePostClick = () => {
    setCommentvalue('');
    if (commentValue.length > 0) {
      getCommentData(commentValue);
    } else {
      alert('댓글을 입력해주세요.');
    }
  };

  return (
    <SContents>
      <STitle>댓글 입력</STitle>
      <SProfileImg src={basicProfilSmallImg} alt="프로필 이미지" />
      <SLabel htmlFor={id} />
      <SInputForm
        id={id}
        placeholder="댓글 입력하기..."
        value={commentValue}
        onChange={handleCommentValue}
      />
      <SButton type="button" onClick={handlePostClick}>
        게시
      </SButton>
    </SContents>
  );
}

export default CommentInput;
