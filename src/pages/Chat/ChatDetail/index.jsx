import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import BaseHeader from '../../../components/common/BaseHeader';
import MessageItem from '../../../Message/MessageItem';
import MessageItemYours from '../../../Message/MessageItemYours';
import leftIcon from '../../../assets/icon/icon-arrow-left.png';
import rightIcon from '../../../assets/icon/s-icon-more-vertical.png';
import MessageInputBar from '../../../Message/MessageInput';
import BottomSheet from '../../../components/Modal/BottomSheet';
import BottomSheetContent from '../../../components/Modal/BottomSheet/BottomSheetContent';

const SContainer = styled.div`
  background-color: #f2f2f2;
`;
const SMessageList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 90vh;
  gap: 0.9rem;
  padding: 3rem 1.6rem 8rem;
`;

const dummyText = {
  message1:
    '옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다.',
  message2: '안녕하세요. 감귤 사고싶어요요요요요',
  message3: '네 말씀하세요.',
};

const dummyTime = {
  time1: '12:39',
  time2: '12:41',
  time3: '12:50',
};

const dummyImg = 'https://via.placeholder.com/240x240/D9D9D9/000000';

const nickName = '사용자 닉네임';

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
    <SContainer>
      <BaseHeader
        leftIcon={leftIcon}
        title={nickName}
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

      <SMessageList>
        {/* <MessageItem text={dummyText.message1} time={dummyTime.time1} />
        <MessageItem img={dummyImg} time={dummyTime.time2} />
        <MessageItemYours text={dummyText.message3} time={dummyTime.time3} />
        <MessageItemYours text={dummyText.message3} time={dummyTime.time3} /> */}
        <MessageItemYours img={dummyImg} time={dummyTime.time3} />
      </SMessageList>
      <MessageInputBar />
    </SContainer>
  );
}

export default ChatDetail;
