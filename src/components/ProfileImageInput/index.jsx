import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';

import * as S from './index.style';
import basicProfileImage from '../../assets/basic-profile.png';

function ProfileImageInput({ handleProfileImage }) {
  const [profileImage, setProfileImage] = useState(basicProfileImage);
  const imageInput = useRef(null);

  const fetchImage = async (image) => {
    const formData = new FormData();

    formData.append('image', image);

    try {
      const res = await axios.post(
        `https://mandarin.api.weniv.co.kr/image/uploadfile`,
        formData
      );

      handleProfileImage(res.data.filename);

      return res.data.filename;
    } catch (error) {
      return error;
    }
  };

  const handleImageChange = useCallback((e) => {
    const currentImage = e.target.files[0];

    if (currentImage) {
      fetchImage(currentImage);
    } else {
      setProfileImage(basicProfileImage);
      fetchImage(basicProfileImage);
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
