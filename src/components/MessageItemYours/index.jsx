import React from 'react';
import styled from 'styled-components';

const SMessageItemYours = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.MEDIUM};
  margin-left: auto;
`;

const SDialogBox = styled.div`
  position: relative;
  max-width: 24rem;
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

const SUploadedImgContainer = styled.div`
  position: relative;
  margin-right: auto;
  width: 24rem;
  height: 24rem;
  overflow: hidden;
`;

function MessageItem({ text, time, img }) {
  const SUploadedImg = styled.img.attrs({
    src: `${img}`,
  })`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: ${({ theme }) => theme.borderRadius.BASE};
  `;
  return (
    <SMessageItemYours>
      {img ? (
        <SUploadedImgContainer>
          <SUploadedImg src={img} />
        </SUploadedImgContainer>
      ) : (
        <SDialogBox>{text}</SDialogBox>
      )}
      <STime>{time}</STime>
    </SMessageItemYours>
  );
}

export default MessageItem;
