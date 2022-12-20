import React from 'react';
import * as S from './index.style';
import profileImage from '../../assets/basic-profile.png';

function ProfileImageInput() {
  return (
    <S.Container>
      <S.ImageInput>
        <img src={profileImage} alt="프로필 이미지" />
        {/* <img src={uploadIcon} alt="업로드 아이콘" className="upload-icon" /> */}
      </S.ImageInput>
    </S.Container>
  );
}

export default ProfileImageInput;
