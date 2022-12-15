import React, { useState } from 'react';
import styled from 'styled-components';
import BottomSheet from '../../Modal/BottomSheet';
import BottomSheetContent from '../../Modal/BottomSheet/BottomSheetContent';

import verticalIcon from '../../../assets/icon/s-icon-more-vertical.png';
import basicProfilSmallImg from '../../../assets/basic-profile_small.png';

const SContents = styled.div`
  height: 5.8rem;
  margin: 0 1.6rem 1.6rem;
`;

const SCommentsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SUserInfo = styled.div`
  width: 100%;
  margin: 0 1.2rem;
  font-size: 1.4rem;
`;

const SCommentTime = styled.span`
  font-size: 1rem;
  vertical-align: top;
  color: ${({ theme }) => theme.color.LIGHT_GRAY};

  &::before {
    content: 'ㆍ';
    padding-left: 0.6rem;
  }
`;

const SProfileImg = styled.img`
  width: 3.6rem;
`;

const SVerticalButton = styled.button`
  width: 2rem;
`;

const SComments = styled.p`
  margin: 0.4rem 4.8rem 0;
  font-size: 1.4rem;
`;

function CommentItem() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  return (
    <SContents>
      <SCommentsInfo>
        <SProfileImg src={basicProfilSmallImg} alt="프로필 이미지" />
        <SUserInfo>
          userId
          <SCommentTime>5분 전</SCommentTime>
        </SUserInfo>
        <SVerticalButton type="button" onClick={handleBottomSheetOpen}>
          <img src={verticalIcon} alt="댓글 설정 버튼" />
        </SVerticalButton>
        {isBottomSheetOpen && (
          <BottomSheet handleClose={handleBottomSheetOpen}>
            {/* 로그인 한 경우(내 댓글인 경우) => 삭제 아니면 신고하기 */}
            <BottomSheetContent text="신고하기" />
            <BottomSheetContent text="신고하기" />
          </BottomSheet>
        )}
      </SCommentsInfo>
      <SComments>comments</SComments>
    </SContents>
  );
}

export default CommentItem;
