import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as S from './index.style';
import speechBubbleImage from '../../assets/speech-bubble.png';
import darkModeSpeechBubbleImage from '../../assets/logo_darkmode.png';
import loginState from '../../atoms/login';

function Splash() {
  const navigate = useNavigate();

  const isLogin = useRecoilValue(loginState);

  const theme = JSON.parse(localStorage.getItem('theme'));

  useEffect(() => {
    const time = setTimeout(
      () => (!isLogin ? navigate('/welcome') : navigate('/home')),
      1800
    );
    return () => clearTimeout(time);
  }, [isLogin]);

  return (
    <S.Container>
      <S.ImageContainer>
        <S.SplashImage
          src={theme === 'dark' ? darkModeSpeechBubbleImage : speechBubbleImage}
          alt="후키 로고"
        />
      </S.ImageContainer>
    </S.Container>
  );
}

export default Splash;
