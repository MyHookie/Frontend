import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './index.style';
import BaseHeader from '../../../components/common/BaseHeader';
import MessageItem from '../../../components/Message/MessageItem';
import MessageItemYours from '../../../components/Message/MessageItemYours';
import leftIcon from '../../../assets/icon/icon-arrow-left.png';
import rightIcon from '../../../assets/icon/s-icon-more-vertical.png';
import MessageInputBar from '../../../components/Message/MessageInput';
import BottomSheet from '../../../components/Modal/BottomSheet';
import BottomSheetContent from '../../../components/Modal/BottomSheet/BottomSheetContent';
import chatData from './chatData.json';

const id = '사용자 닉네임';

function ChatDetail() {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [chats, setChats] = useState([]);
  const [inputText, setInputText] = useState('');
  const nextChatId = useRef(chatData.chats.length + 1);
  const navigate = useNavigate();

  const goToChatList = () => {
    navigate(`/Chat`);
  };

  const handleBottomSheetOpen = (e) => {
    e.stopPropagation();
    setIsBottomSheetOpen(!isBottomSheetOpen);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputText.length === 0) {
      return;
    }

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const chat = {
      id: nextChatId.current,
      content: inputText,
      date: `${hours}:${minutes}`,
    };

    setChats([...chats, chat]);
    setInputText('');
    nextChatId.current += 1;
  };

  const scrollRef = useRef();
  useEffect(() => {
    scrollRef.current.scrollIntoView();
  }, [chats]);

  return (
    <S.Container>
      <BaseHeader
        leftIcon={leftIcon}
        title={id}
        leftClick={goToChatList}
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
        {chatData.chats.map((data) => (
          <MessageItem key={data.id} text={data.content} time={data.date} />
        ))}
        {chats.map((data) => (
          <MessageItemYours
            key={data.id}
            text={data.content}
            time={data.date}
          />
        ))}
      </S.MessageList>
      <MessageInputBar
        value={inputText}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
      <div ref={scrollRef} />
    </S.Container>
  );
}

export default ChatDetail;
