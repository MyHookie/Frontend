import React from 'react';
import styled from 'styled-components';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';
import Button from '../../common/Button';
import FormInput from '../FormInput';

const FormContainer = styled.form`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
        warningMsg="* 이미 가입된 이메일 주소입니다."
        isValide
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
      <Button text="회원가입" buttonStyle={LARGE_BUTTON} />
    </FormContainer>
  );
}

export default SignUpForm;
