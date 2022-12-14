import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dummyList from '../dummyList';
import PostItem from '../PostItem';

const SPostList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  gap: 2rem;
`;

function PostList() {
  const navigate = useNavigate();

  const goPostDetailPage = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <SPostList>
      {dummyList.map((item) => (
        <PostItem
          key={item.id}
          postId={item.id}
          content={item.content}
          author={item.author}
          image={item.image}
          hearted={item.hearted}
          heartedCount={item.heartedCount}
          commentCount={item.commentCount}
          createdAt={item.createdAt}
          goPostDetailPage={goPostDetailPage}
        />
      ))}
    </SPostList>
  );
}

export default PostList;
