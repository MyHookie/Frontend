import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AuthInputForm from '../../../components/AuthInputForm';
import Button from '../../../components/common/Button';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';
import Title from '../../../components/Title';
import authAxios from '../../../api/authAxios';

const SContainer = styled.div`
  padding: 3.4rem;
  height: 100vh;
`;

const SFormContainer = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
`;

const LoginButton = styled(Button)`
  margin-top: 5rem;
`;

const SLink = styled(Link)`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.color.GRAY};
  margin-top: 2rem;

  &:hover {
    text-decoration: underline;
  }
`;

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
          console.log(userData);
          const { token, accountname, image: profileImg } = userData;

          localStorage.setItem('token', JSON.stringify(token));
          localStorage.setItem('profileImg', JSON.stringify(profileImg));
          localStorage.setItem('accountName', JSON.stringify(accountname));

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
    <SContainer>
      <Title>로그인</Title>
      <SFormContainer>
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
        <LoginButton
          text="로그인"
          buttonStyle={LARGE_BUTTON}
          onClick={handleLoginClick}
          disabled={buttonNotAllow}
        />
      </SFormContainer>
      <SLink to="/signup">이메일로 회원가입</SLink>
    </SContainer>
  );
}

export default Login;
