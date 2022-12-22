import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './index.style';
import Title from '../../../components/Title';
import ProfileImageInput from '../../../components/ProfileImageInput';
import AuthInputForm from '../../../components/AuthInputForm';
import { LARGE_BUTTON } from '../../../constants/buttonStyle';

function ProfileSetting() {
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(state);

  // 이메일, 비밀번호 정보 없는 상태에서 URL에 /signup/profile하면 회원가입 페이지로 이동
  useEffect(() => {
    if (!state?.email || !state?.password) navigate('/signup');
  }, []);

  return (
    <S.Container>
      <Title>프로필 설정</Title>
      <S.SubText>나중에 언제든지 변경할 수 있습니다.</S.SubText>
      <ProfileImageInput />
      <S.FormContainer>
        <AuthInputForm
          id="id"
          label="사용자 ID"
          inputProps={{
            type: 'text',
            placeholder: '아이디를 입력해주세요',
          }}
        />
        <AuthInputForm
          id="name"
          label="사용자 이름"
          inputProps={{
            type: 'text',
            placeholder: '이름을 입력해주세요',
          }}
        />
        <AuthInputForm
          id="intro"
          label="소개"
          inputProps={{
            type: 'text',
            placeholder: '소개글을 작성해주세요',
          }}
        />
        <S.JoinButton text="후키 시작하기" buttonStyle={LARGE_BUTTON} />
      </S.FormContainer>
    </S.Container>
  );
}

export default ProfileSetting;
