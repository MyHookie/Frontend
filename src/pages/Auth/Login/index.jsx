import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  useEffect(() => {
    if (loginEmail && loginPassword) {
      return setButtonNotAllow(false);
    }
    return setButtonNotAllow(true);
  }, [loginEmail, loginPassword]);

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
          console.log(res.data);
        }

        if (res.data.message === '이메일 또는 비밀번호가 일치하지 않습니다.') {
          setIsCorrect(false);
          setLoginWarningMsg('* 이메일 또는 비밀번호가 일치하지 않습니다.');
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
