import React from 'react';
import * as S from './index.style';

function MessageInputBar({ handleInputChange, handleFormSubmit, value }) {
  return (
    <S.ChattingBar onSubmit={handleFormSubmit}>
      <S.UploadFileIcon />
      <S.MessageInput
        required
        placeholder="메시지 입력하기..."
        value={value}
        onChange={handleInputChange}
      />
      <S.MessageSend type="submit" inputText={value}>
        전송
      </S.MessageSend>
    </S.ChattingBar>
  );
}

export default MessageInputBar;
