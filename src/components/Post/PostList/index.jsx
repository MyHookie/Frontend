import React from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './index.styles';
import AlbumPostItem from '../AlbumPostItem';
import PostItem from '../PostItem';

function PostList({ postData, isAlbum }) {
  const navigate = useNavigate();

  const goPostDetailPage = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <>
      {!isAlbum && (
        <S.PostList>
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
        </S.PostList>
      )}
      {isAlbum && (
        <S.PostAlbum>
          {postData.map((item) => (
            <AlbumPostItem
              key={item.id}
              postId={item.id}
              image={item.image}
              goPostDetailPage={goPostDetailPage}
            />
          ))}
        </S.PostAlbum>
      )}
    </>
  );
}

export default PostList;
