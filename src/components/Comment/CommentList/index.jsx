import React from 'react';
import styled from 'styled-components';
import CommentItem from '../CommentItem';

const SCommentList = styled.div`
  margin: 0 1.6rem;
`;

function CommentList({ commentData }) {
  return (
    <SCommentList>
      {commentData.map((item) => (
        <CommentItem
          // key={item.dataId}
          key={commentData.indexOf(item)}
          content={item.content}
          createdAt={item.createdAt}
          author={item.author}
        />
      ))}
    </SCommentList>
  );
}

export default CommentList;
