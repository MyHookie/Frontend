import React from 'react';
import styled from 'styled-components';
import deleteButton from '../../../assets/icon/x_shadow.png';

const SPreviewImageContainer = styled.div`
  position: relative;

  width: 10.4rem;
  min-width: 10.4rem;
  border-radius: 1.5rem;
  border: 1px solid ${({ theme }) => theme.BORDER};

  overflow: hidden;

  img {
    height: 100%;
    object-fit: cover;
  }
  button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 1.8rem;
  }
`;

function PreviewImageItem({ src, handleImageDelete }) {
  return (
    <SPreviewImageContainer>
      <img src={src} alt="미리보기 이미지" />
      <button type="button" onClick={handleImageDelete}>
        <img src={deleteButton} alt="미리보기 이미지 삭제" />
      </button>
    </SPreviewImageContainer>
  );
}

export default PreviewImageItem;
