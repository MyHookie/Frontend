import React from 'react';

import basicProfileImage from '../../../assets/basic-profile.png';
import * as S from './index.styles';

function SearchedUser({
  image,
  username,
  intro,
  goToProfile,
  accountname,
  keyword,
}) {
  const leftText = username.split(keyword)[0];
  const rightText = username.split(keyword)[1];

  const handleErrorImage = (e) => {
    e.target.src = basicProfileImage;
  };

  return (
    <S.Content onClick={goToProfile}>
      <S.UserImage src={image} alt="프로필 이미지" onError={handleErrorImage} />
      <S.UserInfo>
        <S.UserName>
          {username.includes(keyword) ? (
            <p>
              {leftText}
              <strong>{keyword}</strong>
              {rightText}
            </p>
          ) : (
            <>{username}</>
          )}
        </S.UserName>
        <S.UserAccountName>@{accountname}</S.UserAccountName>

        <S.UserIntro>{intro}</S.UserIntro>
      </S.UserInfo>
    </S.Content>
  );
}

export default SearchedUser;
