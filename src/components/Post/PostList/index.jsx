import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PostItem from '../PostItem';

const SPostList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 1rem;

  padding: 1rem;
  padding-bottom: 7rem;
`;

function PostList({ postData }) {
  const navigate = useNavigate();

  const goPostDetailPage = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <SPostList>
      {postData.map((item) => (
        <PostItem
          key={item.id}
          postId={item.id}
          content={item.content}
          image={item.image}
          createdAt={item.createdAt}
          updatedAt={item.updatedAt}
          hearted={item.hearted}
          heartCount={item.heartCount}
          comment={item.comment}
          commentCount={item.commentCount}
          author={item.author}
          goPostDetailPage={goPostDetailPage}
        />
      ))}
    </SPostList>
  );
}

export default PostList;
