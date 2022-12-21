import React from 'react';
import styled from 'styled-components';
import { slEllipsis } from '../../../styles/Util';

const SContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1.2rem 0rem;
  padding: 0rem 1rem;
`;

const SUserImage = styled.img`
  min-width: 5rem;
  width: 5rem;
  min-height: 5rem;
  height: 5rem;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.borderRadius.ROUND};
`;

const SUserInfo = styled.div`
  width: 100%;
  margin: 0 1.2rem;
`;

const SUserName = styled.p`
  font-size: 1.4rem;
`;

const SUserIntro = styled.p`
  ${slEllipsis};
  font-size: 1.2rem;
  color: ${({ theme }) => theme.color.GRAY};
  padding-right: 7rem;
`;

function SearchedUser({ image, username, intro, goToProfile }) {
  return (
    <SContent onClick={goToProfile}>
      <SUserImage src={image} alt="프로필 이미지" />
      <SUserInfo>
        <SUserName>{username}</SUserName>
        <SUserIntro>{intro}</SUserIntro>
      </SUserInfo>
    </SContent>
  );
}

export default SearchedUser;
