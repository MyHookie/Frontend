import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './index.style';
import basicProfileImage from '../../assets/basic-profile.png';

function ProfileImageInput() {
  const [profileImage, setProfileImage] = useState(basicProfileImage);
  const imageInput = useRef(null);

  const handleImageChange = useCallback((e) => {
    const currentImage = e.target.files[0];

    if (currentImage) {
      setProfileImage(currentImage);
      // 이미지 소스 로컬스토리지에 저장
      localStorage.setItem(
        'image',
        `https://mandarin.api.weniv.co.kr/${currentImage.name}`
      );
    } else {
      setProfileImage(basicProfileImage); // 이미지 업로드 취소할 경우 기본 프로필 이미지로 설정
      localStorage.setItem(
        'image',
        `https://mandarin.api.weniv.co.kr${basicProfileImage}`
      );
    }

    // 업로드 이미지 preview
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(currentImage);
  }, []);

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
