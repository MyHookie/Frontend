import React from 'react';
import styled from 'styled-components';

import profileImg from '../../../assets/basic-profile_small.png';
import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';
import heartIcon from '../../../assets/icon/icon-heart.png';
import filledHeartIcon from '../../../assets/icon/icon-heart-fill.png';
import commentIcon from '../../../assets/icon/icon-message-circle.png';

const SPostItem = styled.li`
  position: relative;
  width: 100%;
  padding: 1.4rem;
  border: 1px solid gray;
  border-radius: 1rem;
`;

const SUserInfoContainer = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 1.6rem;
  gap: 1.8rem;
  img {
    width: 50px;
  }
`;

const STextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
`;

const SUserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const SAccountName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;

const STagList = styled.p`
  background-color: lightblue;
  padding: 0.3rem 0.6rem;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
`;

const SContents = styled.p`
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  line-height: 1.8rem;

  margin-bottom: 1.4rem;
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
  background-color: tomato;
`;

const SBottomContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 0.3rem;
  gap: 0.5rem;
`;

const SIConContainer = styled.div`
  display: flex;
  gap: 1.7rem;
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

const SDate = styled.div`
  font-size: ${({ theme }) => theme.fontSize.SMALL};
  color: ${({ theme }) => theme.color.GRAY};
`;

const SVerticleButton = styled.button`
  position: absolute;
  top: 1.4rem;
  right: 1.7rem;

  width: 1.8rem;
`;

function PostItem({
  content,
  image,
  createdAt,
  hearted,
  heartedCount,
  commentCount,
  author,
}) {
  return (
    <SPostItem>
      <SUserInfoContainer>
        <img src={profileImg} alt="프로필 이미지" />
        <STextBox>
          <SUserName>{author.username}</SUserName>
          <SAccountName>{author.accountname}</SAccountName>
          <STagList>#메리크리스마스</STagList>
        </STextBox>
      </SUserInfoContainer>
      <SContents>{content}</SContents>
      {image && (
        <SImageContainer>
          <SImage src={image} alt="img" />
        </SImageContainer>
      )}
      <SBottomContainer>
        <SIConContainer>
          <SIcon>
            <img src={hearted ? heartIcon : filledHeartIcon} alt="좋아요 수" />
            {heartedCount}
          </SIcon>
          <SIcon>
            <img src={commentIcon} alt="댓글 수" />
            {commentCount}
          </SIcon>
        </SIConContainer>
        <SDate>{createdAt}</SDate>
      </SBottomContainer>
      <SVerticleButton>
        <img src={verticalIcon} alt="포스트 설정 버튼" />
      </SVerticleButton>
    </SPostItem>
  );
}

export default PostItem;
