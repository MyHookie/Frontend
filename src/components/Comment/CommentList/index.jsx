import React from 'react';

import * as S from './index.styles';
import CommentItem from '../CommentItem';

function CommentList({ commentList }) {
  const commentListSort = commentList.slice(0).reverse();

  return (
    <S.CommentList>
      {commentListSort.map((item) => (
        <CommentItem
          key={item.id}
          commentId={item.id}
          content={item.content}
          createdAt={item.createdAt}
          author={item.author}
        />
      ))}
    </S.CommentList>
  );
}

export default CommentList;
