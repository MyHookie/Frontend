import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';

import * as S from './index.style';
import basicProfileImage from '../../assets/basic-profile.png';
import { profileImage } from '../../atoms/profileInfo';

function ProfileImageInput({ savedImage }) {
  const [profileImages, setProfileImages] = useState('');
  const setImage = useSetRecoilState(profileImage);
  const imageInput = useRef(null);

  useEffect(() => {
    console.log(savedImage);
    if (savedImage) {
      setProfileImages(savedImage);
      setImage(savedImage);
    } else {
      setProfileImages(basicProfileImage);
    }
  }, []);

  const fetchImage = async (image) => {
    const formData = new FormData();

    formData.append('image', image);

    try {
      const res = await axios.post(
        `https://mandarin.api.weniv.co.kr/image/uploadfile`,
        formData
      );

      setProfileImages(`https://mandarin.api.weniv.co.kr/${res.data.filename}`);
      setImage(`https://mandarin.api.weniv.co.kr/${res.data.filename}`);

      return res.data.filename;
    } catch (error) {
      return error;
    }
  };

  const handleImageChange = useCallback((e) => {
    const currentImage = e.target.files[0];
    console.log(currentImage);

    if (currentImage) {
      fetchImage(currentImage);
    } else {
      setProfileImages(basicProfileImage);
      fetchImage(basicProfileImage);
    }
  }, []);

  return (
    <S.Container
      onClick={() => {
        imageInput.current.click();
      }}
    >
      <S.ImageInput src={profileImages} />
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
