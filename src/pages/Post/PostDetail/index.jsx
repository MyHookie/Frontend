import React from 'react';
import styled from 'styled-components';

import BaseHeader from '../../../components/common/BaseHeader';
import CommentItem from '../../../components/Comment/CommentItem';
import CommentInput from '../../../components/Comment/CommentInput';
import { IR } from '../../../styles/Util';

import arrowIcon from '../../../assets/icon/icon-arrow-left.png';
import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';

const STitle = styled.h2`
  ${IR}
`;

const SContents = styled.section`
  height: 110vh;
  font-size: 1.4rem;
`;

const SPost = styled.div`
  height: 45rem;
  background-color: tomato;
`;

const SDividingLine = styled.div`
  height: 1px;
  margin: 2.2rem 1.6rem;
  background-color: ${({ theme }) => theme.color.LIGHT_GRAY};
`;

function PostDetail() {
  return (
    <>
      <BaseHeader
        leftIcon={arrowIcon}
        rightIcon={verticalIcon}
        rightClick={() => {}}
        rightAlt="포스트 설정 버튼"
      />
      <SContents>
        <STitle>게시물 상세 페이지</STitle>
        <SPost />
        <SDividingLine />
        <CommentItem />
      </SContents>
      <CommentInput />
    </>
  );
}

export default PostDetail;
