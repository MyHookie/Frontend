import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';
import Title from '../../../components/Title';
import AuthInputForm from '../../../components/AuthInputForm';
import authAxios from '../../../api/authAxios';
import * as S from './index.style';

function Login() {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isCorrect, setIsCorrect] = useState(true);
  const [loginWarningMsg, setLoginWarningMsg] = useState('');
  const [buttonNotAllow, setButtonNotAllow] = useState(true);

  const navigate = useNavigate();
  const inputRef = useRef(null);

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  useEffect(() => {
    if (loginEmail && loginPassword) {
      return (
        setButtonNotAllow(false) ||
        setIsCorrect(true) ||
        setLoginWarningMsg(null)
      );
    }
    return setButtonNotAllow(true);
  }, [loginEmail, loginPassword]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleLoginClick = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const res = await authAxios.post('/login', {
          user: {
            email: loginEmail,
            password: loginPassword,
          },
        });

        if (!res.data.message) {
          const userData = res.data.user;
          const { token, accountname, image } = userData;

          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('accountName', JSON.stringify(accountname));
          localStorage.setItem('imageSrc', JSON.stringify(image));

          navigate('/home');
        }

        if (res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
          setIsCorrect(false);
          setLoginWarningMsg('* 이메일 또는 비밀번호가 일치하지 않습니다.');
          inputRef.current.focus();
        } else {
          setIsCorrect(true);
        }
      } catch (error) {
        console.log(error);
      }
    },
    [loginEmail, loginPassword]
  );

  return (
    <S.Container>
      <Title>로그인</Title>
      <S.FormContainer>
        <AuthInputForm
          id="email"
          label="이메일"
          inputProps={{
            type: 'email',
            placeholder: '이메일을 입력해주세요',
          }}
          inputRef={inputRef}
          handleLoginState={handleLoginEmail}
          isCorrect={isCorrect}
          inputValue={loginEmail}
          warningMsg={loginWarningMsg}
        />
        <AuthInputForm
          id="password"
          label="비밀번호"
          inputProps={{
            type: 'password',
            placeholder: '비밀번호를 입력해주세요',
          }}
          handleLoginState={handleLoginPassword}
          inputValue={loginPassword}
          isCorrect={isCorrect}
        />
        <S.LoginButton
          text="로그인"
          buttonStyle={LARGE_BUTTON}
          onClick={handleLoginClick}
          disabled={buttonNotAllow}
        />
      </S.FormContainer>
      <S.SignUpLink to="/signup">이메일로 회원가입</S.SignUpLink>
    </S.Container>
  );
}

export default Login;
