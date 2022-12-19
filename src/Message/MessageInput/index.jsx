import React, { useState, useCallback } from 'react';
import * as S from './index.style';

function MessageInput() {
  return (
    <S.ChattingBar>
      <S.UploadFileIcon />
      <S.MessageInput required placeholder="메시지 입력하기..." />
      <S.MessageSend type="submit">전송</S.MessageSend>
    </S.ChattingBar>
  );
}

export default MessageInput;
