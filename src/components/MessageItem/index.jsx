import React from 'react';
import styled from 'styled-components';
import profile from '../../assets/basic-profile_small.png';

const SMessageItem = styled.li`
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
  margin-right: auto;
  margin-left: calc(4.2rem + 1.2rem);
  background-color: ${({ theme }) => theme.color.WHITE};
  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
  border-top-left-radius: 0;
`;

const STime = styled.time`
  position: absolute;
  right: 2rem;
  bottom: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.color.GRAY};
`;

const SProfileImg = styled.img.attrs({
  src: `${profile}`,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.2rem;
  height: 4.2rem;
  margin-left: auto;
`;

const SUploadedImgContainer = styled.div`
  position: relative;
  margin-left: calc(4.2rem + 1.2rem);
  width: 24rem;
  height: 24rem;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
`;

const SUploadedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.BASE};
`;

function MessageItem({ text, time, img }) {
  return (
    <SMessageItem>
      <SProfileImg />
      {img ? (
        <SUploadedImgContainer>
          <SUploadedImg src={img} />
        </SUploadedImgContainer>
      ) : (
        <SDialogBox>{text}</SDialogBox>
      )}
      <STime>{time}</STime>
    </SMessageItem>
  );
}

export default MessageItem;
