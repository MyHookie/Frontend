import React from 'react';
import styled from 'styled-components';
import CommentItem from '../CommentItem';

const SCommentList = styled.div`
  margin: 0 1.6rem;
`;

function CommentList({ commentList }) {
  const commentListSort = commentList.slice(0).reverse();

  return (
    <SCommentList>
      {commentListSort.map((item) => (
        <CommentItem
          key={item.id}
          commentId={item.id}
          content={item.content}
          createdAt={item.createdAt}
          author={item.author}
        />
      ))}
    </SCommentList>
  );
}

export default CommentList;
