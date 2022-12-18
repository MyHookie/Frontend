import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import AuthInputForm from '../../../components/AuthInputForm';
import Button from '../../../components/common/Button';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';
import Title from '../../../components/Title';
import { userEmail, userPassword } from '../../../atoms/auth';
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
  const [loginEmail, setLoginEmail] = useRecoilState(userEmail);
  const [loginPassword, setLoginPassword] = useRecoilState(userPassword);

  const handleLoginEmail = (e) => {
    setLoginEmail(e.target.value);
  };
  const handleLoginPassword = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();

    try {
      const data = await authAxios.post('/login', {
        user: {
          email: loginEmail,
          password: loginPassword,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

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
        />
        <AuthInputForm
          id="password"
          label="비밀번호"
          inputProps={{
            type: 'password',
            placeholder: '비밀번호를 입력해주세요',
          }}
          handleLoginState={handleLoginPassword}
        />
        <LoginButton
          text="로그인"
          buttonStyle={LARGE_BUTTON}
          onClick={handleLoginClick}
        />
      </SFormContainer>
      <SLink to="/signup">이메일로 회원가입</SLink>
    </SContainer>
  );
}

export default Login;
