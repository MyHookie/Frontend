import React, { useState } from 'react';
import styled from 'styled-components';

import profileImg from '../../../assets/basic-profile_small.png';
import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';
import heartIcon from '../../../assets/icon/icon-heart.png';
import filledHeartIcon from '../../../assets/icon/icon-heart-fill.png';
import commentIcon from '../../../assets/icon/icon-message-circle.png';
import { multiEllipsis } from '../../../styles/Util';

const SPostItem = styled.li`
  position: relative;
  width: 100%;
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: 1rem;
`;

const SUserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.5rem;
  gap: 1.4rem;
  img {
    width: 5rem;
  }
`;

const STextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SUserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const SAccountName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
  margin-bottom: 0.4rem;
`;

const SContents = styled.div`
  ${multiEllipsis}
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};

  margin-bottom: 1.4rem;
`;

const STagList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const STagItem = styled.li`
  background-color: lightblue;
  padding: 0.2rem 0.6rem;
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
`;

const SImageContainer = styled.div`
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1.6rem;
`;

const SImage = styled.img`
  height: 23rem;
  object-fit: contain;
  border-radius: 1rem;
`;

const SBottomContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.3rem;
  gap: 0.5rem;
`;

const SIConContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 0.2rem;
`;

const SIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.GRAY};

  img {
    width: 2.2rem;
    margin-right: 0.7rem;
  }
`;

const SDate = styled.time`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;

const SVerticalButton = styled.button`
  position: absolute;
  top: 1.4rem;
  right: 1.7rem;

  width: 1.8rem;
`;

function PostItem({
  postId,
  content,
  image,
  createdAt,
  hearted,
  heartedCount,
  commentCount,
  author,
  goPostDetailPage,
}) {
  return (
    <SPostItem onClick={() => goPostDetailPage(postId)}>
      <SUserInfoContainer>
        <img src={profileImg} alt="프로필 이미지" />
        <STextBox>
          <SUserName>{author.username}</SUserName>
          <SAccountName>{author.accountname}</SAccountName>
        </STextBox>
      </SUserInfoContainer>
      <SContents>
        <STagList>
          <STagItem>#메리마스메리크리스ㅁㅇㄴㅁㄴ마스메리크리스마스</STagItem>
          <STagItem>#메리크스</STagItem>
          <STagItem>#메리스마스</STagItem>
        </STagList>
        {content}
      </SContents>
      {image && (
        <SImageContainer>
          <SImage src={image} alt="img" />
        </SImageContainer>
      )}
      <SBottomContainer>
        <SIConContainer>
          <SIcon>
            <img src={hearted ? filledHeartIcon : heartIcon} alt="좋아요 수" />
            {heartedCount}
          </SIcon>
          <SIcon>
            <img src={commentIcon} alt="댓글 수" />
            {commentCount}
          </SIcon>
        </SIConContainer>
        <SDate>{createdAt}</SDate>
      </SBottomContainer>
      <SVerticalButton>
        <img src={verticalIcon} alt="포스트 설정 버튼" />
      </SVerticalButton>
    </SPostItem>
  );
}

export default PostItem;
