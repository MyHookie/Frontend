import React from 'react';
import styled from 'styled-components';
import BaseHeader from '../../../components/common/BaseHeader';
import ConfirmHeader from '../../../components/common/ConfirmHeader';
import MessageItem from '../../../components/MessageItem';
import MessageItemYours from '../../../components/MessageItemYours';

const SContainer = styled.div``;

const SMessageList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 0 16px;
  margin-top: 30px;
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

function ChatDetail(props) {
  return (
    <SContainer>
      <BaseHeader />
      <SMessageList>
        <MessageItem text={dummyText.message1} time={dummyTime.time1} />
        <MessageItem text={dummyText.message2} time={dummyTime.time2} />
        <MessageItemYours text={dummyText.message3} time={dummyTime.time3} />
      </SMessageList>
    </SContainer>
  );
}

export default ChatDetail;
