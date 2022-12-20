import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import * as S from './index.styles';

import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';
import heartIcon from '../../../assets/icon/icon-heart.png';
import filledHeartIcon from '../../../assets/icon/icon-heart-fill.png';
import commentIcon from '../../../assets/icon/icon-message-circle.png';
import BottomSheet from '../../Modal/BottomSheet';
import BottomSheetContent from '../../Modal/BottomSheet/BottomSheetContent';
import Dialog from '../../Modal/Dialog';
import TagItem from '../TagItem';

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
    const jsonContents = JSON.parse(content);

    setTagArray(jsonContents.tags);
    setContents(jsonContents.content);
    setImages(image.split(', '));
  }, []);

  const settings = {
    dots: true,
    speed: 1000,
  };

  return (
    <>
      <S.PostItem
        detail={detail}
        onClick={() => (detail ? null : goPostDetailPage(postId))}
      >
        <S.UserInfoContainer>
          <img src={author.image} alt="프로필 이미지" />
          <S.TextBox>
            <S.UserName>{author.username}</S.UserName>
            <S.AccountName>{author.accountname}</S.AccountName>
          </S.TextBox>
        </S.UserInfoContainer>
        <S.Contents detail={detail}>
          <S.TagList>
            {tagArray.map((tag) => (
              <TagItem key={nanoid()} tagText={tag.text} tagColor={tag.color} />
            ))}
          </S.TagList>
          {contents}
        </S.Contents>
        {image && (
          <S.StyledSlider {...settings}>
            {images.map((src) => (
              <S.Image
                key={nanoid()}
                src={`https://mandarin.api.weniv.co.kr/${src}`}
                alt="img"
              />
            ))}
          </S.StyledSlider>
        )}
        <S.BottomContainer>
          <S.IConContainer>
            <S.Icon>
              <img
                src={hearted ? filledHeartIcon : heartIcon}
                alt="좋아요 수"
              />
              {heartCount}
            </S.Icon>
            <S.Icon>
              <img src={commentIcon} alt="댓글 수" />
              {commentCount}
            </S.Icon>
          </S.IConContainer>
          <S.Date>{createdAt.slice(0, 10)}</S.Date>
        </S.BottomContainer>
        {!detail && (
          <S.VerticalButton onClick={handleBottomSheetOpen}>
            <img src={verticalIcon} alt="포스트 설정 버튼" />
          </S.VerticalButton>
        )}
      </S.PostItem>
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
