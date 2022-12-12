import React from 'react';
import styled from 'styled-components';
import FormInput from '../FormInput';

const FormContainer = styled.form`
  margin-top: 4rem;
`;

function SignUpForm() {
  return (
    <FormContainer>
      <FormInput
        id="email"
        label="이메일"
        inputProps={{
          type: 'email',
          placeholder: '이메일 주소를 입력해주세요.',
        }}
      />
      <FormInput
        id="password"
        label="비밀번호"
        inputProps={{
          type: 'password',
          placeholder: '비밀번호를 입력해주세요.',
          autoComplete: 'off',
        }}
      />
      <FormInput
        id="checkedPassword"
        label="비밀번호 확인"
        inputProps={{
          type: 'password',
          placeholder: '비밀번호를 한번 더 입력해주세요.',
          autoComplete: 'off',
        }}
      />
    </FormContainer>
  );
}

export default SignUpForm;
