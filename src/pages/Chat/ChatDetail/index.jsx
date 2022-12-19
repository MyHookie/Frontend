import React, { useState, useCallback } from 'react';

import { useNavigate } from 'react-router-dom';
import * as S from './index.style';
import BaseHeader from '../../../components/common/BaseHeader';
import MessageItem from '../../../Message/MessageItem';
import MessageItemYours from '../../../Message/MessageItemYours';
import leftIcon from '../../../assets/icon/icon-arrow-left.png';
import rightIcon from '../../../assets/icon/s-icon-more-vertical.png';
import MessageInputBar from '../../../Message/MessageInput';
import BottomSheet from '../../../components/Modal/BottomSheet';
import BottomSheetContent from '../../../components/Modal/BottomSheet/BottomSheetContent';

const id = '사용자 닉네임';

function ChatDetail() {
  const navigate = useNavigate();
  const leftClick = () => {
    navigate(`/Chat`);
  };

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  return (
    <S.Container>
      <BaseHeader
        leftIcon={leftIcon}
        title={id}
        leftClick={leftClick}
        rightIcon={rightIcon}
        rightClick={handleBottomSheetOpen}
      />
      {isBottomSheetOpen && (
        <BottomSheet handleClose={handleBottomSheetOpen}>
          <BottomSheetContent text="신고하기" />
          <BottomSheetContent text="신고하기" />
        </BottomSheet>
      )}

      <S.MessageList>
        {/* <MessageItem text={dummyText.message1} time={dummyTime.time1} />
        <MessageItem img={dummyImg} time={dummyTime.time2} />
        <MessageItemYours text={dummyText.message3} time={dummyTime.time3} />
        <MessageItemYours text={dummyText.message3} time={dummyTime.time3} /> */}
        <MessageItemYours />
      </S.MessageList>
      <MessageInputBar />
    </S.Container>
  );
}

export default ChatDetail;
