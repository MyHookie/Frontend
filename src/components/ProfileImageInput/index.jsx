import React from 'react';
import * as S from './index.style';
import profileImage from '../../assets/basic-profile.png';

function ProfileImageInput() {
  return (
    <S.Container>
      <S.ImageInput>
        <img src={profileImage} alt="프로필 이미지" />
      </S.ImageInput>
    </S.Container>
  );
}

export default ProfileImageInput;
