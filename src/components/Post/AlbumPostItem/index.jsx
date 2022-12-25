import React, { useEffect, useState } from 'react';

import * as S from './index.styles';

function AlbumPostItem({ image }) {
  const [imageArray, setImageArray] = useState([]);

  useEffect(() => {
    if (image) {
      setImageArray(image.split(', '));
    }
  }, []);

  return (
    <>
      {imageArray.length > 0 && (
        <S.AlbumContainer>
          <S.AlbumImage
            src={`https://mandarin.api.weniv.co.kr/${imageArray[0]}`}
            alt="앨범형 첫번째 이미지"
          />
          {imageArray.length > 1 && <S.LayerIcon />}
        </S.AlbumContainer>
      )}
    </>
  );
}

export default AlbumPostItem;
