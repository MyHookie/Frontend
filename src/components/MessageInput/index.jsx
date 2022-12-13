import React from 'react';
import styled from 'styled-components';
import uploadFileIcon from '../../assets/upload-file_grey.png';

const SChattingBar = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  height: 6rem;
  width: 100%;
  padding: 0 2rem;
  border-top: 1px solid #dddddd;
`;

const SUploadFileIcon = styled.img.attrs({
  src: `${uploadFileIcon}`,
})`
  width: 3.6rem;
  height: 3.6rem;
`;

const SMessageInput = styled.input`
  display: block;
  width: 80%;
  margin-left: 1.8rem;
  padding: 1.2rem 0;
  border-style: none;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  color: ${({ theme }) => theme.color.DARK_GRAY};

  &::placeholder {
    color: ${({ theme }) => theme.color.LIGHT_GRAY};
  }
`;

const SMessageSend = styled.button`
  width: 15%;
  margin-left: 1rem;
  padding: 1.2rem 0;

  color: ${({ theme }) => theme.color.LIGHT_GRAY};

  &:active {
    color: ${({ theme }) => theme.color.ACTIVE_BLUE};
  }
`;

function MessageInput() {
  return (
    <SChattingBar>
      <SUploadFileIcon />
      <SMessageInput placeholder="메시지 입력하기..." />
      <SMessageSend type="submit">전송</SMessageSend>
    </SChattingBar>
  );
}

export default MessageInput;
