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
  // postDetail에서 fetch한 데이터를 postItem으로 전달하고, postItem에서 edit으로 이동

  // Home => PostList => PostItem
  // Home에서 데이터 fetch 받아오고 데이터를 => PostList => PostItem

  // PostItem에 Modal
  // Detail에서도 같은 역할을 하는 Modal
  // 게시물 삭제하기 로직, 수정하기 로직도 PostItem에 있는데 Detail에서도 만듬

  // 저 이벤트가 발생하는 트리거가 PostItem에서는 VerticalButton 이벤트 발생 트리거(모달창이 열림)
  // Detail에서는 Header에 right으로 모달이 열린다

  // Detail Page => PostItem

  // 디테일 페이지에서 isModalOpen? 이것만 만들어서 내려주면 나머지는 PostItem

  // 목표 => PostItem에 있는 삭제, 수정 로직을 Detail에서 사용하기

  // PostItem의 VerticalButton이 열릴때 발생하는 모달 이벤트를 Detail에서 Header를 클릭할때 발생하게 만들면 될듯

  // header 에서 눌렀을때 postItem에서 BottomSheet 모달이 열리게 하기

  // 현재 상태는 postItem에서 VerticalButton을 클릭하면 isBottomSheet 상태가 변하면서 열린다.

  // setIsBottomSheet을 Detail의 vertical에서도 클릭시 boolean값이 변하면 된다.
  //

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
