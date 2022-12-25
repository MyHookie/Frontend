import styled from 'styled-components';

import imageLayerIcon from '../../../assets/icon/icon-img-layers.png';

export const AlbumContainer = styled.li`
  position: relative;

  border: 1px solid ${({ theme }) => theme.color.LIGHT_GRAY};
  border-radius: ${({ theme }) => theme.borderRadius.BASE};

  overflow: hidden;
`;

export const AlbumImage = styled.img`
  height: 100%;

  object-fit: cover;
`;

export const LayerIcon = styled.div`
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
