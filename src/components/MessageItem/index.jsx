import React from 'react';
import styled from 'styled-components';
import profile from '../../assets/basic-profile_small.png';

const SContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const SDialogBox = styled.div`
  position: relative;
  max-width: 24rem;
  min-height: 4.2rem;
  padding: 1rem 1.2rem;
  margin-left: calc(4.2rem + 1.2rem);
  border: 1px solid #dddddd;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  border-top-left-radius: 0;
`;

const STime = styled.time`
  position: absolute;
  right: -3rem;
  bottom: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.GRAY};
`;

const SImg = styled.img.attrs({
  src: `${profile}`,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 42px;
  height: 42px;
`;

function MessageItem({ text, time }) {
  return (
    <SContainer>
      <SImg />
      <SDialogBox>
        {text}
        <STime>{time}</STime>
      </SDialogBox>
    </SContainer>
  );
}

export default MessageItem;
