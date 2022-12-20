import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

import profileImg from '../../../assets/basic-profile_small.png';
import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';
import heartIcon from '../../../assets/icon/icon-heart.png';
import filledHeartIcon from '../../../assets/icon/icon-heart-fill.png';
import commentIcon from '../../../assets/icon/icon-message-circle.png';
import { multiEllipsis } from '../../../styles/Util';
import BottomSheet from '../../Modal/BottomSheet';
import BottomSheetContent from '../../Modal/BottomSheet/BottomSheetContent';
import Dialog from '../../Modal/Dialog';
import TagItem from '../TagItem';

const SPostItem = styled.li`
  position: relative;
  width: 100%;
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: 1rem;

  ${({ detail }) =>
    detail &&
    css`
      border: none;
    `}
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

  ${({ detail }) =>
    detail &&
    css`
      overflow: auto;
      display: block;
    `}
`;

const STagList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
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
  right: 1.3rem;

  width: 1.8rem;
`;

function PostItem({
  postId,
  content,
  image,
  createdAt,
  hearted,
  heartCount,
  commentCount,
  author,
  goPostDetailPage,
  detail,
}) {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [tagArray, setTagArray] = useState([]);
  const [contents, setContents] = useState('');
  const [images, setImages] = useState([]);

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  const handleDialogOpen = () => {
    setIsDialogOpen(!isDialogOpen);
  };

  const handlePostDelete = () => {
    // post 삭제 로직 구현
    setIsBottomSheetOpen(!isBottomSheetOpen);
    setIsDialogOpen(!isDialogOpen);
  };

  useEffect(() => {
    console.log(JSON.parse(content));
    const jsonContents = JSON.parse(content);

    setTagArray(jsonContents.tags);
    setContents(jsonContents.content);
    setImages(image.split(', '));
  }, []);

  return (
    <>
      <SPostItem
        detail={detail}
        onClick={() => (detail ? null : goPostDetailPage(postId))}
      >
        <SUserInfoContainer>
          <img src={author.image} alt="프로필 이미지" />
          <STextBox>
            <SUserName>{author.username}</SUserName>
            <SAccountName>{author.accountname}</SAccountName>
          </STextBox>
        </SUserInfoContainer>
        <SContents detail={detail}>
          <STagList>
            {tagArray.map((tag) => (
              <TagItem tagText={tag.text} tagColor={tag.color} />
            ))}
          </STagList>
          {contents}
        </SContents>
        {image && (
          <SImageContainer>
            {images.map((src) => (
              <SImage
                src={`https://mandarin.api.weniv.co.kr/${src}`}
                alt="img"
              />
            ))}
          </SImageContainer>
        )}
        <SBottomContainer>
          <SIConContainer>
            <SIcon>
              <img
                src={hearted ? filledHeartIcon : heartIcon}
                alt="좋아요 수"
              />
              {heartCount}
            </SIcon>
            <SIcon>
              <img src={commentIcon} alt="댓글 수" />
              {commentCount}
            </SIcon>
          </SIConContainer>
          <SDate>{createdAt.slice(0, 10)}</SDate>
        </SBottomContainer>
        {!detail && (
          <SVerticalButton onClick={handleBottomSheetOpen}>
            <img src={verticalIcon} alt="포스트 설정 버튼" />
          </SVerticalButton>
        )}
      </SPostItem>
      {isBottomSheetOpen && (
        <BottomSheet handleClose={handleBottomSheetOpen}>
          {/* 로그인 한 경우(내 글인 경우) => 삭제, 수정, 아니면 신고하기 */}
          <BottomSheetContent text="삭제하기" onClick={handleDialogOpen} />
          <BottomSheetContent text="신고하기" />
        </BottomSheet>
      )}
      {isDialogOpen && (
        <Dialog
          dialogText="게시물을 정말 삭제하시겠습니까?"
          handleClose={handleDialogOpen}
          handleSubmit={handlePostDelete}
        />
      )}
    </>
  );
}

export default PostItem;
