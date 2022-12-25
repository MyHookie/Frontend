import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import * as S from './index.styles';
import imageLayerIcon from '../../../assets/icon/icon-img-layers.png';

const AlbumContainer = styled.li`
  position: relative;

  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};

  overflow: hidden;
`;

const AlbumImage = styled.img`
  height: 100%;

  object-fit: cover;
`;

const LayerIcon = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;

  width: 2rem;
  height: 2rem;

  background-image: url(${imageLayerIcon});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

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
        <AlbumContainer>
          <AlbumImage
            src={`https://mandarin.api.weniv.co.kr/${imageArray[0]}`}
            alt="앨범형 첫번째 이미지"
          />
          {imageArray.length > 1 && <LayerIcon />}
        </AlbumContainer>
      )}
    </>
  );
}

export default AlbumPostItem;
