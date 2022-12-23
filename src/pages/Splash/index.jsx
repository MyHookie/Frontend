import React from 'react';
import * as S from './index.style';
import speechBubbleImage from '../../assets/speech-bubble.png';

function Splash() {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.SplashImage src={speechBubbleImage} />
      </S.ImageContainer>
    </S.Container>
  );
}

export default Splash;
