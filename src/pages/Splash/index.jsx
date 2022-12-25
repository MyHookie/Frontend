import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './index.style';
import speechBubbleImage from '../../assets/speech-bubble.png';
import checkTokenValid from '../../api/tokenValid';

function Splash() {
  const navigate = useNavigate();
  const [isToken, setIsToken] = useState(false);

  useEffect(() => {
    (async function checkToken() {
      return (await checkTokenValid()) ? setIsToken(true) : setIsToken(false);
    })();
  }, []);

  useEffect(() => {
    setTimeout(
      () => (!isToken ? navigate('/welcome') : navigate('/home')),
      2000
    );
  }, [isToken]);

  return (
    <S.Container>
      <S.ImageContainer>
        <S.SplashImage src={speechBubbleImage} alt="후키 로고" />
      </S.ImageContainer>
    </S.Container>
  );
}

export default Splash;
