import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import * as S from './index.style';
import speechBubbleImage from '../../assets/speech-bubble.png';
import loginState from '../../atoms/login';

function Splash() {
  const navigate = useNavigate();

  const isLogin = useRecoilValue(loginState);

  useEffect(() => {
    setTimeout(
      () => (!isLogin ? navigate('/welcome') : navigate('/home')),
      1800
    );
  }, [isLogin]);

  return (
    <S.Container>
      <S.ImageContainer>
        <S.SplashImage src={speechBubbleImage} alt="후키 로고" />
      </S.ImageContainer>
    </S.Container>
  );
}

export default Splash;
