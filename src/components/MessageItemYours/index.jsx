import React from 'react';
import styled from 'styled-components';

const SContainer = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
`;

const SDialogBox = styled.div`
  position: relative;
  max-width: 24rem;
  padding: 1rem 1.2rem;
  margin-left: auto;
  padding: 1rem 1.2rem;
  background-color: ${({ theme }) => theme.color.LIGHT_BLUE};
  border: 1px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  border-top-right-radius: 0;
  color: ${({ theme }) => theme.color.WHITE};
`;

const STime = styled.time`
  position: absolute;
  left: -3rem;
  bottom: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.GRAY};
`;

function MessageItem({ text, time }) {
  return (
    <SContainer>
      <SDialogBox>
        {text}
        <STime>{time}</STime>
      </SDialogBox>
    </SContainer>
  );
}

export default MessageItem;
