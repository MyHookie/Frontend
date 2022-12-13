import React from 'react';
import styled from 'styled-components';
import profile from '../../assets/basic-profile_small.png';

const SContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const SDialogBox = styled.span`
  position: relative;
  font-size: inherit;
  width: 24rem;
  padding: 1rem 1.2rem;
  margin-left: 5.4rem;
  border: 1px solid #dddddd;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  border-top-left-radius: 0;
`;

const STime = styled.time`
  position: absolute;
  bottom: 1.2rem;
  left: 24.6rem;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.GRAY};
`;

function MessageItem({ text, time }) {
  return (
    <SContainer>
      <img
        src={profile}
        alt="상대방의 프로필 이미지입니다."
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '42px',
          height: '42px',
        }}
      />
      <SDialogBox>
        {text}
        <STime>{time}</STime>
      </SDialogBox>
    </SContainer>
  );
}

export default MessageItem;
