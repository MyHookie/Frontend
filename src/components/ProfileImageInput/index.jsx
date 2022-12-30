import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useMutation } from 'react-query';
import heic2any from 'heic2any';

import * as S from './index.style';
import basicProfileImage from '../../assets/basic-profile.png';
import { profileImage } from '../../atoms/profileInfo';

import getImageFilename from '../../api/image';

const getImageFile = async (file) => {
  if (file.name.split('.')[1] === 'HEIC') {
    const resultBlob = await heic2any({ blob: file, toType: 'image/jpeg' });

    const convertFile = new File(
      [resultBlob],
      `${file.name.split('.')[0]}.jpeg`,
      { type: 'image/jpeg', lastModified: new Date().getTime() }
    );

    return convertFile;
  }

  return file;
};

function ProfileImageInput({ savedImage }) {
  const [profileImages, setProfileImages] = useState('');
  const setImage = useSetRecoilState(profileImage);
  const imageInput = useRef(null);

  useEffect(() => {
    if (savedImage) {
      setProfileImages(savedImage);
      setImage(savedImage);
    } else {
      setProfileImages(basicProfileImage);
    }
  }, []);

  const postImageFile = useMutation((image) => getImageFilename(image), {
    onSuccess: (data) => {
      setImage(`https://mandarin.api.weniv.co.kr/${data}`);
      setProfileImages(`https://mandarin.api.weniv.co.kr/${data}`);
    },
  });

  const handleImageChange = useCallback(async (e) => {
    const currentImage = e.target.files[0];

    if (currentImage) {
      const imageFile = await getImageFile(currentImage);
      postImageFile.mutate(imageFile);
    } else {
      setProfileImages(basicProfileImage);
      setImage('');
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
