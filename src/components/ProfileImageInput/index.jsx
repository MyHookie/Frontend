import React, { useRef, useState } from 'react';
import * as S from './index.style';
import basicProfileImage from '../../assets/basic-profile.png';

function ProfileImageInput() {
  const [profileImage, setProfileImage] = useState(basicProfileImage);
  const imageInput = useRef(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setProfileImage(e.target.files[0]);
    } else {
      setProfileImage(basicProfileImage); // 이미지 업로드 취소할 경우 기본 프로필 이미지로 설정
    }

    // 업로드 이미지 preview
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  return (
    <S.Container
      onClick={() => {
        imageInput.current.click();
      }}
    >
      <S.ImageInput src={profileImage} />
      <input
        type="file"
        accept="image/jpg, image/jpeg, image/png, image/gif, image/bmp, image/tif, image/heic"
        ref={imageInput}
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </S.Container>
  );
}

export default ProfileImageInput;
