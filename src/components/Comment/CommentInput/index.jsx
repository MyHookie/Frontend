import React from 'react';
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
`;

const SButton = styled.button`
  width: 2.5rem;
  font-size: 1.4rem;
  white-space: nowrap;
  color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

function CommentInput({ id }) {
  return (
    <SContents>
      <STitle>댓글 입력</STitle>
      <SProfileImg src={basicProfilSmallImg} alt="프로필 이미지" />
      <SLabel htmlFor={id} />
      <SInputForm id={id} placeholder="댓글 입력하기..." />
      <SButton type="button">게시</SButton>
    </SContents>
  );
}

export default CommentInput;
