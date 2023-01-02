import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import * as S from './index.styles';
import PostItem from '../../../components/Post/PostItem';
import CommentList from '../../../components/Comment/CommentList';
import CommentInput from '../../../components/Comment/CommentInput';

import { getDetailPost } from '../../../api/post';
import { getCommentList } from '../../../api/comment';

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
    <div>
      <S.Contents>
        <h2>게시물 상세 페이지</h2>
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
        <S.DividingLine />
        {!commentListLoading && commentList.length !== 0 && (
          <CommentList commentList={commentList} />
        )}
        <CommentInput />
      </S.Contents>
    </div>
  );
}

export default PostDetail;
