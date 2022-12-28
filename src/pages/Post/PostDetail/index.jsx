import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import PostItem from '../../../components/Post/PostItem';
import CommentList from '../../../components/Comment/CommentList';
import CommentInput from '../../../components/Comment/CommentInput';
import { IR } from '../../../styles/Util';

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
  const [postDetailData, setPostDetailData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetailPost = async (pathName) => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr${pathName}`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
      setPostDetailData(response.data.post);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const [commentList, setCommentList] = useState([]);

  const fetchCommentList = async (pathName) => {
    try {
      const response = await axios.get(
        `https://mandarin.api.weniv.co.kr${pathName}/comments`,
        {
          headers: {
            Authorization: `Bearer ${JSON.parse(
              localStorage.getItem('token')
            )}`,
            'Content-type': 'application/json',
          },
        }
      );
      setCommentList(response.data.comments);
    } catch (error) {
      console.log(error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    fetchDetailPost(location.pathname);
    fetchCommentList(location.pathname);
  }, []);

  return (
    <SPostDetail>
      {!isLoading && (
        <SContents>
          <STitle>게시물 상세 페이지</STitle>
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
          <SDividingLine />
          {commentList.length !== 0 && (
            <CommentList commentList={commentList} />
          )}
        </SContents>
      )}

      <CommentInput />
    </SPostDetail>
  );
}

export default PostDetail;
