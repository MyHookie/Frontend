import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import styled from 'styled-components';

import PostItem from '../../../components/Post/PostItem';
import CommentList from '../../../components/Comment/CommentList';
import CommentInput from '../../../components/Comment/CommentInput';
import { IR } from '../../../styles/Util';
import { getDetailPost } from '../../../api/post';
import { getCommentList } from '../../../api/comment';

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
  const param = useParams();
  const postId = param.id;

  const { data: postDetailData, isLoading: postDetailLoading } = useQuery(
    ['postDetail', postId],
    () => getDetailPost(postId)
  );
  const { data: commentList, isLoading: commentListLoading } = useQuery(
    ['commentList', postId],
    () => getCommentList(postId)
  );

  return (
    <SPostDetail>
      <SContents>
        <STitle>게시물 상세 페이지</STitle>
        {!postDetailLoading && (
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
        )}
        <SDividingLine />
        {console.log(commentList)}
        {!commentListLoading && commentList.length !== 0 && (
          <CommentList commentList={commentList} />
        )}
      </SContents>

      <CommentInput />
    </SPostDetail>
  );
}

export default PostDetail;
