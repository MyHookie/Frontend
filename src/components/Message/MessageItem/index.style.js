import styled from 'styled-components';
import profile from '../../../assets/basic-profile_small.png';

export const MessageItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

export const DialogBox = styled.div`
  position: relative;
  max-width: 24rem;
  min-height: 4.2rem;
  padding: 1rem 1.2rem;
  margin-right: auto;
  margin-left: calc(4.2rem + 1.2rem);
  background-color: ${({ theme }) => theme.BACKGROUND};
  border: 1px solid ${({ theme }) => theme.BORDER};
  border-radius: 1rem;
  border-top-left-radius: 0;
`;

export const Time = styled.time`
  position: absolute;
  right: -3.5rem;
  bottom: 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.SUB_TEXT};
`;

export const ProfileImg = styled.img.attrs({
  src: `${profile}`,
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 4.2rem;
  height: 4.2rem;
  margin-left: auto;
`;

export const UploadedImgContainer = styled.div`
  position: relative;
  margin-left: calc(4.2rem + 1.2rem);
  width: 24rem;
  height: 24rem;
  border-radius: 1rem;
`;

export const UploadedImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1rem;
`;
